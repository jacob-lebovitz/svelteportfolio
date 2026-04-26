<script>
  import { asset } from "$lib/asset.js";
  export let data = {};
</script>

<article class="project-row">
  <header class="project-head">
    <h2>{data.title}</h2>
    {#if data.subtitle}
      <p class="subtitle">{data.subtitle}</p>
    {/if}
  </header>

  {#if data.tools && data.tools.length}
    <ul class="tags">
      {#each data.tools as t}
        <li>{t}</li>
      {/each}
    </ul>
  {/if}

  {#if data.highlights && data.highlights.length}
    <ul class="highlights">
      {#each data.highlights as h}
        <li>{h}</li>
      {/each}
    </ul>
  {:else if data.description}
    <p class="desc">{data.description}</p>
  {/if}

  <footer class="links">
    {#if data.report && !data.noReport}
      <a class="link" href={asset(data.report)} target="_blank" rel="noopener noreferrer">
        View report ↗
      </a>
    {/if}
    {#if data.live}
      <a class="link" href={data.live} target="_blank" rel="noopener noreferrer">
        Live demo ↗
      </a>
    {/if}
    {#if data.repo}
      <a class="link" href={data.repo} target="_blank" rel="noopener noreferrer">
        Code ↗
      </a>
    {/if}
    {#if data.status}
      <span class="status">{data.status}</span>
    {/if}
  </footer>
</article>

<style>
  .project-row {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
    border: 1px solid var(--rule);
    border-radius: 10px;
    background-color: var(--paper);
    padding: 1.5rem 1.75rem 1.6rem;
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }
  .project-row:hover {
    border-color: var(--rule-strong);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06);
  }

  .project-head {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }

  h2 {
    margin: 0;
    font-size: clamp(1.4rem, 2.4vw, 1.85rem);
    line-height: 1.2;
    font-weight: 600;
    letter-spacing: -0.01em;
  }

  .subtitle {
    margin: 0;
    color: var(--muted);
    font-size: 0.95rem;
    font-weight: 500;
  }

  .tags {
    list-style: none;
    margin: 0.1rem 0 0.2rem;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }
  .tags li {
    font-size: 0.74rem;
    font-weight: 500;
    letter-spacing: 0.01em;
    padding: 0.22em 0.65em;
    border-radius: 999px;
    background-color: var(--surface-2);
    color: var(--ink-soft);
    border: 1px solid var(--rule);
  }

  .highlights {
    margin: 0.2rem 0 0;
    padding-left: 1.2rem;
    font-size: 0.96rem;
    line-height: 1.6;
    color: var(--ink-soft);
  }
  .highlights li { margin-bottom: 0.35rem; }

  .desc {
    font-size: 0.96rem;
    line-height: 1.6;
    margin: 0;
    color: var(--ink-soft);
  }

  .links {
    margin-top: 0.3rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1.2rem;
    align-items: center;
  }

  .link {
    color: var(--ink);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.92rem;
    border-bottom: 1px solid var(--rule-strong);
    padding-bottom: 1px;
  }
  .link:hover {
    border-bottom-color: var(--ink);
  }

  .status {
    font-size: 0.74rem;
    font-weight: 500;
    padding: 0.18em 0.6em;
    border-radius: 999px;
    background-color: var(--surface-2);
    color: var(--ink-soft);
    border: 1px solid var(--rule);
  }
</style>
