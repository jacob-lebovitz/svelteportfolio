<script>
  import { onMount } from "svelte";

  let mounted = false;
  let dismissed = false;

  onMount(() => {
    // Small delay so the pop-up reads as an entrance, not a flicker.
    const showTimer = setTimeout(() => (mounted = true), 250);
    // Auto-tuck after a few seconds.
    const hideTimer = setTimeout(() => (dismissed = true), 4200);
    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  });

  function poke() {
    // Replay the pop on click for fun.
    dismissed = false;
    mounted = false;
    requestAnimationFrame(() => (mounted = true));
    setTimeout(() => (dismissed = true), 4200);
  }
</script>

<button
  type="button"
  class="beaver"
  class:visible={mounted && !dismissed}
  class:tucked={dismissed}
  on:click={poke}
  aria-label="Hello! (toggle the beaver)"
  title="Hi from MIT"
>
  <span class="beaver-bubble">Hi from MIT!</span>

  <svg
    class="beaver-svg"
    viewBox="0 0 120 140"
    role="img"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <!-- shadow -->
    <ellipse cx="60" cy="132" rx="32" ry="4" fill="rgba(0,0,0,0.15)" />

    <!-- body -->
    <ellipse cx="60" cy="80" rx="36" ry="40" fill="#8B5A2B" />
    <ellipse cx="60" cy="92" rx="28" ry="26" fill="#C99166" />

    <!-- ears -->
    <circle cx="32" cy="46" r="9" fill="#6F441C" />
    <circle cx="88" cy="46" r="9" fill="#6F441C" />
    <circle cx="32" cy="46" r="4" fill="#3D2611" />
    <circle cx="88" cy="46" r="4" fill="#3D2611" />

    <!-- head -->
    <ellipse cx="60" cy="58" rx="32" ry="30" fill="#8B5A2B" />
    <ellipse cx="60" cy="68" rx="22" ry="18" fill="#C99166" />

    <!-- eyes -->
    <circle cx="48" cy="56" r="5" fill="#ffffff" />
    <circle cx="72" cy="56" r="5" fill="#ffffff" />
    <circle cx="49" cy="57" r="3" fill="#1a1a1a">
      <animate
        attributeName="cx"
        values="49;47;49;51;49"
        keyTimes="0;0.25;0.5;0.75;1"
        dur="4s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="73" cy="57" r="3" fill="#1a1a1a">
      <animate
        attributeName="cx"
        values="73;71;73;75;73"
        keyTimes="0;0.25;0.5;0.75;1"
        dur="4s"
        repeatCount="indefinite"
      />
    </circle>
    <circle cx="50" cy="56" r="1" fill="#ffffff" />
    <circle cx="74" cy="56" r="1" fill="#ffffff" />

    <!-- nose -->
    <ellipse cx="60" cy="68" rx="4" ry="3" fill="#1a1a1a" />

    <!-- mouth + buck teeth -->
    <path d="M 60 71 Q 56 76 52 75" stroke="#3D2611" stroke-width="1.5" fill="none" stroke-linecap="round" />
    <path d="M 60 71 Q 64 76 68 75" stroke="#3D2611" stroke-width="1.5" fill="none" stroke-linecap="round" />
    <rect x="56" y="73" width="3.5" height="7" rx="1" fill="#fdf6e3" stroke="#c9b07a" stroke-width="0.5" />
    <rect x="60.5" y="73" width="3.5" height="7" rx="1" fill="#fdf6e3" stroke="#c9b07a" stroke-width="0.5" />

    <!-- whiskers -->
    <g stroke="#3D2611" stroke-width="0.6" stroke-linecap="round" opacity="0.7">
      <line x1="42" y1="68" x2="32" y2="66" />
      <line x1="42" y1="70" x2="32" y2="71" />
      <line x1="78" y1="68" x2="88" y2="66" />
      <line x1="78" y1="70" x2="88" y2="71" />
    </g>

    <!-- arms holding a tiny MIT-red sign -->
    <ellipse cx="36" cy="100" rx="6" ry="9" fill="#6F441C" />
    <ellipse cx="84" cy="100" rx="6" ry="9" fill="#6F441C" />

    <!-- belly -->
    <path d="M 44 96 Q 60 110 76 96" stroke="#8B5A2B" stroke-width="1.5" fill="none" />
  </svg>
</button>

<style>
  .beaver {
    --beaver-w: 92px;
    position: fixed;
    /* Anchor near the top of the viewport, slightly inset from the right
       edge of the page so the beaver appears above the nav toolbar
       without colliding with the JL brand mark on the left. */
    top: 0;
    right: clamp(72px, 14vw, 180px);
    width: var(--beaver-w);
    height: calc(var(--beaver-w) * 140 / 120);
    /* Hidden state: tucked entirely above the viewport. */
    transform: translateY(-110%);
    transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
    z-index: 60;
    pointer-events: none;
    background: transparent;
    border: 0;
    padding: 0;
    cursor: pointer;
  }

  /* Visible state: dropped down so the beaver pokes out above the
     toolbar with most of its body below the top edge. */
  .beaver.visible {
    transform: translateY(-22%);
    pointer-events: auto;
    animation: bob 2.6s ease-in-out 0.7s 2;
  }
  .beaver.tucked {
    transform: translateY(-110%);
    pointer-events: auto;
    animation: none;
  }

  @keyframes bob {
    0%, 100% { transform: translateY(-22%); }
    50% { transform: translateY(-30%); }
  }

  .beaver-svg {
    width: 100%;
    height: 100%;
    display: block;
    filter: drop-shadow(0 6px 8px rgba(0, 0, 0, 0.18));
  }

  .beaver-bubble {
    position: absolute;
    /* Bubble sits to the left of the beaver near its head/face line,
       since the beaver is anchored on the right side of the page. */
    top: 18%;
    right: calc(100% + 10px);
    background: var(--paper);
    color: var(--ink);
    border: 1px solid var(--rule);
    border-radius: 14px;
    padding: 0.35em 0.75em;
    font-size: 0.78rem;
    font-weight: 600;
    white-space: nowrap;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
    opacity: 0;
    transform: translateY(4px);
    transition: opacity 0.4s ease 0.65s, transform 0.4s ease 0.65s;
  }
  .beaver-bubble::after {
    content: "";
    position: absolute;
    right: -6px;
    top: 14px;
    width: 10px;
    height: 10px;
    background: var(--paper);
    border-right: 1px solid var(--rule);
    border-top: 1px solid var(--rule);
    transform: rotate(45deg);
  }

  .beaver.visible .beaver-bubble {
    opacity: 1;
    transform: translateY(0);
  }

  /* Respect users who prefer reduced motion: just show the beaver in place. */
  @media (prefers-reduced-motion: reduce) {
    .beaver {
      transition: none;
    }
    .beaver.visible {
      animation: none;
    }
  }

  @media (max-width: 720px) {
    .beaver {
      --beaver-w: 70px;
      right: 14px;
    }
    .beaver-bubble {
      display: none;
    }
  }
</style>
