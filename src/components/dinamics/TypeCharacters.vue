<script setup>
import Spinner from '../presentation/Spinner.vue';
import Card from '../presentation/Card.vue';
import { onMounted, ref, watch } from 'vue';
import { useRoute } from 'vue-router'

const Route = useRoute(); //obtener parametros 

const characters = ref([]);
const isLoading = ref(false);
const pageSpecie = ref(1);

const getCharacters = async (specie, id) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?species=${specie}&page=${id}`);
  const { results } = await response.json();
  characters.value = results;
  isLoading.value = true;
}

const setLocalStorage = (page) => {
  localStorage.setItem(Route.params.type, JSON.stringify(page));
}

const handlePagesIncrement = () => {
  isLoading.value = false;
  pageSpecie.value++;
  setTimeout(() => {
    getCharacters(Route.params.type, pageSpecie.value);
  }, 2000);
  setLocalStorage(pageSpecie.value);
}

const handlePagesDecrement = () => {
  isLoading.value = false;
  pageSpecie.value--;
  setTimeout(() => {
    getCharacters(Route.params.type, pageSpecie.value);
  }, 2000);
  setLocalStorage(pageSpecie.value);
}

watch(Route, (newRoute)=> {
  isLoading.value = false;
  pageSpecie.value = JSON.parse(localStorage.getItem(Route.params.type));
  setTimeout(() => {
    getCharacters(newRoute.params.type, pageSpecie.value);
  }, 2000);
})

//life's cicle
onMounted(() => {
  pageSpecie.value = JSON.parse(localStorage.getItem(Route.params.type)) || 1;
  setTimeout(() => {
    getCharacters(Route.params.type, pageSpecie.value);
  }, 2000);
  console.log("Mounted");
})

</script>

<template>
  <div class="d-flex flex-column">

    <div class="form-floating w-50 mx-auto my-5">
      <input type="text" class="form-control" id="floatingInput" placeholder="Meme">
      <label for="floatingInput"> Characters... </label>
    </div>
    <p class="text-center fs-5">{{ pageSpecie || 1 }} </p>
    <div class="btn-group mb-5" role="group">
      <button type="button" class="btn btn-secondary " @click="handlePagesDecrement"
        :disabled="pageSpecie <= 1">Regresar</button>
      <button type="button" class="btn btn-success" v-on:click="handlePagesIncrement">Avanzar</button>
    </div>

    <!-- COMPONENTS -->
    <Card v-if="isLoading" :characters="characters" />
    <Spinner v-else-if="!isLoading" />

    <div class="btn-group my-5" role="group">
      <button type="button" class="btn btn-secondary " @click="handlePagesDecrement"
        :disabled="pageSpecie <= 1">Regresar</button>
      <button type="button" class="btn btn-success" v-on:click="handlePagesIncrement">Avanzar</button>
    </div>

  </div>
</template>

<!-- SCOPED: CONTAIN STYLES IN THIS COMPONENT -->
<style scoped>
div div>input {
  font-size: 1.5rem;
  color: black;
}

div div label {
  color: black;
}
</style>