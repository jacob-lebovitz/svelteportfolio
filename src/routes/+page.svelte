<script>
  import projects from "$lib/projects.json";
  import Project from "$lib/Project.svelte";
  import Reading from "$lib/Reading.svelte";
  import readings from "$lib/reading.json";
  import { base } from "$app/paths";

  const skills = [
    { name: "Python", level: 95 },
    { name: "SQL", level: 90 },
    { name: "Julia", level: 85 },
    { name: "R", level: 80 },
    { name: "Machine Learning", level: 90 },
    { name: "Optimization (AMPL / JuMP)", level: 88 },
    { name: "Data Visualization", level: 85 },
    { name: "ArcGIS", level: 75 },
  ];

  const featured = projects.filter((p) => p.featured);
</script>

<svelte:head>
  <title>Jacob Lebovitz · Data Scientist</title>
  <meta name="description" content="Jacob Lebovitz — MIT Master of Business Analytics candidate, data scientist focused on machine learning, optimization, and analytics for impact." />
</svelte:head>

<section class="hero">
  <div class="hero-text">
    <p class="eyebrow">Data Scientist · MIT MBAn '26</p>
    <h1 class="name-title">Jacob Lebovitz</h1>
    <p class="lede">
      I build machine-learning and optimization systems that turn messy real-world data into
      decisions. Currently at <strong>MIT Sloan</strong> studying Business Analytics, with prior
      data-science work at <strong>Verdagy</strong>, the <strong>Boston Public Health Commission</strong>,
      and <strong>UC Berkeley</strong>.
    </p>
    <div class="cta-row">
      <a class="cta primary" href="{base}/projects">View Projects →</a>
      <a class="cta" href="{base}/resume">Resume</a>
      <a class="cta" href="{base}/contact">Contact</a>
    </div>
  </div>

  <img
    class="headshot"
    src="{base}/images/headshot.JPG"
    alt="Photo of Jacob Lebovitz smiling in front of Doe Library at UC Berkeley"
  />
</section>

<section class="skills-section">
  <h2>What I work with</h2>
  <div class="skills-grid">
    {#each skills as s}
      <div class="skill">
        <div class="skill-row">
          <span class="skill-name">{s.name}</span>
          <span class="skill-pct">{s.level}%</span>
        </div>
        <div class="skill-bar">
          <div class="skill-fill" style="--pct: {s.level}%"></div>
        </div>
      </div>
    {/each}
  </div>
</section>

<section>
  <div class="section-head">
    <h2>Featured Projects</h2>
    <a class="see-all" href="{base}/projects">See all projects →</a>
  </div>
  <div class="projects featured-grid">
    {#each featured.slice(0, 3) as p}
      <Project data={p} />
    {/each}
  </div>
</section>

<section class="reading-section">
  <div>
    <h2>Recent Reading</h2>
    <p class="muted">A few books and shows that have been on rotation lately.</p>
    <div class="readings">
      {#each readings as r}
        <Reading data={r} />
      {/each}
    </div>
  </div>
</section>

<style>
  .hero {
    display: grid;
    grid-template-columns: 1.4fr 1fr;
    gap: 3rem;
    align-items: center;
    padding: 2.5rem 0 3rem;
    border-bottom: 1px solid color-mix(in oklch, var(--color-accent), transparent 80%);
    margin-bottom: 2.5rem;
  }

  .eyebrow {
    text-transform: uppercase;
    letter-spacing: 0.18em;
    font-size: 0.8rem;
    font-weight: 600;
    color: var(--color-accent);
    margin: 0 0 0.5rem;
  }

  .name-title {
    font-size: clamp(3rem, 7vw, 5rem);
    font-weight: 800;
    line-height: 1;
    margin: 0 0 1rem;
    background-image: linear-gradient(120deg, #4facfe, #6a5acd, #36dc9a);
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: shimmer 8s linear infinite;
  }

  @keyframes shimmer {
    0% { background-position: 0% center; }
    100% { background-position: 200% center; }
  }

  .lede {
    font-size: 1.1rem;
    line-height: 1.6;
    margin: 0 0 1.5rem;
    max-width: 60ch;
  }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
  }

  .cta {
    display: inline-block;
    padding: 0.6em 1.1em;
    border-radius: 999px;
    border: 1.5px solid color-mix(in oklch, var(--color-accent), transparent 60%);
    text-decoration: none;
    color: inherit;
    font-weight: 600;
    transition: transform 0.15s ease, background-color 0.2s ease, border-color 0.2s ease;
  }
  .cta:hover {
    transform: translateY(-1px);
    background-color: color-mix(in oklch, var(--color-accent), canvas 88%);
    border-color: var(--color-accent);
  }
  .cta.primary {
    background-color: var(--color-accent);
    color: white;
    border-color: var(--color-accent);
  }
  .cta.primary:hover {
    background-color: color-mix(in oklch, var(--color-accent), black 10%);
  }

  .headshot {
    width: 100%;
    max-width: 420px;
    justify-self: end;
    border-radius: 16px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.25);
  }

  .skills-section {
    margin-bottom: 2.5rem;
  }

  .skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 0.9rem 1.4rem;
    margin-top: 1rem;
  }

  .skill-row {
    display: flex;
    justify-content: space-between;
    font-size: 0.9rem;
    margin-bottom: 0.25rem;
  }

  .skill-name {
    font-weight: 600;
  }

  .skill-pct {
    color: color-mix(in oklch, currentColor, transparent 40%);
    font-variant-numeric: tabular-nums;
  }

  .skill-bar {
    height: 6px;
    background-color: color-mix(in oklch, var(--color-accent), transparent 88%);
    border-radius: 999px;
    overflow: hidden;
  }
  .skill-fill {
    width: 0;
    height: 100%;
    background-image: linear-gradient(90deg, #4facfe, var(--color-accent));
    border-radius: 999px;
    animation: fillbar 1.4s ease forwards;
  }
  @keyframes fillbar {
    to { width: var(--pct); }
  }

  .section-head {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 1rem;
    margin-bottom: 0.5rem;
  }
  .see-all {
    color: var(--color-accent);
    text-decoration: none;
    font-weight: 600;
  }
  .see-all:hover { text-decoration: underline; }

  .featured-grid {
    margin-top: 1rem;
  }

  .reading-section {
    margin-top: 2.5rem;
  }
  .reading-section .readings {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 1rem;
  }

  .muted {
    color: color-mix(in oklch, currentColor, transparent 40%);
    margin-top: 0.25rem;
  }

  @media (max-width: 720px) {
    .hero {
      grid-template-columns: 1fr;
      gap: 1.5rem;
      text-align: left;
    }
    .headshot { justify-self: start; max-width: 280px; }
  }
</style>
