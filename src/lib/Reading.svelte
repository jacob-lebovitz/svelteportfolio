<script>
export let data = {};
</script>

<section class="reading-item">

    <!-- Book cover -->
    <img src={data.image} alt="Cover of {data.title} by {data.author}" />

    <!-- Text content -->
    <div class="reading-details">
        <h2>{data.title}</h2>
        <p class="author">{data.author}</p>
    </div>

</section>

<style>

.reading-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

img {
  width: 90px;
  height: auto;
  border-radius: 6px;
}

.reading-details {
  display: flex;
  flex-direction: column;
}

h2 {
  margin: 0;
  font-size: 1.1rem;
}

.author {
  margin: 0.25rem 0 0 0;
  font-size: 0.9rem;
  color: #666;
}

</style>