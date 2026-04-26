<script>
  import { base } from "$app/paths";
  import { asset } from "$lib/asset.js";
  import writing from "$lib/writing.json";
</script>

<svelte:head>
  <title>Writing · Jacob Lebovitz</title>
</svelte:head>

<header class="page-head">
  <p class="eyebrow">Writing samples</p>
  <h1>Writing</h1>
  <p class="lede">
    Selected essays that show how I structure an argument, work through ambiguity, and
    communicate in long-form. Each title opens the full PDF in a new tab.
  </p>
</header>

{#if writing.length === 0}
  <section class="empty-state">
    <h2>Coming soon</h2>
    <p>
      Writing samples are being collected and will be added here shortly. In the meantime,
      a sense of how I write through technical work is reflected in the project reports
      linked from the <a href="{base}/projects">Projects page</a>.
    </p>
  </section>
{:else}
  <div class="essays">
    {#each writing as w}
      <article class="essay-card">
        <header>
          <h2>
            <a href={asset(w.file)} target="_blank" rel="noopener noreferrer">
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
  .empty-state a {
    color: inherit;
    border-bottom: 1px solid var(--rule-strong);
  }
  .empty-state a:hover {
    border-bottom-color: var(--ink);
  }

  .essays {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(22em, 1fr));
    gap: 1.25rem;
  }

  .essay-card {
    border: 1px solid var(--rule);
    border-radius: 8px;
    padding: 1.1rem 1.25rem;
    background-color: var(--paper);
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }
  .essay-card:hover {
    border-color: var(--rule-strong);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06);
  }

  .essay-card h2 {
    margin: 0 0 0.4rem;
    font-size: 1.05rem;
    line-height: 1.3;
    font-weight: 600;
  }
  .essay-card h2 a {
    text-decoration: none;
    color: inherit;
  }
  .essay-card h2 a:hover {
    border-bottom: 1px solid var(--ink);
  }

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
    font-weight: 500;
    padding: 0.15em 0.55em;
    border-radius: 999px;
    background-color: var(--surface-2);
    color: var(--ink-soft);
    border: 1px solid var(--rule);
  }
</style>
