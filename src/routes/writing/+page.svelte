<script>
  import { base } from "$app/paths";
  import writing from "$lib/writing.json";
</script>

<svelte:head>
  <title>Writing · Jacob Lebovitz</title>
</svelte:head>

<header class="page-head">
  <p class="eyebrow">Writing samples</p>
  <h1>Writing</h1>
  <p class="lede">
    Selected essays that show how I think, structure an argument, and communicate in
    long-form. Click any title to open the full PDF in a new tab.
  </p>
</header>

<div class="essays">
  {#each writing as w}
    <article class="essay-card">
      <header>
        <h2>
          <a href="{base}/{w.file}" target="_blank" rel="noopener noreferrer">
            {w.title} ↗
          </a>
        </h2>
        {#if w.tags && w.tags.length}
          <ul class="tags">
            {#each w.tags as t}<li>{t}</li>{/each}
          </ul>
        {/if}
      </header>
      <p>{w.summary}</p>
    </article>
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

  .essays {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22em, 1fr));
    gap: 1.25rem;
  }

  .essay-card {
    border: 1px solid color-mix(in oklch, var(--color-accent), transparent 80%);
    border-radius: 14px;
    padding: 1.1rem 1.25rem;
    background-color: color-mix(in oklch, canvas, var(--color-accent) 3%);
    transition: transform 0.18s ease, box-shadow 0.18s ease;
  }
  .essay-card:hover {
    transform: translateY(-2px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
  }

  .essay-card h2 {
    margin: 0 0 0.4rem;
    font-size: 1.15rem;
    line-height: 1.3;
  }
  .essay-card h2 a {
    text-decoration: none;
    color: inherit;
  }
  .essay-card h2 a:hover { color: var(--color-accent); }

  .tags {
    list-style: none;
    margin: 0 0 0.6rem;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
  }
  .tags li {
    font-size: 0.7rem;
    font-weight: 600;
    padding: 0.15em 0.55em;
    border-radius: 999px;
    background-color: color-mix(in oklch, var(--color-accent), canvas 80%);
    color: color-mix(in oklch, var(--color-accent), currentColor 30%);
    border: 1px solid color-mix(in oklch, var(--color-accent), transparent 70%);
  }
</style>
