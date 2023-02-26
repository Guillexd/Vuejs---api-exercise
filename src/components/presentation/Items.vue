<script setup>
import { RouterLink } from 'vue-router';
defineProps({
  character: {
    type: Object
  }
})
</script>

<template>
  <RouterLink class="nav-link" :to="`/character/${character.id}`">
    <img :src="character.image" class="card-img-top" :alt="character.name">
  </RouterLink>

  <div class="card-body d-flex flex-column justify-content-between">
    <p class="card-text m-0 p-0">Especie: {{ character.species }}</p>
    <p class="card-text m-0 p-0">Nombre: {{ character.name }}</p>
  </div>
</template>

<style scoped>
img:hover {
  transform: scale(1.1);
  transition: all ease .5s;
}

section div p {
  color: black;
  font-size: 1.3rem;
}
</style>