# jacob-lebovitz.github.io/svelteportfolio

Personal portfolio site for **Jacob Lebovitz** — built with
[SvelteKit](https://kit.svelte.dev/) and deployed to GitHub Pages.

The site is deployed at:

> https://jacob-lebovitz.github.io/svelteportfolio/

## Local development

```bash
npm install
npm run dev
```

Then open the printed local URL.

## Building

```bash
npm run build
npm run preview
```

## Deployment

Every push to `main` triggers the GitHub Action in
`.github/workflows/deploy.yml`, which builds the site and publishes it to
GitHub Pages. The workflow can also be run manually from the Actions tab.

## Adding content (resume, project reports, essays, maps)

See [`CONTENT.md`](./CONTENT.md) for a step-by-step guide on where to drop
your PDFs and images so they show up on the live site.

## Project structure

```
src/
  app.html
  lib/
    Project.svelte         # Project card component
    Reading.svelte         # Reading card component
    projects.json          # Projects data (titles, tools, reports, links)
    reading.json           # Reading data
    writing.json           # Writing samples (Writing page)
    maps.json              # ESPM 110 map deliverables (Maps page)
  routes/
    +layout.svelte         # Site header / nav / footer
    +page.svelte           # Home
    projects/+page.svelte  # Projects (with category filters)
    maps/+page.svelte      # ArcGIS map gallery
    writing/+page.svelte   # Essays
    resume/+page.svelte    # Resume (PDF)
    contact/+page.svelte   # Contact
static/
  images/                  # Site images
  reports/                 # Project report PDFs
  writing/                 # Essay PDFs
  maps/                    # Map images
  resume/                  # Resume PDF
```
