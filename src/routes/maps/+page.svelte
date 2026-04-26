<script>
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
  <div class="map-list">
    {#each maps as m}
      <article class="map-card">
        <header class="map-head">
          <h2>{m.title}</h2>
        </header>
        <p>{m.caption}</p>
        <a class="link" href={asset(m.file)} target="_blank" rel="noopener noreferrer">
          Open map ↗
        </a>
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

  .map-list {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .map-card {
    border: 1px solid var(--rule);
    border-radius: 10px;
    background-color: var(--paper);
    padding: 1.5rem 1.75rem 1.6rem;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }
  .map-card:hover {
    border-color: var(--rule-strong);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06);
  }

  .map-card h2 {
    margin: 0;
    font-size: clamp(1.4rem, 2.4vw, 1.85rem);
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: -0.01em;
  }
  .map-card p {
    margin: 0;
    font-size: 0.96rem;
    line-height: 1.6;
    color: var(--ink-soft);
  }

  .link {
    margin-top: 0.3rem;
    color: var(--ink);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.92rem;
    border-bottom: 1px solid var(--rule-strong);
    padding-bottom: 1px;
    align-self: flex-start;
  }
  .link:hover {
    border-bottom-color: var(--ink);
  }
</style>
