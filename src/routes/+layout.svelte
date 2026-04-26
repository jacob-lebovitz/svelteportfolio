<script>
  import { base } from "$app/paths";
  import { page } from "$app/stores";

  let pages = [
    { url: "/", title: "Home" },
    { url: "/projects", title: "Projects" },
    { url: "/maps", title: "Maps" },
    { url: "/writing", title: "Writing" },
    { url: "/resume", title: "Resume" },
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
      <option value="light">light</option>
      <option value="dark">dark</option>
      <option value="light dark">auto</option>
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
    padding: 0.5rem 0 0.25rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid color-mix(in oklch, var(--color-accent), transparent 80%);
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 0.6rem;
    text-decoration: none;
    color: inherit;
    font-weight: 700;
  }
  .brand-mark {
    width: 2rem;
    height: 2rem;
    border-radius: 8px;
    background-image: linear-gradient(135deg, #4facfe, var(--color-accent));
    color: white;
    font-size: 0.85rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-weight: 800;
    letter-spacing: 0.02em;
  }

  .color-scheme-switch {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 80%;
    justify-self: end;
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

  :root {
    color-scheme: dark;
  }

  nav {
    display: flex;
    flex-wrap: wrap;
    gap: 0.25rem 0.25rem;
    justify-content: center;
  }

  nav a {
    text-align: center;
    text-decoration: none;
    color: inherit;
    padding: 0.45em 0.8em;
    border-radius: 8px;
    border-bottom: 2px solid transparent;
    transition: background-color 0.15s ease, border-color 0.15s ease;
  }

  nav a.current {
    border-bottom-color: var(--color-accent);
  }

  nav a:hover {
    background-color: color-mix(in oklch, var(--color-accent), canvas 88%);
    border-bottom-color: var(--color-accent);
  }

  main {
    min-height: 60vh;
  }

  .site-footer {
    margin-top: 4rem;
    padding: 1.25rem 0;
    border-top: 1px solid color-mix(in oklch, var(--color-accent), transparent 80%);
    text-align: center;
    font-size: 0.85rem;
    color: color-mix(in oklch, currentColor, transparent 35%);
  }
  .site-footer a {
    color: inherit;
    text-decoration: underline;
  }

  @media (max-width: 720px) {
    .site-header {
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
    }
    nav {
      grid-column: 1 / -1;
      justify-content: flex-start;
    }
  }
</style>
