<script>
  import projects from "$lib/projects.json";
  import Project from "$lib/Project.svelte";
  import Reading from "$lib/Reading.svelte";
    import readings from "$lib/reading.json";
</script>

<nav>
    <a class="current" href="./">Home</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a>
    <a href="/resume">Resume</a>
    <a href="https://github.com/jacob-lebovitz" target="_blank">GitHub</a>
</nav>
<h1>Jacob Lebovitz</h1>
<p>This is a placeholder for Jacob's personal site and portfolio. Here you can find information about his background, skills, projects, and contact information.</p>
<h3> Latest Projects </h3>
<div class="projects"> 
    {#each projects.slice(0, 3) as p}
    <Project data={p} />
    {/each}
</div>

<h3> Recent Reading </h3>

<div class="reading-section">

    <div class="readings">
        {#each readings as r}
            <Reading data={r} />
        {/each}
    </div>

    <!-- svelte-ignore a11y-img-redundant-alt -->
    <img 
        class="headshot"
        src="images/headshot.JPG" 
        alt="Photo of Jacob Lebovitz smiling standing in front of Doe Library at the University of California, Berkeley"
    >

</div>

<style>

    .reading-section {
    display: flex;
    align-items: flex-start;
    gap: 2rem;
    }

    .readings {
    display: flex;
    flex-direction: column;
    }

    .headshot {
    width: 500px;
    height: auto;
    border-radius: 8px;
    }

</style>