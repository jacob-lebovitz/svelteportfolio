<script>
  import projects from "$lib/projects.json";
  import Project from "$lib/Project.svelte";
  import Reading from "$lib/Reading.svelte";
  import readings from "$lib/reading.json";

  const hour = new Date().getHours();

  let greeting = "";
  let gradientClass = "";

  if (hour >= 5 && hour < 12) {
    greeting = "Good morning";
    gradientClass = "morning";
  } 
  else if (hour >= 12 && hour < 17) {
    greeting = "Good afternoon";
    gradientClass = "afternoon";
  } 
  else if (hour >= 17 && hour < 21) {
    greeting = "Good evening";
    gradientClass = "evening";
  } 
  else {
    greeting = "Good night";
    gradientClass = "night";
  }
</script>


<h1 class="greeting {gradientClass}">
  {greeting}, Jacob Lebovitz
</h1>
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

    .greeting {
    font-size: 2.5rem;
    font-weight: 700;
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
    }

    /* Morning: blue → soft yellow */
    .morning {
    background-image: linear-gradient(90deg, #4facfe, #fddb92);
    }

    /* Afternoon: blue → green */
    .afternoon {
    background-image: linear-gradient(90deg, #36dc9a, #5b86e5);
    }

    /* Evening: sunset */
    .evening {
    background-image: linear-gradient(90deg, #4B3D60, #FD5E53, #FFE373, #FFC39D);
    }

    /* Night: deep blue → purple */
    .night {
    background-image: linear-gradient(90deg, #141e30, #243b55, #4b6cb7);
    }


</style>