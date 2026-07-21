import { geoMercator, geoPath, geoGraticule } from "d3-geo";
import * as topojson from "topojson-client";
import { optimize } from "svgo";
import fs from "fs";
import https from "https";
import path from "path";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = "";
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(e);
        }
      });
    }).on("error", reject);
  });
}

async function run() {
  console.log("Fetching topojson map data...");
  const topology = await fetchJSON(geoUrl);
  
  console.log("Parsing topojson and projecting features...");
  // Convert TopoJSON to GeoJSON
  const countriesCollection = topojson.feature(topology, topology.objects.countries);
  
  const width = 800;
  const height = 600;
  const projection = geoMercator()
    .scale(320)
    .center([125, 0])
    .translate([width / 2, height / 2]);
    
  const pathGenerator = geoPath().projection(projection);
  
  // Generate Graticule path
  const graticuleGenerator = geoGraticule();
  const graticuleGeoJSON = graticuleGenerator();
  const graticulePath = pathGenerator(graticuleGeoJSON) || "";
  
  // Highlighting check
  const highlightedNames = ["Australia", "India", "Thailand", "Philippines", "Singapore", "Fiji"];
  
  const countries = countriesCollection.features.map((feature) => {
    const name = feature.properties.name || "";
    const id = feature.id || "";
    const d = pathGenerator(feature) || "";
    const isHighlighted = highlightedNames.includes(name);
    return {
      id,
      name,
      d,
      isHighlighted
    };
  });
  
  // Locations coordinates to project
  const originalLocations = [
    { 
      name: "India", 
      coordinates: [78.9629, 20.5937], 
      stats: [
        { label: "Kolkata", value: 40 },
        { label: "Udaipur", value: 8 }
      ]
    },
    { 
      name: "Thailand", 
      coordinates: [100.9925, 15.8700], 
      stats: [
        { label: "Bangkok", value: 14 }
      ]
    },
    { 
      name: "Philippines", 
      coordinates: [121.7740, 12.8797], 
      stats: []
    },
    { 
      name: "Singapore", 
      coordinates: [103.851959, 1.290270], 
      stats: []
    },
    { 
      name: "Australia", 
      coordinates: [133.7751, -25.2744], 
      stats: [
        { label: "Brisbane", value: 8 },
        { label: "Sydney", value: 2 }
      ]
    },
    { 
      name: "Fiji", 
      coordinates: [178.4419, -18.1416], 
      stats: [
        { label: "Lautoka", value: 10 }
      ]
    },
  ];
  
  const projectedLocations = originalLocations.map(loc => {
    const [x, y] = projection(loc.coordinates) || [0, 0];
    return {
      name: loc.name,
      x: parseFloat(x.toFixed(2)),
      y: parseFloat(y.toFixed(2)),
      stats: loc.stats
    };
  });
  
  // Project lines
  const rawLines = [];
  const sgLoc = originalLocations.find(l => l.name === "Singapore");
  const sgCoords = sgLoc.coordinates;
  const sgProj = projection(sgCoords);
  
  originalLocations.forEach(loc => {
    if (loc.name === "Singapore") return;
    const fromProj = projection(loc.coordinates);
    if (fromProj && sgProj) {
      rawLines.push({
        key: `line-hub-${loc.name}`,
        x1: parseFloat(fromProj[0].toFixed(2)),
        y1: parseFloat(fromProj[1].toFixed(2)),
        x2: parseFloat(sgProj[0].toFixed(2)),
        y2: parseFloat(sgProj[1].toFixed(2))
      });
    }
  });
  
  const connectLine = (fromCoords, toCoords, key) => {
    const fromProj = projection(fromCoords);
    const toProj = projection(toCoords);
    if (fromProj && toProj) {
      rawLines.push({
        key,
        x1: parseFloat(fromProj[0].toFixed(2)),
        y1: parseFloat(fromProj[1].toFixed(2)),
        x2: parseFloat(toProj[0].toFixed(2)),
        y2: parseFloat(toProj[1].toFixed(2))
      });
    }
  };
  
  connectLine([133.7751, -25.2744], [178.4419, -18.1416], "line-aus-fiji");
  connectLine([78.9629, 20.5937], [100.9925, 15.8700], "line-india-thailand");
  connectLine([121.7740, 12.8797], [103.851959, 1.290270], "line-phil-sing");

  // Highlight dots offsets relative to location center (for animations)
  const dots = [
    { x: 10, y: 5, r: 1.2, o: 0.5 },
    { x: -12, y: 8, r: 0.8, o: 0.3 },
    { x: 14, y: -10, r: 1.0, o: 0.4 },
    { x: -8, y: -14, r: 0.6, o: 0.2 },
    { x: 18, y: 2, r: 0.9, o: 0.35 },
    { x: -15, y: -5, r: 0.7, o: 0.25 },
    { x: 4, y: 16, r: 0.8, o: 0.3 },
    { x: -6, y: 10, r: 1.1, o: 0.45 },
  ];

  // Now, construct the SVG string
  let svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" class="w-full h-full">
  <style>
    @keyframes map-pulse-dot {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 1; }
    }
    .highlight-dot {
      animation: map-pulse-dot var(--dur, 2s) infinite ease-in-out;
      animation-delay: var(--delay, 0s);
    }
    @keyframes map-pulse-ring {
      0% {
        transform: scale(1);
        opacity: 0.5;
      }
      100% {
        transform: scale(2.5);
        opacity: 0;
      }
    }
    .pulsating-ring {
      transform-origin: 0px 0px;
      animation: map-pulse-ring 2s infinite linear;
    }
    .core-point {
      transition: all 0.3s ease;
    }
    .map-location {
      cursor: pointer;
    }
    .map-location:hover .core-point {
      r: 8px;
    }
    .map-location:hover .pulsating-ring {
      animation-duration: 1s;
    }
  </style>
  <defs>
    <!-- Saturated gray dots for general landmasses -->
    <pattern id="landDots" x="0" y="0" width="5.5" height="5.5" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="1.3" fill="#94A3B8" />
    </pattern>
    <!-- Brand Yellow dots for highlighted areas -->
    <pattern id="highlightDots" x="0" y="0" width="5.0" height="5.0" patternUnits="userSpaceOnUse">
      <circle cx="2" cy="2" r="2.0" fill="var(--color-accent)" />
    </pattern>

    <!-- Mask for all landmasses EXCEPT highlighted ones -->
    <mask id="generalLandMask">`;

  countries.forEach((geo, idx) => {
    if (!geo.isHighlighted && geo.d) {
      svg += `\n      <path id="mask-gen-${geo.id || "no-id"}-${idx}" d="${geo.d}" fill="white" stroke="none" />`;
    }
  });

  svg += `\n    </mask>

    <!-- Mask for only highlighted operational areas -->
    <mask id="highlightLandMask">`;

  countries.forEach((geo, idx) => {
    if (geo.isHighlighted && geo.d) {
      svg += `\n      <path id="mask-high-${geo.id || "no-id"}-${idx}" d="${geo.d}" fill="white" stroke="none" />`;
    }
  });

  // Manual buffers
  projectedLocations.forEach(loc => {
    const radius = loc.name === "Singapore" ? 8 : loc.name === "Fiji" ? 12 : 0;
    if (radius > 0) {
      svg += `\n      <circle cx="${loc.x}" cy="${loc.y}" r="${radius}" fill="white" />`;
    }
  });

  svg += `\n    </mask>
  </defs>`;

  // Background Graticule
  if (graticulePath) {
    svg += `\n  <path d="${graticulePath}" stroke="#F1F5F9" stroke-width="0.5" opacity="0.3" fill="none" class="pointer-events-none" />`;
  }

  // Masked Dot Grids for Landmasses
  svg += `\n  <rect width="100%" height="100%" fill="url(#landDots)" mask="url(#generalLandMask)" class="pointer-events-none" />`;
  svg += `\n  <rect width="100%" height="100%" fill="url(#highlightDots)" mask="url(#highlightLandMask)" class="pointer-events-none" />`;

  // Country Outlines
  countries.forEach((geo, idx) => {
    if (geo.d) {
      const isH = geo.isHighlighted;
      svg += `\n  <path id="outline-${geo.id || "no-id"}-${idx}" d="${geo.d}" fill="transparent" stroke="${isH ? "var(--color-accent)" : "#E2E8F0"}" stroke-width="${isH ? 0.6 : 0.3}" stroke-opacity="${isH ? 0.4 : 0.2}" class="pointer-events-none" />`;
    }
  });

  // Network Connections
  svg += `\n  <g stroke="var(--color-primary)" stroke-width="0.6" stroke-opacity="0.25" fill="none" class="pointer-events-none">`;
  rawLines.forEach(line => {
    svg += `\n    <line x1="${line.x1}" y1="${line.y1}" x2="${line.x2}" y2="${line.y2}" stroke-dasharray="3,3" />`;
  });
  svg += `\n  </g>`;

  // Interactive Locations
  projectedLocations.forEach(loc => {
    svg += `\n  <g class="map-location" data-name="${loc.name}" data-stats='${JSON.stringify(loc.stats)}' transform="translate(${loc.x}, ${loc.y})">`;
    
    // Highlight dots
    svg += `\n    <g class="highlight-dots pointer-events-none">`;
    dots.forEach((d, i) => {
      svg += `\n      <circle cx="${d.x}" cy="${d.y}" r="${d.r}" fill="var(--color-primary)" fill-opacity="${d.o}" class="highlight-dot" style="--delay: ${i * 0.1}s; --dur: ${2 + i * 0.2}s;" />`;
    });
    svg += `\n    </g>`;

    // Pulsating Rings
    svg += `\n    <circle class="pulsating-ring" r="12" fill="transparent" stroke="var(--color-primary)" stroke-width="1.5" />`;
    // Core Point
    svg += `\n    <circle class="core-point" r="6" fill="var(--color-primary)" stroke="white" stroke-width="3" />`;
    // Hover Target
    svg += `\n    <circle class="hover-target" r="24" fill="transparent" opacity="0" />`;
    
    svg += `\n  </g>`;
  });

  svg += `\n</svg>`;

  console.log("SVG size before SVGO:", (svg.length / 1024).toFixed(2), "KB");

  console.log("Optimizing SVG with SVGO...");
  const svgoResult = optimize(svg, {
    multipass: true,
    plugins: [
      {
        name: "preset-default",
        params: {
          overrides: {
            cleanupIds: false,
            inlineStyles: false,
          }
        }
      }
    ]
  });

  const optimizedSvg = svgoResult.data;
  console.log("SVG size after SVGO:", (optimizedSvg.length / 1024).toFixed(2), "KB");

  const outputPath = path.resolve("src/components/world-map.optimized.svg");
  fs.writeFileSync(outputPath, optimizedSvg, "utf-8");
  console.log(`Successfully generated optimized world map SVG to ${outputPath}`);
}

run().catch(err => {
  console.error("Error generating map:", err);
  process.exit(1);
});
