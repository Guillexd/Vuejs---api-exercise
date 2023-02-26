<script setup>
import Spinner from '../presentation/Spinner.vue';
import Card from '../presentation/Card.vue';
import Search from './Search.vue'
import { onMounted, ref, watch } from 'vue';

const characters = ref([]);
let allCharacters = [];
const isLoading = ref(false);
const pageAll = ref(1);
const texto = ref('');

const getCharacters = async (id) => {
  const response = await fetch(`https://rickandmortyapi.com/api/character?page=${id}`);
  const { results } = await response.json();
  characters.value = results;
  allCharacters = results;
  isLoading.value = true;
}
//helper
const setLocalStorage = (page) => {
  localStorage.setItem('pageAll', JSON.stringify(page));
}
//control pages
const handlePagesIncrement = () => {
  isLoading.value = false;
  pageAll.value++;
  setTimeout(() => {
    getCharacters(pageAll.value);
  }, 2000);
  setLocalStorage(pageAll.value);
}
//control pages
const handlePagesDecrement = () => {
  isLoading.value = false;
  pageAll.value--;
  setTimeout(() => {
    getCharacters(pageAll.value);
  }, 2000);
  setLocalStorage(pageAll.value);
}
//Seraching...
watch(texto, (newText, oldText) => {
  characters.value = allCharacters.filter(ch => {
      return ch.name.toLowerCase().includes(newText.toLowerCase());
    })
})

//life's cicle
onMounted(() => {
  //getPage
  pageAll.value = JSON.parse(localStorage.getItem('pageAll'));
  setTimeout(() => {
    getCharacters(pageAll.value);
  }, 2000);
  console.log("Mounted");
})

</script>

<template>
  <div class="d-flex flex-column">
    <!-- <Search v-if="isLoading" :characters="characters" @getCharactersFiltered="characters = $event"/> -->
    <div class="form-floating w-50 mx-auto my-5">
      <input type="text" class="form-control" id="floatingInput" placeholder="Meme" v-model="texto">
      <label for="floatingInput"> Characters... </label>
    </div>

    <p class="text-center fs-5">{{ pageAll }} </p>
    <div class="btn-group mb-5" role="group">
      <button type="button" class="btn btn-secondary " @click="handlePagesDecrement"
        :disabled="pageAll <= 1">Regresar</button>
      <button type="button" class="btn btn-success" v-on:click="handlePagesIncrement">Avanzar</button>
    </div>

    <!-- COMPONENTS -->
    <Card v-if="isLoading" :characters="characters" />
    <Spinner v-else-if="!isLoading" />

    <div class="btn-group my-5" role="group">
      <button type="button" class="btn btn-secondary " @click="handlePagesDecrement"
        :disabled="pageAll <= 1">Regresar</button>
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