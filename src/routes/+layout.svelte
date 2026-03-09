<script>    
    let pages = [
    {url: "/", title: "Home"},
    {url: "/projects", title: "Projects"},
    {url: "/resume", title: "Resume"},
    {url: "/contact", title: "Contact"},
    {url: "https://github.com/jacob-lebovitz", title: "Github"},
    // add other pages here
    ];
    import { base } from "$app/paths";
    import { page } from "$app/stores";


</script>


<nav>
  {#each pages as p}
    <a href={p.url.startsWith("http") ? p.url : base + p.url}
    class:current={p.url === "/" // is this link the home page?
    ? $page.url.pathname === (base + "/") // if yes - set current = true if the path name matches. Else, set current = true if the path name starts correctly
    : $page.url.pathname.startsWith(base + p.url)}
    target={p.url.startsWith("http") ? "_blank": null}
    >
    {p.title}
    </a>
  {/each}

</nav>

<style>
    :root {
    color-scheme: dark;
    }

    nav {
    --border-color: oklch(50% 10% 200 / 40%);
        /* ... other styles and nested rules ... */
    border-bottom: 2px solid var(--border-color);
    }
    /* other CSS rules */
    .current {
    border-bottom: 4px solid var(--border-color); 
    }

    nav {
    display: flex;            
    margin-bottom: 1em;        
    }

    nav a {
    flex: 1;                 
    text-align: center;        
    text-decoration: none;      
    color: inherit;             
    padding: 0.5em 0;         
    }

    nav a.current {
    padding-bottom: 0.1em;                   
    }

    nav a:hover {
    border-bottom: 0.4em solid var(--color-accent);
    background-color: color-mix(in oklch, var(--color-accent), canvas 85%);
    padding-bottom: 0.1em;  
    }

</style>

<slot />