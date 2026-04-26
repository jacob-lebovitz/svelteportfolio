<script>
  import { base } from "$app/paths";
  export let data = {};
</script>

<article class="project-card">
  {#if data.image}
    <img class="project-img" src="{base}/{data.image}" alt="" loading="lazy" />
  {/if}

  <div class="project-body">
    <header>
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
        <a class="link" href="{base}/{data.report}" target="_blank" rel="noopener noreferrer">
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
  </div>
</article>

<style>
  .project-card {
    display: flex;
    flex-direction: column;
    border: 1px solid var(--rule);
    border-radius: 8px;
    overflow: hidden;
    background-color: var(--paper);
    transition: border-color 0.15s ease, box-shadow 0.15s ease;
  }
  .project-card:hover {
    border-color: var(--rule-strong);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04), 0 8px 24px rgba(0, 0, 0, 0.06);
  }

  .project-img {
    width: 100%;
    aspect-ratio: 8 / 5;
    object-fit: cover;
    display: block;
    border-bottom: 1px solid var(--rule);
  }

  .project-body {
    padding: 1rem 1.1rem 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.55rem;
    flex: 1;
  }

  h2 {
    margin: 0;
    font-size: 1.05rem;
    line-height: 1.3;
    font-weight: 600;
  }

  .subtitle {
    margin: 0.2rem 0 0;
    color: var(--muted);
    font-size: 0.85rem;
  }

  .tags {
    list-style: none;
    margin: 0.1rem 0 0.2rem;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
  }
  .tags li {
    font-size: 0.72rem;
    font-weight: 500;
    letter-spacing: 0.01em;
    padding: 0.18em 0.55em;
    border-radius: 999px;
    background-color: var(--surface-2);
    color: var(--ink-soft);
    border: 1px solid var(--rule);
  }

  .highlights {
    margin: 0;
    padding-left: 1.1rem;
    font-size: 0.9rem;
    line-height: 1.5;
    color: var(--ink-soft);
  }
  .highlights li { margin-bottom: 0.2rem; }

  .desc {
    font-size: 0.92rem;
    line-height: 1.55;
    margin: 0;
    color: var(--ink-soft);
  }

  .links {
    margin-top: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
    padding-top: 0.4rem;
    align-items: center;
  }

  .link {
    color: var(--ink);
    text-decoration: none;
    font-weight: 500;
    font-size: 0.88rem;
    border-bottom: 1px solid var(--rule-strong);
    padding-bottom: 1px;
  }
  .link:hover {
    border-bottom-color: var(--ink);
  }

  .status {
    font-size: 0.72rem;
    font-weight: 500;
    padding: 0.15em 0.55em;
    border-radius: 999px;
    background-color: var(--surface-2);
    color: var(--ink-soft);
    border: 1px solid var(--rule);
  }
</style>
