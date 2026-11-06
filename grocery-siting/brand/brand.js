// GENERATED from tokens.json by build.py. Do not edit by hand.
const BRAND = {
  "font": "Bahnschrift, \"Segoe UI\", system-ui, sans-serif",
  "themes": {
    "dark": {
      "fig_bg": "#111417",
      "flat_bg": "#171b1e",
      "text_main": "#f2f2f2",
      "text_soft": "#b8bec2",
      "text_faint": "#7b8388",
      "grid": "#262c30",
      "border": "#2e353a",
      "no_data": "#3a4045",
      "accent": "#3b6fff",
      "highlight": "#fcee5a",
      "accent_alt": "#f0833a",
      "rate": [
        "#5b1a8f",
        "#b5367a",
        "#f0833a",
        "#fcee5a"
      ],
      "categorical": [
        "#fcee5a",
        "#f0833a",
        "#e0509a",
        "#9a5be0",
        "#c9b6f0",
        "#f6d9b8"
      ]
    },
    "light": {
      "fig_bg": "#f6f4ef",
      "flat_bg": "#eae7e0",
      "text_main": "#14171a",
      "text_soft": "#454d52",
      "text_faint": "#646c71",
      "grid": "#dcd8cf",
      "border": "#cfcac0",
      "no_data": "#cbc7bd",
      "accent": "#1b4fd8",
      "highlight": "#5b1a8f",
      "accent_alt": "#c95a12",
      "rate": [
        "#fcee5a",
        "#f0833a",
        "#b5367a",
        "#5b1a8f"
      ],
      "categorical": [
        "#5b1a8f",
        "#b5367a",
        "#c95a12",
        "#7a6a00",
        "#8a6fc0",
        "#a0522d"
      ]
    }
  },
  "tiles": {
    "_note": "Raster: Esri gray canvas (no key needed). CARTO raster tiles now require an API key; CARTO's vector GL style still works for MapLibre pages.",
    "raster": {
      "dark": {
        "base": "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}",
        "labels": "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Reference/MapServer/tile/{z}/{y}/{x}"
      },
      "light": {
        "base": "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}",
        "labels": "https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}"
      }
    },
    "max_native_zoom": 16,
    "attribution": "Tiles &copy; Esri",
    "gl_style": {
      "dark": "https://basemaps.cartocdn.com/gl/dark-matter-gl-style/style.json",
      "light": "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json"
    },
    "gl_attribution": "&copy; OpenStreetMap contributors &copy; CARTO"
  },
  "ramps": {
    "red": {
      "dark": [
        "#8a2234",
        "#c8303f",
        "#f0614c",
        "#ffb8a6"
      ],
      "light": [
        "#fbd5cc",
        "#f08a78",
        "#c8303f",
        "#6e1a2b"
      ]
    },
    "blue": {
      "dark": [
        "#254a9e",
        "#3b6fff",
        "#6fa0ff",
        "#bcd6ff"
      ],
      "light": [
        "#cfdcff",
        "#7ea2ff",
        "#2a56d6",
        "#12307a"
      ]
    }
  },
  "furniture": {
    "series": "#30DayMapChallenge",
    "year": "2026",
    "author": "Shreya"
  }
};

/** Leaflet raster tiles (Esri gray canvas): BRAND.tileLayers(L, 'dark').forEach(l => l.addTo(map)) */
BRAND.tileLayers = function (L, mode = "dark", labels = true) {
  const r = BRAND.tiles.raster[mode], mk = (url, extra = {}) =>
    L.tileLayer(url, { maxNativeZoom: BRAND.tiles.max_native_zoom, maxZoom: 19,
      attribution: BRAND.tiles.attribution, ...extra });
  return labels ? [mk(r.base), mk(r.labels, { attribution: "" })] : [mk(r.base)];
};

/** MapLibre GL style URL: new maplibregl.Map({ style: BRAND.glStyle("dark"), ... }) */
BRAND.glStyle = (mode = "dark") => BRAND.tiles.gl_style[mode];

/** Interpolate a ramp at v in [0,1]: BRAND.ramp("rate", .7) or BRAND.ramp("red", .7, "dark"). Names: rate, red, blue. */
BRAND.ramp = function (name, v, mode = "dark") {
  const s = name === "rate" ? BRAND.themes[mode].rate : BRAND.ramps[name][mode];
  const x = Math.min(1, Math.max(0, v)) * (s.length - 1);
  const i = Math.min(s.length - 2, Math.floor(x)), f = x - i;
  const h = c => [1, 3, 5].map(k => parseInt(c.slice(k, k + 2), 16));
  const a = h(s[i]), b = h(s[i + 1]);
  return "#" + a.map((u, k) => Math.round(u + (b[k] - u) * f).toString(16).padStart(2, "0")).join("");
};
BRAND.rate = (v, mode = "dark") => BRAND.ramp("rate", v, mode);
