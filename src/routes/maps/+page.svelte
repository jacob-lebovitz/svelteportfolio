<script>
  import { base } from "$app/paths";
  import { asset } from "$lib/asset.js";
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
    Environmental Health). Each map is an ArcGIS Pro export — data layering, spatial
    joins, classification, and cartographic design.
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
      <article class="map-card">
        <a class="map-thumb" href={asset(m.file)} target="_blank" rel="noopener noreferrer" aria-label="Open {m.title} in a new tab">
          {#if m.image}
            <img src={asset(m.image)} alt={m.title} loading="lazy" />
          {:else}
            <span class="thumb-label">ArcGIS map</span>
            <span class="thumb-ext">PDF</span>
          {/if}
        </a>
        <div class="map-body">
          <h2>{m.title}</h2>
          <p>{m.caption}</p>
          <a class="link" href={asset(m.file)} target="_blank" rel="noopener noreferrer">
            Open map ↗
          </a>
        </div>
      </article>
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
    grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
    gap: 1.25rem;
  }

  .map-card {
    margin: 0;
    border: 1px solid var(--rule);
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--paper);
    display: flex;
    flex-direction: column;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }
  .map-card:hover {
    border-color: var(--rule-strong);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06);
  }

  .map-thumb {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    padding: 0;
    aspect-ratio: 4 / 3;
    background:
      linear-gradient(135deg, var(--surface) 0%, var(--surface-2) 100%);
    border-bottom: 1px solid var(--rule);
    text-decoration: none;
    color: var(--ink-soft);
    position: relative;
    overflow: hidden;
  }
  .map-thumb::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(var(--rule) 1px, transparent 1px),
      linear-gradient(90deg, var(--rule) 1px, transparent 1px);
    background-size: 32px 32px;
    opacity: 0.35;
  }
  .map-thumb img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .thumb-label {
    position: relative;
    margin: 0 0 0.9rem 1rem;
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    font-weight: 600;
    color: var(--muted);
  }
  .thumb-ext {
    position: relative;
    margin: 0 1rem 0.85rem 0;
    font-size: 0.72rem;
    font-weight: 700;
    letter-spacing: 0.06em;
    padding: 0.15em 0.5em;
    border-radius: 4px;
    border: 1px solid var(--rule-strong);
    color: var(--ink);
    background-color: var(--paper);
  }

  .map-body {
    padding: 0.95rem 1.1rem 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }
  .map-body h2 {
    margin: 0;
    font-size: 1rem;
    font-weight: 600;
    line-height: 1.3;
  }
  .map-body p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--muted);
  }
  .link {
    margin-top: 0.3rem;
    color: var(--ink);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.88rem;
    border-bottom: 1px solid var(--rule-strong);
    padding-bottom: 1px;
    align-self: flex-start;
  }
  .link:hover {
    border-bottom-color: var(--ink);
  }
</style>
