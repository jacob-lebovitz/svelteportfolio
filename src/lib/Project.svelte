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
    border: 1px solid color-mix(in oklch, var(--color-accent), transparent 80%);
    border-radius: 14px;
    overflow: hidden;
    background-color: color-mix(in oklch, canvas, var(--color-accent) 3%);
    transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;
  }
  .project-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 30px rgba(0, 0, 0, 0.18);
    border-color: color-mix(in oklch, var(--color-accent), transparent 50%);
  }

  .project-img {
    width: 100%;
    height: 160px;
    object-fit: cover;
    display: block;
  }

  .project-body {
    padding: 1rem 1.1rem 1.1rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
    flex: 1;
  }

  h2 {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.25;
  }

  .subtitle {
    margin: 0.25rem 0 0;
    color: color-mix(in oklch, currentColor, transparent 35%);
    font-size: 0.92rem;
  }

  .tags {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
  }
  .tags li {
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    padding: 0.18em 0.6em;
    border-radius: 999px;
    background-color: color-mix(in oklch, var(--color-accent), canvas 80%);
    color: color-mix(in oklch, var(--color-accent), currentColor 30%);
    border: 1px solid color-mix(in oklch, var(--color-accent), transparent 70%);
  }

  .highlights {
    margin: 0;
    padding-left: 1.1rem;
    font-size: 0.92rem;
    line-height: 1.45;
  }
  .highlights li { margin-bottom: 0.2rem; }

  .desc {
    font-size: 0.92rem;
    line-height: 1.5;
    margin: 0;
  }

  .links {
    margin-top: auto;
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem 1rem;
    padding-top: 0.4rem;
  }

  .link {
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
  }
  .link:hover { text-decoration: underline; }

  .status {
    font-size: 0.78rem;
    font-weight: 600;
    padding: 0.15em 0.55em;
    border-radius: 999px;
    background-color: color-mix(in oklch, var(--color-accent), transparent 80%);
    color: var(--color-accent);
  }
</style>
