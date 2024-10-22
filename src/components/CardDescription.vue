<script setup>
import Title from './Title.vue'
import FirstParagraph from './FirstParagraph.vue'
import SecondParagraph from './SecondParagraph.vue'
import ThirdParagraph from './ThirdParagraph.vue'

const props = defineProps({
  personInfos: Object,
})
</script>

<template>
  <section class="card-container">
    <img
      src="https://res.cloudinary.com/lereacteur-apollo/image/upload/v1704967000/RNCP31114/cours-vue/exo-sem-1/mystery-person_bueack.jpg"
      alt=""
    />
    <Title
      :firstname="personInfos.firstname"
      :lastname="personInfos.lastname"
    />

    <FirstParagraph
      :gender="personInfos.gender"
      :age="personInfos.age"
      :job="personInfos.job"
    />
    <SecondParagraph
      :firstname="personInfos.firstname"
      :hobbies="personInfos.hobbies"
    />

    <ThirdParagraph :gender="personInfos.gender" :pet="personInfos.pet" />
    <font-awesome-icon :icon="['fas', 'heart']" />
  </section>
</template>

<style scoped>

.card-container {

  padding: 20px;
  border-radius: 10px;
  background-color: #eeeeee;
  flex: 1;
  box-shadow: 0 0 7px grey;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

img {
  margin-top: 10px;
  width: 100%;
  object-fit: cover;
  object-fit: top;
}
svg {
  align-self: flex-end;
  color: grey;

}
</style>
