<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import Beaver from "$lib/Beaver.svelte";

  let pages = [
    { url: "/", title: "Home" },
    { url: "/projects", title: "Projects" },
    { url: "/maps", title: "Maps" },
    { url: "/writing", title: "Writing" },
    { url: "/contact", title: "Contact" },
    { url: "https://github.com/jacob-lebovitz", title: "GitHub" },
  ];

  let colorScheme = "light dark";
  let localStorage = globalThis.localStorage ?? {};
  $: localStorage.colorScheme = colorScheme;

  if (localStorage.colorScheme) {
    colorScheme = localStorage.colorScheme;
  }
  let root = globalThis.document?.documentElement;
  $: root?.style.setProperty("color-scheme", colorScheme);
</script>

<Beaver />

<header class="site-header">
  <a class="brand" href={base + "/"}>
    <span class="brand-mark">JL</span>
    <span class="brand-text">Jacob Lebovitz</span>
  </a>

  <nav>
    {#each pages as p}
      <a
        href={p.url.startsWith("http") ? p.url : base + p.url}
        class:current={p.url === "/"
          ? $page.url.pathname === base + "/"
          : $page.url.pathname.startsWith(base + p.url)}
        target={p.url.startsWith("http") ? "_blank" : null}
        rel={p.url.startsWith("http") ? "noopener noreferrer" : null}
      >
        {p.title}
      </a>
    {/each}
  </nav>

  <label class="color-scheme-switch">
    <span class="sr">Theme</span>
    <select bind:value={colorScheme}>
      <option value="light">Light</option>
      <option value="dark">Dark</option>
      <option value="light dark">Auto</option>
    </select>
  </label>
</header>

<main>
  <slot />
</main>

<footer class="site-footer">
  <p>
    © {new Date().getFullYear()} Jacob Lebovitz · Built with
    <a href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer">SvelteKit</a>
    · Deployed on GitHub Pages
  </p>
</footer>

<style>
  .site-header {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 1.5rem;
    padding: 0.75rem 0;
    margin-bottom: 1rem;
    border-bottom: 1px solid var(--rule);
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    color: inherit;
    font-weight: 600;
  }
  .brand-mark {
    width: 2rem;
    height: 2rem;
    border-radius: 6px;
    background-color: var(--ink);
    color: var(--paper);
    font-size: 0.78rem;
    font-weight: 700;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    letter-spacing: 0.06em;
  }
  .brand-text {
    font-size: 0.98rem;
  }

  .color-scheme-switch {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.85rem;
    color: var(--muted);
    justify-self: end;
  }
  .color-scheme-switch select {
    padding: 0.3em 0.5em;
    border: 1px solid var(--rule);
    border-radius: 6px;
    background-color: var(--paper);
    color: var(--ink);
  }
  .sr {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.1rem;
    justify-content: center;
  }

  nav a {
    text-align: center;
    text-decoration: none;
    color: var(--ink);
    padding: 0.4em 0.85em;
    font-size: 0.95rem;
    border-bottom: 2px solid transparent;
    transition: border-color 0.15s ease, color 0.15s ease;
  }
  nav a:hover {
    border-bottom-color: var(--rule-strong);
  }
  nav a.current {
    border-bottom-color: var(--ink);
    font-weight: 600;
  }

  main {
    min-height: 60vh;
  }

  .site-footer {
    margin-top: 4rem;
    padding: 1.25rem 0;
    border-top: 1px solid var(--rule);
    text-align: center;
    font-size: 0.85rem;
    color: var(--muted);
  }
  .site-footer a {
    color: inherit;
  }

  @media (max-width: 720px) {
    .site-header {
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
    }
    nav {
      grid-column: 1 / -1;
      justify-content: flex-start;
      gap: 0;
    }
    nav a {
      padding: 0.4em 0.6em;
    }
  }
</style>
