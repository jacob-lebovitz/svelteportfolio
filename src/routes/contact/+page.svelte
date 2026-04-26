<svelte:head>
  <title>Contact · Jacob Lebovitz</title>
</svelte:head>

<header class="page-head">
  <p class="eyebrow">Get in touch</p>
  <h1>Contact</h1>
  <p class="lede">
    The fastest way to reach me is by email. You can also drop a message through the
    form below — it will open in your default mail client pre-addressed to me.
  </p>
</header>

<div class="contact-grid">
  <aside class="contact-card">
    <h2>Direct</h2>
    <ul>
      <li>
        <a href="mailto:107650576+jacob-lebovitz@users.noreply.github.com">
          Email me
        </a>
      </li>
      <li>
        <a href="https://github.com/jacob-lebovitz" target="_blank" rel="noopener noreferrer">
          GitHub · @jacob-lebovitz ↗
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/jacob-lebovitz/" target="_blank" rel="noopener noreferrer">
          LinkedIn ↗
        </a>
      </li>
    </ul>
  </aside>

  <form action="mailto:107650576+jacob-lebovitz@users.noreply.github.com" method="GET">
    <label>
      Your Email
      <input name="email" type="email" required />
    </label>

    <label>
      Subject
      <input name="subject" />
    </label>

    <label>
      Message
      <textarea name="body" rows="6"></textarea>
    </label>

    <button>Send Message</button>
  </form>
</div>

<style>
  .page-head { margin: 1.5rem 0 1.75rem; }
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

  .contact-grid {
    display: grid;
    grid-template-columns: minmax(0, 1fr) minmax(0, 2fr);
    gap: 2rem;
    align-items: start;
  }

  .contact-card {
    border: 1px solid color-mix(in oklch, var(--color-accent), transparent 80%);
    border-radius: 14px;
    padding: 1.1rem 1.25rem;
    background-color: color-mix(in oklch, canvas, var(--color-accent) 3%);
  }
  .contact-card h2 { margin-top: 0; font-size: 1.1rem; }
  .contact-card ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .contact-card li { margin-bottom: 0.5rem; }
  .contact-card a {
    text-decoration: none;
    font-weight: 600;
  }
  .contact-card a:hover { text-decoration: underline; }

  @media (max-width: 720px) {
    .contact-grid { grid-template-columns: 1fr; }
  }
</style>
