<script>
  import { base } from "$app/paths";
  import maps from "$lib/maps.json";
</script>

<svelte:head>
  <title>Maps · Jacob Lebovitz</title>
</svelte:head>

<header class="page-head">
  <p class="eyebrow">ArcGIS cartography</p>
  <h1>Maps</h1>
  <p class="lede">
    Selected map deliverables from UC Berkeley's ESPM 110 (The Politics &amp; Ecology of
    Environmental Health). These show hands-on ArcGIS work: data layering, spatial joins,
    classification, and cartographic design.
  </p>
</header>

{#if maps.length === 0}
  <section class="empty-state">
    <h2>Coming soon</h2>
    <p>
      The map exhibits from ESPM 110 are being prepared for the web and will be added
      here shortly.
    </p>
  </section>
{:else}
  <div class="map-grid">
    {#each maps as m}
      <figure class="map-card">
        <a href="{base}/{m.image}" target="_blank" rel="noopener noreferrer">
          <img src="{base}/{m.image}" alt={m.title} loading="lazy" />
        </a>
        <figcaption>
          <h2>{m.title}</h2>
          <p>{m.caption}</p>
        </figcaption>
      </figure>
    {/each}
  </div>
{/if}

<style>
  .page-head { margin: 1.5rem 0 1.75rem; }
  .page-head h1 {
    font-size: clamp(2.2rem, 5vw, 3.25rem);
    margin: 0.2rem 0 0.5rem;
  }
  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--muted);
    margin: 0;
  }
  .lede { max-width: 70ch; line-height: 1.6; margin: 0; }

  .empty-state {
    border: 1px solid var(--rule);
    border-radius: 8px;
    padding: 1.5rem 1.75rem;
    background-color: var(--surface);
    max-width: 70ch;
  }
  .empty-state h2 {
    margin: 0 0 0.5rem;
    font-size: 1.05rem;
  }
  .empty-state p {
    margin: 0;
    color: var(--ink-soft);
    line-height: 1.6;
  }

  .map-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
    gap: 1.25rem;
  }

  .map-card {
    margin: 0;
    border: 1px solid var(--rule);
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--paper);
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }
  .map-card:hover {
    border-color: var(--rule-strong);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06);
  }
  .map-card img {
    display: block;
    width: 100%;
    aspect-ratio: 4 / 3;
    object-fit: cover;
    background: var(--surface-2);
    border-bottom: 1px solid var(--rule);
  }
  figcaption {
    padding: 0.9rem 1.1rem 1.1rem;
  }
  figcaption h2 {
    margin: 0 0 0.3rem;
    font-size: 1rem;
    font-weight: 600;
  }
  figcaption p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--muted);
  }
</style>
