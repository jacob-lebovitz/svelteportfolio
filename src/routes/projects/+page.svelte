<script>
  import projects from "$lib/projects.json";
  import Project from "$lib/Project.svelte";

  const allCategories = Array.from(
    new Set(projects.flatMap((p) => p.categories ?? []))
  ).sort();

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
    A selection of work spanning machine learning, optimization, data engineering, and
    analytics. Most projects link to a written report; a few are confidential or held back
    on purpose and are summarized at a high level.
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
  {#each allCategories as c}
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

<div class="projects detailed-grid">
  {#each filtered as p (p.id)}
    <Project data={p} />
  {/each}
</div>

<style>
  .page-head {
    margin: 1.5rem 0 2rem;
  }
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
  }
  .filters button {
    padding: 0.35em 0.85em;
    border-radius: 999px;
    border: 1px solid color-mix(in oklch, var(--color-accent), transparent 70%);
    background: transparent;
    color: inherit;
    cursor: pointer;
    font-size: 0.85rem;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: background-color 0.15s ease, border-color 0.15s ease;
  }
  .filters button:hover {
    background-color: color-mix(in oklch, var(--color-accent), canvas 88%);
  }
  .filters button.active {
    background-color: var(--color-accent);
    border-color: var(--color-accent);
    color: white;
  }
  .filters .count {
    font-variant-numeric: tabular-nums;
    font-size: 0.75rem;
    opacity: 0.75;
  }

  .detailed-grid {
    grid-template-columns: repeat(auto-fill, minmax(20em, 1fr));
    gap: 1.25rem;
  }
</style>
