# Adding your project, writing, and resume files

The site is wired up to read assets from a few well-known folders under `static/`.
Drop your real PDFs and images into the locations below and they will start
appearing on the live site automatically.

## 1. Resume

The resume PDF lives at:

```
static/resume/Jacob-Lebovitz-Resume.pdf
```

The Resume page links to that exact path with both an "Open PDF in new tab"
button and a "Download PDF" button. Replacing the file in place is all that's
needed to update the public resume.

## 2. Project reports (MIT projects)

Each project that should show a "View report ↗" link references a report file
in `src/lib/projects.json` via its `report` field. Current expectations:

| Project                                       | Drop the report PDF at                |
| --------------------------------------------- | ------------------------------------- |
| Optimization · Water Access in the DRC        | `static/reports/drc-water-access.pdf` |
| Predictive + Prescriptive Solar Battery       | `static/reports/solar-battery.pdf`    |
| BPHC · Shelter Occupancy Forecasting          | `static/reports/bphc-shelter.pdf`     |

If you'd like to use different filenames, edit the `report` field for the
relevant project in `src/lib/projects.json`.

The Conagra capstone, the marketing / Kaggle project, and the ESPM mapping
work are intentionally tagged `noReport: true` and do not show a report link
(per the brief — Conagra is high-level only, the Kaggle project is summarized
as evidence of product-analytics work, and the ESPM mapping work is shown via
the dedicated Maps page).

## 3. Writing samples (essays)

Drop each essay PDF into `static/writing/` and add an entry to
`src/lib/writing.json`. The page shows a clear "Coming soon" state until at
least one entry is added. Each entry takes the form:

```json
[
  {
    "id": "essay-1",
    "title": "Your essay title",
    "summary": "One- or two-sentence summary of the essay.",
    "tags": ["Essay", "Writing"],
    "file": "writing/your-essay-1.pdf"
  }
]
```

Each card opens the PDF in a new tab.

## 4. ESPM 110 maps

Drop the map images (PNG or JPG) in `static/maps/` and add entries to
`src/lib/maps.json`:

```json
[
  {
    "id": "map-1",
    "title": "ESPM 110 · Title of the map",
    "caption": "Short caption describing the data or analysis shown.",
    "image": "maps/your-map-file.png"
  }
]
```

The Maps page shows a clear "Coming soon" state until at least one entry is
added.

## 5. Project images

Project cards use uniform SVG graphics in `static/images/projects/`. They are
intentionally simple, monochromatic, and consistent across every project so the
focus stays on the work itself. The Conagra entry uses a custom red mark that
nods to Conagra's brand color without using a copyrighted logo asset.

If you'd like to switch a project to a different graphic, edit its `image`
field in `src/lib/projects.json`.

## 6. Re-deploying

The GitHub Action in `.github/workflows/deploy.yml` builds and deploys the
site to GitHub Pages on every push to `main` (and supports manual runs from
the Actions tab). Once you commit content updates and push to `main`, the site
will redeploy automatically.
