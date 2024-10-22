<script setup >
const props = defineProps ({
    firstname : String,
    hobbies : String,

})

</script>


<template>


   <p>
      Outside of work, {{ firstname }} likes to
      {{ hobbies[0] }} and go {{ hobbies[1] }}.
    </p> 

</template>

<style scoped></style>