<script setup>
import CardDescription from './components/CardDescription.vue'
import Title from './components/Title.vue'
import FirstParagraph from './components/FirstParagraph.vue'
import SecondParagraph from './components/SecondParagraph.vue'
import ThirdParagraph from './components/ThirdParagraph.vue'

const personsList = [
  {
    gender: 'female',
    firstname: 'Emily',
    lastname: 'Parker',
    age: 24,
    job: 'teacher',
    hobbies: ['read books', 'go hiking'],
    pet: {
      name: 'Whiskers',
      age: 2,
      species: 'ferret'
    },
    favoriteColor: 'red'
  },
  {
    gender: 'male',
    firstname: 'Marcus',
    lastname: 'Bennett',
    age: 38,
    job: 'architect',
    hobbies: ['watch bird', 'play chess'],
    pet: {
      name: 'Nala',
      age: 6,
      species: 'dog'
    },
    favoriteColor: 'blue'
  },
  {
    gender: 'female',
    firstname: 'Sophia',
    lastname: 'Rodriguez',
    age: 31,
    job: 'environmental scientist',
    hobbies: ['play guitar', 'bake cakes'],
    pet: {
      name: 'Paws',
      age: 3,
      species: 'cat'
    },
    favoriteColor: 'orange'
  },
  {
    gender: 'male',
    firstname: 'Oliver',
    lastname: 'Hughes',
    age: 56,
    job: 'carpenter',
    hobbies: ['paint', 'ride horses'],
    pet: {
      name: 'Bubble',
      age: 4,
      species: 'snake'
    },
    favoriteColor: 'purple'
  }
]
</script>

<template>
  <main>
    <div class="main-container">
    
      <CardDescription />
      <CardDescription />
      <CardDescription />
      <CardDescription />
      <Title />
      <FirstParagraph />
      <SecondParagraph />
      <ThirdParagraph />
    </div>
  </main>
</template>

<style scoped>
main {
  padding: 50px;
  background-color: #c9e1c2;
  height: 100vw;
}
.main-container {
  display: flex;
  gap: 10px;
}
</style>
