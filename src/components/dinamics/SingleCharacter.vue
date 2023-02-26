<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'
import Item from '../presentation/Items.vue';
import Spinner from '../presentation/Spinner.vue'

const character = ref([]);
const isLoading = ref(false);

const Route = useRoute();

const getCharacter = async () => {
  const response = await fetch(`https://rickandmortyapi.com/api/character/${Route.params.id}`);
  const results = await response.json();
  console.log(results);
  character.value = results;
  isLoading.value = true;
}
//life's cicle
onMounted(() => {
  setTimeout(() => {
    getCharacter();
  }, 2000);
  console.log("Mounted");
})
</script>
<template>
  <section class="d-flex justify-content-center">
    <div v-if="isLoading" class="card rounded-5">
      <Item :character="character"/>
    </div>
    <Spinner v-else-if="!isLoading" />
  </section>
</template>

<style scoped>
section {
  width: 100%;
}

section div { 
  width: 50%;
  margin: 0 !important;
  overflow: hidden;
}
</style>