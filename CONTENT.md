# Adding your project, writing, and resume files

The site is wired up to read assets from a few well-known folders under `static/`.
Drop your real PDFs and images into the locations below and they will start
appearing on the live site automatically. Filenames are case-sensitive and must
match exactly what is referenced from the JSON files in `src/lib/`.

## 1. Resume

Put the resume PDF here:

```
static/resume/Jacob-Lebovitz-Resume.pdf
```

The Resume page already links to that exact path with both an "Open PDF in new
tab" button and a "Download PDF" button.

## 2. Project reports (MIT projects)

Each project that should show a "View report ↗" link references a report file
in `src/lib/projects.json` via its `report` field. The current expectations are:

| Project                                       | Drop the report PDF at                |
| --------------------------------------------- | ------------------------------------- |
| Optimization · Water Access in the DRC        | `static/reports/drc-water-access.pdf` |
| Predictive + Prescriptive Solar Battery       | `static/reports/solar-battery.pdf`    |
| BPHC · Shelter Occupancy Forecasting          | `static/reports/bphc-shelter.pdf`     |

If you'd like to use different filenames, edit the `report` field for the
relevant project in `src/lib/projects.json`.

The Conagra capstone, the marketing / Kaggle project, and the ESPM mapping
work are intentionally tagged `noReport: true` and do not show a report link
(per the prompt — Conagra is high-level only, the Kaggle project is summarized
as evidence of product-analytics work, and the ESPM mapping work is shown via
the dedicated Maps page).

## 3. Writing samples (essays)

Drop your essay PDFs in `static/writing/` and edit `src/lib/writing.json` to
list each one. The current placeholders look like:

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

Each essay card opens the PDF in a new tab.

## 4. ESPM 110 maps

Drop the map images (PNG or JPG) in `static/maps/` and edit `src/lib/maps.json`
to list them. The current placeholders are `maps/map-1.png` and `maps/map-2.png`.

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

## 5. Re-deploying

The GitHub Action in `.github/workflows/deploy.yml` already builds and
deploys the site to GitHub Pages on every push to `main` (and supports manual
runs). Once you commit the files above and push to `main`, the site will
redeploy automatically.
