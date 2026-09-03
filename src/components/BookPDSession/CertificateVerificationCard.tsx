import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  AlertCircle, 
  XCircle, 
  Loader2, 
  FileText, 
  ExternalLink, 
  Download, 
  Calendar, 
  User, 
  Award,
  RotateCcw,
  Sparkles,
  Maximize2,
  Minimize2
} from 'lucide-react';

export interface VerifiedCertificate {
  certificate_id: string;
  full_name: string;
  session_name: string;
  issue_date: string;
  status: 'valid' | 'revoked' | 'expired' | string;
  certificate_url?: string;
}

export interface VerifyCertificateResponse {
  verified: boolean;
  certificate?: VerifiedCertificate;
  message?: string;
}

/**
 * Format YYYY-MM-DD date into friendly readable format
 */
const formatDisplayDate = (dateStr: string): string => {
  if (!dateStr) return '';
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const year = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const day = parseInt(parts[2], 10);
      const d = new Date(year, month, day);
      if (!isNaN(d.getTime())) {
        return d.toLocaleDateString('en-US', {
          weekday: 'short',
          month: 'short',
          day: 'numeric',
          year: 'numeric'
        });
      }
    }
    return dateStr;
  } catch {
    return dateStr;
  }
};

export const CertificateVerificationCard: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [certificateId, setCertificateId] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [networkError, setNetworkError] = useState<string | null>(null);
  const [verifiedResult, setVerifiedResult] = useState<VerifyCertificateResponse | null>(null);
  const [viewSize, setViewSize] = useState<'dynamic' | 'a4-portrait' | 'a4-landscape'>('dynamic');
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Close fullscreen on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isFullscreen) {
        setIsFullscreen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFullscreen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Prevent duplicate submissions while already requesting
    if (isLoading) return;

    setValidationError(null);
    setNetworkError(null);

    const trimmedName = fullName.trim();
    const trimmedId = certificateId.trim();

    // Handle empty inputs before sending request
    if (!trimmedName || !trimmedId) {
      setValidationError('Please enter both your Full Name and Certificate ID.');
      return;
    }

    setIsLoading(true);
    setVerifiedResult(null);

    const query = `certificate_id=${encodeURIComponent(trimmedId)}&full_name=${encodeURIComponent(trimmedName)}`;

    try {
      let response: Response;
      try {
        response = await fetch(`/wp-json/certificates/v1/verify?${query}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          }
        });
      } catch {
        // Fallback for preview/local environments if relative path is unreachable
        response = await fetch(`https://chelsongordon.com/wp-json/certificates/v1/verify?${query}`, {
          method: 'GET',
          headers: {
            'Accept': 'application/json'
          }
        });
      }

      // The endpoint returns JSON for both 200 and 404 (e.g. {"verified": false, "message": "..."})
      const data: VerifyCertificateResponse = await response.json();

      if (data && data.verified && data.certificate) {
        setVerifiedResult({
          verified: true,
          certificate: data.certificate
        });
      } else {
        setVerifiedResult({
          verified: false,
          message: data?.message || 'No matching certificate was found for the provided details.'
        });
      }
    } catch (err) {
      console.error('Certificate verification request failed:', err);
      setNetworkError('Unable to connect to the verification server. Please check your network connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setFullName('');
    setCertificateId('');
    setValidationError(null);
    setNetworkError(null);
    setVerifiedResult(null);
  };

  // Determine status visual attributes
  const renderStatusBadge = (status: string) => {
    const normalized = (status || '').toLowerCase();

    if (normalized === 'valid') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 border border-emerald-200/80">
          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
          <span>Valid Certificate</span>
        </span>
      );
    }

    if (normalized === 'revoked') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200/80">
          <XCircle className="w-3.5 h-3.5 text-rose-600 shrink-0" />
          <span>Certificate Revoked</span>
        </span>
      );
    }

    if (normalized === 'expired') {
      return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-100 text-amber-800 border border-amber-200/80">
          <AlertCircle className="w-3.5 h-3.5 text-amber-600 shrink-0" />
          <span>Certificate Expired</span>
        </span>
      );
    }

    // Default status fallback
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
        <ShieldCheck className="w-3.5 h-3.5 text-slate-500 shrink-0" />
        <span className="capitalize">{status}</span>
      </span>
    );
  };

  return (
    <div 
      id="certificate-verification-section"
      className="mt-8 sm:mt-12 bg-white rounded-[26px] sm:rounded-[28px] p-6 sm:p-8 lg:p-10 border border-slate-200/80 shadow-sm relative overflow-hidden scroll-mt-28 sm:scroll-mt-36"
    >
      {/* Decorative top-right accent blur */}
      <div 
        className="absolute -top-24 -right-24 w-80 h-80 bg-[#0072CE]/8 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Card Header */}
      <div className="mb-6 sm:mb-8 pb-5 sm:pb-6 border-b border-slate-100 relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0072CE]/10 text-[#0072CE] text-xs font-bold tracking-wider uppercase mb-3">
          <ShieldCheck className="w-3.5 h-3.5 text-[#0072CE]" />
          <span>Certificate Verification</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] font-black text-[#042F61] tracking-tight leading-tight">
          Verify your Certificate
        </h2>
        <p className="text-sm sm:text-base text-slate-600 max-w-2xl mt-2 leading-relaxed">
          Verify the authenticity of a Professional Development Certificate by entering the participant's Full Name and unique Certificate ID.
        </p>
      </div>

      {/* Verification Search Form */}
      <form onSubmit={handleSubmit} className="relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 sm:gap-5 items-end">
          
          {/* Full Name Input */}
          <div className="sm:col-span-5">
            <label 
              htmlFor="verify-full-name" 
              className="block text-xs font-bold uppercase tracking-wider text-[#042F61] mb-2"
            >
              Full Name
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <User className="w-4 h-4" />
              </div>
              <input
                id="verify-full-name"
                type="text"
                value={fullName}
                onChange={(e) => {
                  setFullName(e.target.value);
                  if (validationError) setValidationError(null);
                }}
                disabled={isLoading}
                placeholder="e.g. John Smith"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 hover:bg-white focus:bg-white rounded-xl border border-slate-200 focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/20 text-[#042F61] placeholder-slate-400 text-sm font-medium transition-all outline-hidden disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Certificate ID Input */}
          <div className="sm:col-span-4">
            <label 
              htmlFor="verify-certificate-id" 
              className="block text-xs font-bold uppercase tracking-wider text-[#042F61] mb-2"
            >
              Certificate ID
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Award className="w-4 h-4" />
              </div>
              <input
                id="verify-certificate-id"
                type="text"
                value={certificateId}
                onChange={(e) => {
                  setCertificateId(e.target.value);
                  if (validationError) setValidationError(null);
                }}
                disabled={isLoading}
                placeholder="e.g. CERT-12345"
                className="w-full pl-10 pr-4 py-3 bg-slate-50 hover:bg-white focus:bg-white rounded-xl border border-slate-200 focus:border-[#0072CE] focus:ring-2 focus:ring-[#0072CE]/20 text-[#042F61] placeholder-slate-400 text-sm font-medium transition-all outline-hidden disabled:opacity-60 disabled:cursor-not-allowed"
              />
            </div>
          </div>

          {/* Submit Action Button */}
          <div className="sm:col-span-3">
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-[#FDB913] hover:bg-[#0072CE] text-[#042F61] hover:text-white text-sm font-black tracking-wider uppercase py-3.5 px-5 rounded-xl shadow-md transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none group"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#042F61]" />
                  <span>Verifying...</span>
                </>
              ) : (
                <>
                  <Search className="w-4 h-4 transition-transform duration-200 group-hover:scale-110" />
                  <span>Verify</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Validation Error Message */}
        {validationError && (
          <div className="mt-3.5 p-3 rounded-xl bg-amber-50 border border-amber-200/80 text-amber-800 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
            <AlertCircle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>{validationError}</span>
          </div>
        )}

        {/* Network Error Message */}
        {networkError && (
          <div className="mt-3.5 p-3 rounded-xl bg-rose-50 border border-rose-200/80 text-rose-800 text-xs font-semibold flex items-center gap-2 animate-fadeIn">
            <AlertCircle className="w-4 h-4 text-rose-600 shrink-0" />
            <span>{networkError}</span>
          </div>
        )}
      </form>

      {/* Result Section */}
      {verifiedResult && (
        <div className="mt-8 pt-7 border-t border-slate-100 relative z-10">
          {verifiedResult.verified && verifiedResult.certificate ? (
            /* Successful Verification Result */
            <div className="space-y-6">
              
              {/* Summary Header Banner */}
              <div className="bg-[#E1EFFB]/70 border border-[#B8DCF8] rounded-2xl p-5 sm:p-6 relative overflow-hidden">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-3.5">
                    <div className="w-10 h-10 rounded-xl bg-[#0072CE] text-white flex items-center justify-center shrink-0 shadow-sm mt-0.5">
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2.5 flex-wrap">
                        <span className="text-[11px] font-bold text-[#0072CE] uppercase tracking-wider">
                          Verified Participant
                        </span>
                        {renderStatusBadge(verifiedResult.certificate.status)}
                      </div>
                      <h3 className="text-xl sm:text-2xl font-black text-[#042F61] tracking-tight mt-1">
                        {verifiedResult.certificate.full_name}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-slate-600 mt-0.5">
                        {verifiedResult.certificate.session_name}
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={handleReset}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-[#042F61] bg-white border border-slate-200 hover:border-[#0072CE] hover:text-[#0072CE] shadow-xs transition-colors self-start sm:self-center cursor-pointer"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    <span>Check Another</span>
                  </button>
                </div>

                {/* Key Certificate Details Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-5 pt-4 border-t border-[#B8DCF8]/60">
                  <div className="bg-white/80 rounded-xl p-3 border border-white/60">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Certificate ID
                    </span>
                    <span className="text-xs sm:text-sm font-black text-[#042F61] font-mono mt-0.5 block truncate">
                      {verifiedResult.certificate.certificate_id}
                    </span>
                  </div>

                  <div className="bg-white/80 rounded-xl p-3 border border-white/60">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Issue Date
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#042F61] mt-0.5 flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-[#0072CE] shrink-0" />
                      <span className="truncate">{formatDisplayDate(verifiedResult.certificate.issue_date)}</span>
                    </span>
                  </div>

                  <div className="bg-white/80 rounded-xl p-3 border border-white/60">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Status
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#042F61] mt-0.5 block capitalize truncate">
                      {verifiedResult.certificate.status}
                    </span>
                  </div>

                  <div className="bg-white/80 rounded-xl p-3 border border-white/60">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block tracking-wider">
                      Session Name
                    </span>
                    <span className="text-xs sm:text-sm font-bold text-[#042F61] mt-0.5 block truncate" title={verifiedResult.certificate.session_name}>
                      {verifiedResult.certificate.session_name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Certificate PDF View Section */}
              <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-lg bg-[#0072CE]/10 flex items-center justify-center text-[#0072CE]">
                      <FileText className="w-4 h-4" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#042F61]">
                        Official Certificate Document
                      </h4>
                      <p className="text-[11px] text-slate-500">
                        Rendered electronic verification document for {verifiedResult.certificate.full_name}
                      </p>
                    </div>
                  </div>

                  {/* Existing certificate/download/view button */}
                  {verifiedResult.certificate.certificate_url && (
                    <div className="flex items-center gap-2">
                      <a
                        href={verifiedResult.certificate.certificate_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-flex items-center justify-center gap-1.5 bg-[#0072CE] hover:bg-[#042F61] text-white text-xs font-bold py-2.5 px-4 rounded-xl shadow-xs transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download PDF</span>
                      </a>
                      <a
                        href={verifiedResult.certificate.certificate_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 bg-white hover:bg-slate-100 text-[#042F61] border border-slate-300 text-xs font-bold py-2.5 px-3.5 rounded-xl shadow-xs transition-colors"
                        title="Open Certificate in new tab"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span className="hidden sm:inline">Open</span>
                      </a>
                    </div>
                  )}
                </div>

                {/* Sizing & Orientation Controls Toolbar */}
                {verifiedResult.certificate.certificate_url && (
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-3.5 pb-3 border-b border-slate-200/80">
                    <div className="flex items-center gap-1 bg-slate-200/70 p-1 rounded-xl">
                      <button
                        type="button"
                        onClick={() => setViewSize('dynamic')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          viewSize === 'dynamic'
                            ? 'bg-white text-[#042F61] shadow-xs'
                            : 'text-slate-600 hover:text-[#042F61]'
                        }`}
                        title="Dynamic responsive viewport to view the whole page"
                      >
                        Dynamic Full View
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewSize('a4-portrait')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          viewSize === 'a4-portrait'
                            ? 'bg-white text-[#042F61] shadow-xs'
                            : 'text-slate-600 hover:text-[#042F61]'
                        }`}
                        title="Standard A4 Portrait ratio (210 × 297 mm)"
                      >
                        A4 Portrait
                      </button>
                      <button
                        type="button"
                        onClick={() => setViewSize('a4-landscape')}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                          viewSize === 'a4-landscape'
                            ? 'bg-white text-[#042F61] shadow-xs'
                            : 'text-slate-600 hover:text-[#042F61]'
                        }`}
                        title="Standard A4 Landscape ratio (297 × 210 mm)"
                      >
                        A4 Landscape
                      </button>
                    </div>

                    <button
                      type="button"
                      onClick={() => setIsFullscreen(true)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold text-[#042F61] bg-white border border-slate-200 hover:border-[#0072CE] hover:text-[#0072CE] shadow-xs transition-colors cursor-pointer"
                      title="Expand to Fullscreen A4 view"
                    >
                      <Maximize2 className="w-3.5 h-3.5" />
                      <span>Fullscreen</span>
                    </button>
                  </div>
                )}

                {/* PDF Viewer Embed */}
                {verifiedResult.certificate.certificate_url ? (
                  <div 
                    className={`relative rounded-xl overflow-hidden border border-slate-200 bg-white shadow-inner transition-all duration-300 ${
                      viewSize === 'a4-portrait'
                        ? 'w-full max-w-[720px] aspect-[1/1.414] min-h-[580px] mx-auto'
                        : viewSize === 'a4-landscape'
                          ? 'w-full aspect-[1.414/1] min-h-[460px] max-h-[85vh] mx-auto'
                          : 'w-full h-[78vh] min-h-[640px] sm:min-h-[750px] lg:min-h-[880px] max-h-[1100px]'
                    }`}
                  >
                    <iframe
                      src={`${verifiedResult.certificate.certificate_url}#view=Fit&toolbar=1&navpanes=0`}
                      className="w-full h-full border-none"
                      title={`Official Certificate for ${verifiedResult.certificate.full_name}`}
                    />
                  </div>
                ) : (
                  <div className="p-6 text-center bg-white rounded-xl border border-dashed border-slate-300">
                    <FileText className="w-8 h-8 text-slate-400 mx-auto mb-2" />
                    <p className="text-xs text-slate-500 font-medium">
                      PDF preview is currently unavailable for this record.
                    </p>
                  </div>
                )}
              </div>

              {/* Fullscreen A4 Modal Overlay */}
              {isFullscreen && verifiedResult?.certificate?.certificate_url && (
                <div className="fixed inset-0 z-50 bg-[#042F61]/90 backdrop-blur-md p-3 sm:p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2.5 text-white">
                    <div className="flex items-center gap-2.5 truncate mr-3">
                      <FileText className="w-4 h-4 text-[#FDB913] shrink-0" />
                      <span className="text-sm font-bold truncate">
                        Certificate: {verifiedResult.certificate.full_name} ({verifiedResult.certificate.certificate_id})
                      </span>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <a
                        href={verifiedResult.certificate.certificate_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        download
                        className="inline-flex items-center gap-1.5 bg-[#0072CE] hover:bg-[#005bb5] text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Download</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => setIsFullscreen(false)}
                        className="inline-flex items-center gap-1.5 bg-white/20 hover:bg-white/30 text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors cursor-pointer"
                      >
                        <Minimize2 className="w-3.5 h-3.5" />
                        <span>Close (Esc)</span>
                      </button>
                    </div>
                  </div>
                  <div className="flex-1 w-full rounded-xl overflow-hidden bg-white shadow-2xl border border-white/20">
                    <iframe
                      src={`${verifiedResult.certificate.certificate_url}#view=Fit&toolbar=1`}
                      className="w-full h-full border-none"
                      title={`Official Certificate for ${verifiedResult.certificate.full_name} (Fullscreen)`}
                    />
                  </div>
                </div>
              )}

            </div>
          ) : (
            /* Not Found / Invalid State */
            <div className="bg-rose-50/70 border border-rose-200/80 rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-rose-100 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                  <XCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-rose-950">
                    Certificate Verification Failed
                  </h4>
                  <p className="text-xs sm:text-sm text-rose-800 mt-1 leading-relaxed max-w-xl">
                    {verifiedResult.message || 'No certificate record was found matching the provided Certificate ID and Full Name. Please confirm the details on the issued document.'}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleReset}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold text-rose-900 bg-white border border-rose-200 hover:bg-rose-50 shadow-xs transition-colors shrink-0 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Try Again</span>
              </button>
            </div>
          )}
        </div>
      )}

    </div>
  );
};
