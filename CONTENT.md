# Adding project, writing, and map content

The site reads its content from a few well-known folders under `static/` and
JSON files under `src/lib/`. Drop your PDFs / images into the locations below
and update the matching JSON file; new entries appear on the live site after
the next push to `main` (which auto-deploys via GitHub Pages).

> Note: there is no Resume page on this site. The resume is intentionally
> kept off the public portfolio for privacy reasons. To re-enable it later,
> drop a PDF into `static/resume/`, add a `Resume` entry back into the `pages`
> array in `src/routes/+layout.svelte`, and add a route under
> `src/routes/resume/+page.svelte`.

## 1. Project reports

Each project entry in `src/lib/projects.json` may define a `report` field
pointing at a PDF in `static/reports/`. When that file is present, the
project card shows a `View report ↗` link that opens the PDF in a new tab.

The Conagra capstone, the marketing / Kaggle project, and the ESPM mapping
work are intentionally tagged `noReport: true`. Conagra is high-level only,
the Kaggle project is summarized as evidence of product-analytics work, and
the ESPM mapping work is shown via the dedicated Maps page.

## 2. Writing samples (essays)

Drop each essay PDF into `static/writing/` and add an entry to
`src/lib/writing.json`. The page shows a clear "Coming soon" state until at
least one entry is added.

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

## 3. ESPM 110 maps

Drop each ArcGIS map deliverable (PDF or image) into `static/maps/` and add
an entry to `src/lib/maps.json`:

```json
[
  {
    "id": "map-1",
    "title": "ESPM 110 · Title of the map",
    "caption": "Short caption describing the data or analysis shown.",
    "file": "maps/your-map-file.pdf"
  }
]
```

If the entry is an image (PNG / JPG / SVG), set an `image` field to the
same path; the card will use it as the inline thumbnail. Otherwise the
card shows a neutral cartographic graphic that matches the project tiles.

## 4. Project images

Project cards use SVG graphics in `static/images/projects/`. Each project
has its own dedicated graphic so no two cards repeat. They share the same
size, palette, and typography so the grid still reads as a consistent set.
To switch a project to a different graphic, edit its `image` field in
`src/lib/projects.json`.

## 5. Re-deploying

The GitHub Action in `.github/workflows/deploy.yml` builds and deploys the
site to GitHub Pages on every push to `main` (and supports manual runs from
the Actions tab). Once you commit content updates and push to `main`, the
site will redeploy automatically.
