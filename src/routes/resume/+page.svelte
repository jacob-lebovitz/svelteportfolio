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
    Open my resume PDF in a new tab or download a copy.
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
    <li><strong>MIT Sloan</strong> — Master of Business Analytics candidate, Operations Research Center, August 2026.</li>
    <li><strong>UC Berkeley</strong> — B.A. Data Science (Applied Math &amp; Modeling), Minor in Sustainable Design, 2021–2025.</li>
    <li><strong>Industry experience</strong> — Conagra Brands (Data Science Capstone Intern), Verdagy (Data Science Intern), Boston Public Health Commission (Analytics Lab ML Lead), UC Berkeley (Probability TA).</li>
    <li><strong>Core skills</strong> — Python, SQL, R, Tableau, Julia, AMPL, JuMP, Keras, scikit-learn, PyTorch, Pandas, MATLAB, ArcGIS, Git, Azure.</li>
  </ul>
</section>

<style>
  .page-head { margin: 1.5rem 0 1.5rem; }
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
  .lede { max-width: 70ch; line-height: 1.6; margin: 0; }

  .cta-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.6rem;
    margin-top: 1rem;
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

  .quick-summary {
    margin-top: 2rem;
    padding: 1.25rem 1.5rem;
    border-radius: 8px;
    border: 1px solid var(--rule);
    background-color: var(--surface);
  }
  .quick-summary h2 {
    margin-top: 0;
    font-size: 1.1rem;
  }
  .quick-summary ul {
    margin: 0;
    padding-left: 1.2rem;
    line-height: 1.55;
    color: var(--ink-soft);
  }
  .quick-summary li { margin-bottom: 0.4rem; }
</style>
