<script setup>
const props = defineProps({
  gender: String,
  age: Number,
  job: String,
})
</script>

<template>
  <p>
    {{ gender === 'female' ? 'She' : 'He' }} is {{ age }}-year-old {{ job }}
  </p>
</template>

<style scoped></style>
