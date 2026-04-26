<script>
  import projects from "$lib/projects.json";
  import Project from "$lib/Project.svelte";
  import Reading from "$lib/Reading.svelte";
  import readings from "$lib/reading.json";
  import { base } from "$app/paths";

  const skillGroups = [
    {
      heading: "Languages",
      items: ["Python", "SQL", "R", "Julia", "AMPL"],
    },
    {
      heading: "Machine learning & analytics",
      items: ["scikit-learn", "Keras", "PyTorch", "Pandas", "Forecasting (ARIMA, GBMs)"],
    },
    {
      heading: "Optimization",
      items: ["JuMP", "AMPL", "Mixed-Integer Programming", "Routing"],
    },
    {
      heading: "Platforms & tools",
      items: ["Databricks", "Tableau", "Power BI", "Streamlit", "Azure", "ArcGIS", "Git"],
    },
  ];

  const featured = projects.filter((p) => p.featured);
</script>

<svelte:head>
  <title>Jacob Lebovitz · Data Scientist</title>
  <meta
    name="description"
    content="Jacob Lebovitz — MIT Master of Business Analytics candidate. Data scientist focused on machine learning, optimization, and forecasting for industry and public-sector problems."
  />
</svelte:head>

<section class="hero">
  <div class="hero-text">
    <p class="eyebrow">MIT Master of Business Analytics · Class of 2026</p>
    <h1 class="name-title">Jacob Lebovitz</h1>
    <p class="role">Data Scientist</p>
    <p class="lede">
      I build machine-learning and optimization systems that turn messy real-world data
      into decisions. Currently a Data Science Capstone Intern with
      <strong>Conagra Brands</strong> through MIT Sloan, with prior data-science work at
      <strong>Verdagy</strong>, the <strong>Boston Public Health Commission</strong>, and
      <strong>UC Berkeley</strong>.
    </p>
    <div class="cta-row">
      <a class="cta primary" href="{base}/projects">View projects</a>
      <a class="cta" href="{base}/contact">Contact</a>
    </div>
  </div>

  <img
    class="headshot"
    src="{base}/images/headshot.JPG"
    alt="Photo of Jacob Lebovitz"
  />
</section>

<section class="skills-section">
  <h2>Tools &amp; methods</h2>
  <div class="skills-grid">
    {#each skillGroups as g}
      <div class="skill-group">
        <h3>{g.heading}</h3>
        <ul>
          {#each g.items as item}
            <li>{item}</li>
          {/each}
        </ul>
      </div>
    {/each}
  </div>
</section>

<section>
  <div class="section-head">
    <h2>Featured projects</h2>
    <a class="see-all" href="{base}/projects">See all projects →</a>
  </div>
  <div class="featured-list">
    {#each featured.slice(0, 3) as p}
      <Project data={p} />
    {/each}
  </div>
</section>

<section class="reading-section">
  <h2>Recent reading</h2>
  <p class="muted">A few books and shows that have been on rotation lately.</p>
  <div class="readings">
    {#each readings as r}
      <Reading data={r} />
    {/each}
  </div>
</section>

<style>
  .hero {
    display: grid;
    grid-template-columns: 1.5fr 1fr;
    gap: 3rem;
    align-items: center;
    padding: 2rem 0 2.5rem;
    border-bottom: 1px solid var(--rule);
    margin-bottom: 2.5rem;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.16em;
    font-size: 0.75rem;
    font-weight: 600;
    color: var(--muted);
    margin: 0 0 0.6rem;
  }

  .name-title {
    font-size: clamp(2.6rem, 6vw, 4rem);
    font-weight: 700;
    line-height: 1;
    margin: 0;
    letter-spacing: -0.01em;
  }

  .role {
    margin: 0.4rem 0 1rem;
    font-size: 1.05rem;
    color: var(--muted);
    font-weight: 500;
    letter-spacing: 0.01em;
  }

  .lede {
    font-size: 1.02rem;
    line-height: 1.6;
    margin: 0 0 1.4rem;
    max-width: 60ch;
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
  }

  .cta {
    display: inline-block;
    padding: 0.55em 1.1em;
    border-radius: 6px;
    border: 1px solid var(--rule);
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    font-size: 0.95rem;
    transition: background-color 0.15s ease, border-color 0.15s ease;
  }
  .cta:hover {
    background-color: var(--surface-2);
    border-color: var(--rule-strong);
  }
  .cta.primary {
    background-color: var(--ink);
    color: var(--paper);
    border-color: var(--ink);
  }
  .cta.primary:hover {
    background-color: var(--ink-soft);
    border-color: var(--ink-soft);
  }

  .headshot {
    width: 100%;
    max-width: 360px;
    justify-self: end;
    border-radius: 6px;
    border: 1px solid var(--rule);
  }

  .skills-section {
    margin-bottom: 2.5rem;
  }
  .skills-section h2 {
    margin: 0 0 1rem;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1.5rem 2rem;
  }

  .skill-group h3 {
    font-size: 0.78rem;
    text-transform: uppercase;
    letter-spacing: 0.14em;
    color: var(--muted);
    font-weight: 600;
    margin: 0 0 0.5rem;
  }

  .skill-group ul {
    list-style: none;
    margin: 0;
    padding: 0;
    line-height: 1.7;
    font-size: 0.95rem;
  }
  .skill-group li {
    padding: 0;
  }

  .section-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 0.75rem;
  }
  .section-head h2 {
    margin: 0;
  }
  .see-all {
    color: inherit;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.95rem;
    border-bottom: 1px solid currentColor;
    padding-bottom: 1px;
  }
  .see-all:hover {
    color: var(--ink);
  }

  .featured-list {
    margin-top: 0.5rem;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .reading-section {
    margin-top: 2.5rem;
  }
  .reading-section .readings {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem 1.5rem;
    margin-top: 1rem;
  }

  .muted {
    color: var(--muted);
    margin-top: 0.25rem;
  }

  @media (max-width: 720px) {
    .hero {
      grid-template-columns: 1fr;
      gap: 1.5rem;
    }
    .headshot {
      justify-self: start;
      max-width: 240px;
    }
  }
</style>
