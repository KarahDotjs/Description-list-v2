<template>
  <section>
    <img
      src="https://res.cloudinary.com/lereacteur-apollo/image/upload/v1704967000/RNCP31114/cours-vue/exo-sem-1/mystery-person_bueack.jpg"
      alt=""
    />
   
   
    <font-awesome-icon :icon="['fas', 'heart']" />
   
 
  </section>
</template>

<style scoped>
section {
  width: calc((100% - 30px) / 4);
  padding: 20px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 0 7px grey;
}

img {
  aspect-ratio: 16/10;
  object-fit: cover;
  object-fit: top;
  width: 100%;
  margin-bottom: 20px;
}
</style>
