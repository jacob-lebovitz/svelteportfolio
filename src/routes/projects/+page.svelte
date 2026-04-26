<script>
  import projects from "$lib/projects.json";
  import Project from "$lib/Project.svelte";

  // Only these four filter buckets are exposed to visitors. Every project
  // declares one or more of these tags in its `categories` array.
  const FILTERS = [
    "Machine Learning",
    "Optimization",
    "Data Engineering",
    "Geospatial",
  ];

  let activeCategory = "All";
  $: filtered =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => (p.categories ?? []).includes(activeCategory));
</script>

<svelte:head>
  <title>Projects · Jacob Lebovitz</title>
</svelte:head>

<header class="page-head">
  <p class="eyebrow">Portfolio</p>
  <h1>Projects</h1>
  <p class="lede">
    Selected work spanning machine learning, optimization, data engineering, and
    geospatial analysis. Most projects link to a written report; a few are confidential
    or summarized at a high level on purpose.
  </p>
</header>

<div class="filters" role="tablist" aria-label="Filter projects by category">
  <button
    role="tab"
    class:active={activeCategory === "All"}
    on:click={() => (activeCategory = "All")}
    aria-selected={activeCategory === "All"}
  >
    All <span class="count">{projects.length}</span>
  </button>
  {#each FILTERS as c}
    <button
      role="tab"
      class:active={activeCategory === c}
      on:click={() => (activeCategory = c)}
      aria-selected={activeCategory === c}
    >
      {c}
      <span class="count">
        {projects.filter((p) => (p.categories ?? []).includes(c)).length}
      </span>
    </button>
  {/each}
</div>

<div class="projects-list">
  {#each filtered as p (p.id)}
    <Project data={p} />
  {/each}
</div>

<style>
  .page-head {
    margin: 1.5rem 0 2rem;
  }
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
  .lede {
    max-width: 70ch;
    line-height: 1.6;
    margin: 0;
  }

  .filters {
    display: flex;
    flex-wrap: wrap;
    gap: 0.4rem 0.5rem;
    margin-bottom: 1.6rem;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--rule);
  }
  .filters button {
    padding: 0.35em 0.85em;
    border-radius: 6px;
    border: 1px solid var(--rule);
    background: var(--paper);
    color: var(--ink);
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 500;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: background-color 0.15s ease, border-color 0.15s ease;
  }
  .filters button:hover {
    background-color: var(--surface-2);
    border-color: var(--rule-strong);
  }
  .filters button.active {
    background-color: var(--ink);
    border-color: var(--ink);
    color: var(--paper);
  }
  .filters .count {
    font-variant-numeric: tabular-nums;
    font-size: 0.75rem;
    opacity: 0.65;
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
</style>
