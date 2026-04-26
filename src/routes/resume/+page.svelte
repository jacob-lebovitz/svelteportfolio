<script>
  import { base } from "$app/paths";

  const resumePath = `${base}/resume/Jacob-Lebovitz-Resume.pdf`;
</script>

<svelte:head>
  <title>Resume · Jacob Lebovitz</title>
</svelte:head>

<header class="page-head">
  <p class="eyebrow">Document</p>
  <h1>Resume</h1>
  <p class="lede">
    My one-page resume is below. You can also open the full PDF in a new tab or download it
    directly.
  </p>
  <div class="cta-row">
    <a class="cta primary" href={resumePath} target="_blank" rel="noopener noreferrer">
      Open PDF in new tab ↗
    </a>
    <a class="cta" href={resumePath} download>
      Download PDF
    </a>
  </div>
</header>

<section class="quick-summary">
  <h2>At a glance</h2>
  <ul>
    <li><strong>MIT Sloan</strong> — Master of Business Analytics candidate (Operations Research Center), 2025–Present.</li>
    <li><strong>UC Berkeley</strong> — B.A. Data Science (Applied Math &amp; Modeling); Minor in Sustainable Design, 2021–2025.</li>
    <li><strong>Industry experience</strong> — Verdagy (Data Science Intern), Boston Public Health Commission (Analytics Lab), UC Berkeley (Probability TA).</li>
    <li><strong>Core skills</strong> — Python, SQL, R, Julia, Keras, Probability, AMPL, JuMP, ArcGIS, Git.</li>
  </ul>
</section>

<style>
  .page-head { margin: 1.5rem 0 1.5rem; }
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
  .lede { max-width: 70ch; line-height: 1.6; margin: 0; }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    margin-top: 1rem;
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

  .quick-summary {
    margin-top: 2rem;
    padding: 1.25rem 1.5rem;
    border-radius: 14px;
    border: 1px solid color-mix(in oklch, var(--color-accent), transparent 80%);
    background-color: color-mix(in oklch, canvas, var(--color-accent) 3%);
  }
  .quick-summary h2 {
    margin-top: 0;
    font-size: 1.2rem;
  }
  .quick-summary ul {
    margin: 0;
    padding-left: 1.2rem;
    line-height: 1.55;
  }
  .quick-summary li { margin-bottom: 0.4rem; }
</style>
