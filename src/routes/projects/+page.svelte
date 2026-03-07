<svelte:head>
  <title>Projects</title>
</svelte:head>
<script>
  import projects from "$lib/projects.json";
  import Project from "$lib/Project.svelte";
</script>



<nav>
    <a href=".">Home</a>
    <a class="current" href="projects">Projects</a>
    <a href="contact">Contact</a>
    <a href="resume">Resume</a>
    <a href="https://github.com/jacob-lebovitz" target="_blank">GitHub</a>
</nav>
    <h1>{ projects.length } Projects</h1>
    <p>Information and descriptions of Jacob's projects will be listed here:</p>
    <div class="projects">
    <!-- 1. Water Access Optimization in DRC -->
     {#each projects as p}
      <Project data={p} />
    {/each}
    </div>