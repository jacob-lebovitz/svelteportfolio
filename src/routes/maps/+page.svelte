<script>
  import { base } from "$app/paths";
  import maps from "$lib/maps.json";
</script>

<svelte:head>
  <title>Maps · Jacob Lebovitz</title>
</svelte:head>

<header class="page-head">
  <p class="eyebrow">ArcGIS Cartography</p>
  <h1>Maps</h1>
  <p class="lede">
    Selected map deliverables from UC Berkeley's ESPM 110, focused on the politics and
    ecology of environmental health. These show hands-on ArcGIS work — data layering,
    spatial joins, classification, and cartographic design.
  </p>
</header>

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

<style>
  .page-head { margin: 1.5rem 0 1.75rem; }
  .page-head h1 {
    font-size: clamp(2.2rem, 5vw, 3.5rem);
    margin: 0.2rem 0 0.5rem;
  }
  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--color-accent);
    margin: 0;
  }
  .lede { max-width: 70ch; line-height: 1.6; margin: 0; }

  .map-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(18em, 1fr));
    gap: 1.25rem;
  }

  .map-card {
    margin: 0;
    border: 1px solid color-mix(in oklch, var(--color-accent), transparent 80%);
    border-radius: 14px;
    overflow: hidden;
    background-color: color-mix(in oklch, canvas, var(--color-accent) 3%);
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }
  .map-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
  }
  .map-card img {
    display: block;
    width: 100%;
    height: 220px;
    object-fit: cover;
    background: color-mix(in oklch, var(--color-accent), canvas 90%);
  }
  figcaption {
    padding: 0.9rem 1.1rem 1.1rem;
  }
  figcaption h2 {
    margin: 0 0 0.3rem;
    font-size: 1.05rem;
  }
  figcaption p {
    margin: 0;
    font-size: 0.9rem;
    line-height: 1.5;
    color: color-mix(in oklch, currentColor, transparent 25%);
  }
</style>
