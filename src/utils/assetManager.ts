import { useState, useEffect } from 'react';

/**
 * React hook to reactively resolve and update asset URLs when the manifest loads
 */
export function useAssetUrl(
  rawUrlOrKey: string,
  fallbackUrl?: string,
  explicitKey?: string
): string {
  const [resolvedUrl, setResolvedUrl] = useState<string>(() =>
    resolveAssetUrl(rawUrlOrKey, fallbackUrl, explicitKey)
  );

  useEffect(() => {
    // Immediate calculation in case manifest or window props changed
    setResolvedUrl(resolveAssetUrl(rawUrlOrKey, fallbackUrl, explicitKey));

    // Subscribe to external manifest load events
    const unsubscribe = subscribeToManifest(() => {
      setResolvedUrl(resolveAssetUrl(rawUrlOrKey, fallbackUrl, explicitKey));
    });

    return unsubscribe;
  }, [rawUrlOrKey, fallbackUrl, explicitKey]);

  return resolvedUrl;
}

/**
 * React hook to observe full asset manifest data
 */
export function useAssetManifest(): FullAssetManifest | null {
  const [manifest, setManifest] = useState<FullAssetManifest | null>(() => manifestCache);

  useEffect(() => {
    if (manifestCache) {
      setManifest(manifestCache);
    }

    const unsubscribe = subscribeToManifest(() => {
      setManifest(manifestCache);
    });

    return unsubscribe;
  }, []);

  return manifest;
}

/**
 * Dynamic GCP Asset Caching & Versioning Service
 *
 * Allows employee photographs, team card images, SVG logos, and other static assets
 * hosted on Google Cloud Storage (GCP) or WordPress to be updated frequently without
 * requiring a React rebuild or redeployment.
 *
 * Architecture:
 * 1. An external JSON manifest (hosted on GCP or injected via WordPress window config)
 *    maps asset keys/filenames/IDs to explicit version tags or full URLs.
 * 2. Stable query string versioning (e.g. `image.webp?v=2`) ensures long-lived browser/CDN
 *    caching while enabling immediate cache-busting when an asset is updated in the manifest.
 * 3. Non-blocking asynchronous loading: Initial renders use stable default URLs instantly;
 *    reactive subscribers update asset URLs smoothly once the manifest is resolved.
 */

export interface AssetRecord {
  url?: string;
  photo?: string;
  image?: string;
  src?: string;
  version?: string | number;
  [key: string]: unknown;
}

export type AssetManifestData = Record<string, string | number | AssetRecord>;

export interface FullAssetManifest {
  meta?: {
    version?: string | number;
    updatedAt?: string;
    description?: string;
  };
  base_url?: string;
  teams?: Record<string, string | AssetRecord>;
  employees?: Record<string, string | AssetRecord>;
  assets?: Record<string, string | AssetRecord>;
  versions?: Record<string, string | number>;
  [key: string]: unknown;
}

// Global window extensions for WordPress / runtime configuration
declare global {
  interface Window {
    CG_PEOPLE_ASSETS?: FullAssetManifest | AssetManifestData;
    CG_ASSET_MANIFEST_URL?: string;
    CG_ASSET_VERSIONS?: Record<string, string | number>;
  }
}

// Default GCP and fallback URLs
const DEFAULT_GCP_MANIFEST_URL = 'https://storage.googleapis.com/chelsongordon/com.chelsongordon/config/people-assets.json';
const LOCAL_FALLBACK_MANIFEST_URL = '/people-assets.json';

// In-memory cache for parsed manifest
let manifestCache: FullAssetManifest | null = null;
let isFetchingManifest = false;
const listeners = new Set<() => void>();

/**
 * Extracts filename from a URL or path
 */
function extractFilename(urlOrPath: string): string {
  try {
    const cleanUrl = urlOrPath.split('?')[0].split('#')[0];
    const parts = cleanUrl.split('/');
    return parts[parts.length - 1] || '';
  } catch {
    return '';
  }
}

/**
 * Helper to safely append or replace a version query parameter
 */
export function applyVersionToUrl(url: string, version: string | number): string {
  if (!url || version === undefined || version === null || version === '') {
    return url;
  }

  const vStr = String(version).trim();
  if (!vStr) return url;

  // If the version is already formatted like "v=2", extract just the value
  const cleanVersion = vStr.startsWith('v=') ? vStr.substring(2) : vStr;

  try {
    // If it's a valid absolute URL
    if (url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//')) {
      const urlObj = new URL(url, window.location.origin);
      urlObj.searchParams.set('v', cleanVersion);
      return urlObj.toString();
    }

    // For relative paths
    const [base, queryString] = url.split('?');
    const searchParams = new URLSearchParams(queryString || '');
    searchParams.set('v', cleanVersion);
    return `${base}?${searchParams.toString()}`;
  } catch {
    // Fallback simple string replacement
    const cleanBase = url.split('?')[0];
    return `${cleanBase}?v=${encodeURIComponent(cleanVersion)}`;
  }
}

/**
 * Normalizes an asset lookup key
 */
function normalizeKey(key: string): string {
  return key.toLowerCase().trim().replace(/[^a-z0-9_-]/g, '-');
}

/**
 * Resolves an asset URL using the current manifest and optional fallback/versioning logic
 */
export function resolveAssetUrl(
  rawUrlOrKey: string,
  fallbackUrl?: string,
  explicitKey?: string
): string {
  if (!rawUrlOrKey && !fallbackUrl) return '';

  const input = (rawUrlOrKey || fallbackUrl || '').trim();
  if (!input) return '';

  const manifest = manifestCache || (typeof window !== 'undefined' ? window.CG_PEOPLE_ASSETS : null);
  const globalVersions = typeof window !== 'undefined' ? window.CG_ASSET_VERSIONS : null;

  // 1. Gather all potential lookup keys
  const keysToTry: string[] = [];
  if (explicitKey) {
    keysToTry.push(explicitKey, normalizeKey(explicitKey));
  }
  keysToTry.push(input, normalizeKey(input));

  const filename = extractFilename(input);
  if (filename) {
    keysToTry.push(filename, normalizeKey(filename));
    // Also try without extension (e.g. 'learning_2' from 'learning_2.webp')
    const withoutExt = filename.replace(/\.[^/.]+$/, '');
    if (withoutExt && withoutExt !== filename) {
      keysToTry.push(withoutExt, normalizeKey(withoutExt));
    }
  }

  // 2. Check window.CG_ASSET_VERSIONS overrides
  if (globalVersions) {
    for (const key of keysToTry) {
      if (globalVersions[key] !== undefined) {
        return applyVersionToUrl(input, globalVersions[key]);
      }
    }
  }

  // 3. Inspect Manifest Cache / Window Config
  if (manifest) {
    // Check specific version dictionary in manifest
    if (manifest.versions) {
      for (const key of keysToTry) {
        if (manifest.versions[key] !== undefined) {
          return applyVersionToUrl(input, manifest.versions[key]);
        }
      }
    }

    // Helper to extract URL and version from a manifest entry
    const checkBucket = (bucket: Record<string, string | number | AssetRecord> | undefined) => {
      if (!bucket || typeof bucket !== 'object') return null;

      for (const key of keysToTry) {
        const entry = bucket[key];
        if (!entry) continue;

        // String URL or version
        if (typeof entry === 'string') {
          if (entry.startsWith('http://') || entry.startsWith('https://') || entry.startsWith('/') || entry.startsWith('.')) {
            return entry;
          }
          // It's a version string
          return applyVersionToUrl(input, entry);
        }

        // Numeric version
        if (typeof entry === 'number') {
          return applyVersionToUrl(input, entry);
        }

        // Object entry
        if (typeof entry === 'object' && entry !== null) {
          const targetUrl = entry.photo || entry.image || entry.url || entry.src || input;
          if (entry.version !== undefined) {
            return applyVersionToUrl(targetUrl, entry.version);
          }
          if (targetUrl) return targetUrl;
        }
      }
      return null;
    };

    // Check categorized sections in full manifest
    const matchedEmployee = checkBucket(manifest.employees as Record<string, string | number | AssetRecord>);
    if (matchedEmployee) return matchedEmployee;

    const matchedTeam = checkBucket(manifest.teams as Record<string, string | number | AssetRecord>);
    if (matchedTeam) return matchedTeam;

    const matchedAsset = checkBucket(manifest.assets as Record<string, string | number | AssetRecord>);
    if (matchedAsset) return matchedAsset;

    // Check root level of flat manifest
    const matchedRoot = checkBucket(manifest as Record<string, string | number | AssetRecord>);
    if (matchedRoot) return matchedRoot;
  }

  // If no manifest version match found, return the input (or fallback) cleanly
  return input;
}

/**
 * Helper to resolve an employee photograph URL
 */
export function getEmployeePhotoUrl(employeeIdOrName: string, defaultUrl?: string): string {
  return resolveAssetUrl(defaultUrl || '', defaultUrl, employeeIdOrName);
}

/**
 * Helper to resolve a team image URL
 */
export function getTeamImageUrl(teamId: string, defaultUrl?: string): string {
  return resolveAssetUrl(defaultUrl || '', defaultUrl, teamId);
}

/**
 * Asynchronously loads the external asset manifest
 */
export async function loadAssetManifest(): Promise<FullAssetManifest | null> {
  // If window has an injected configuration from WordPress, use it immediately
  if (typeof window !== 'undefined' && window.CG_PEOPLE_ASSETS && typeof window.CG_PEOPLE_ASSETS === 'object') {
    manifestCache = window.CG_PEOPLE_ASSETS;
    notifyListeners();
    return manifestCache;
  }

  if (manifestCache) {
    return manifestCache;
  }

  if (isFetchingManifest) {
    return null;
  }

  isFetchingManifest = true;

  const manifestUrlsToTry: string[] = [];
  if (typeof window !== 'undefined' && window.CG_ASSET_MANIFEST_URL) {
    manifestUrlsToTry.push(window.CG_ASSET_MANIFEST_URL);
  }
  manifestUrlsToTry.push(DEFAULT_GCP_MANIFEST_URL);
  manifestUrlsToTry.push(LOCAL_FALLBACK_MANIFEST_URL);

  for (const url of manifestUrlsToTry) {
    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
        // Cache according to standard browser/CDN rules (do not use no-store / no-cache)
        cache: 'default',
      });

      if (response.ok) {
        const data = await response.json();
        if (data && typeof data === 'object') {
          manifestCache = data;
          notifyListeners();
          isFetchingManifest = false;
          return manifestCache;
        }
      }
    } catch {
      // Continue to next candidate URL without breaking UI
    }
  }

  isFetchingManifest = false;
  return null;
}

/**
 * Subscribe to manifest load updates
 */
export function subscribeToManifest(callback: () => void): () => void {
  listeners.add(callback);
  return () => {
    listeners.delete(callback);
  };
}

function notifyListeners() {
  listeners.forEach((listener) => {
    try {
      listener();
    } catch (e) {
      console.warn('[AssetManager] Listener execution error:', e);
    }
  });
}

// Auto-trigger manifest load in browser environment
if (typeof window !== 'undefined') {
  // Use requestIdleCallback or microtask so it does not block initial paint
  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(() => {
      loadAssetManifest();
    });
  } else {
    setTimeout(() => {
      loadAssetManifest();
    }, 0);
  }
}
