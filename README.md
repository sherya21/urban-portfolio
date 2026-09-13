# Urban portfolio — Shreya Bansal

Portfolio site for spatial analysis and urban data strategy work.
Live at **https://sherya21.github.io/urban-portfolio/**

## Projects

| Page | Project |
|---|---|
| `index.html` | Home: featured work, about, contact |
| `baywheels.html` | Bay Wheels last-mile transit analysis (logistic regression, three Bay Area cities) |
| `nyc-food.html` | NYC SNAP reliance and emergency food access (spatial analysis, scrollytelling) |
| `usvi.html` | US Virgin Islands data roadmap (DPNR client work, three prototypes) |

## Structure

Static HTML with per-page inline CSS and JS — no build step, no dependencies.
Deployed straight from `main` by GitHub Pages.

```
index.html, baywheels.html, nyc-food.html, usvi.html
404.html                 custom not-found page
favicon.svg              tab icon
apple-touch-icon.png     iOS home-screen icon
images/
  og-*.jpg               1200×630 social preview cards (LinkedIn, Twitter, Slack)
  baywheels/  nyc/  usvi/  per-project maps and figures
robots.txt, sitemap.xml  search engine hints
```

## Working on it

Open any HTML file directly in a browser, or serve the folder:

```bash
npx serve .
```

Images are WebP, sized to roughly 1400px on the long edge. When adding a new
figure, export it optimized rather than dropping in a full-resolution PNG — the
whole `images/` folder is intentionally kept under ~3 MB so the site stays fast
on mobile.

Each page's `<head>` carries its own `og:` tags and `og:image`. If you add a
page, copy that block and point it at a matching `images/og-*.jpg`, otherwise
links to it will preview as a bare URL when shared.
