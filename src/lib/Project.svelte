<script>  
export let data = {};
</script>



<section>
        <header><h2>{data.title}</h2></header>
        {#if data.image}
        <img src={data.image} alt="">
        {/if}
        <p>{data.description}</p>
</section>

<style>
        section {
  display: grid;
  grid-template-rows: subgrid; 
  grid-row: span 3;           
}

        h2 {
  margin: 0; 
}
</style>       


    