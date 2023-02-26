<script setup>
import { ref, watch } from 'vue';
const texto = ref('');
defineProps({
  characters: {
    type: Object
  }
})
const allCharacters = {...characters.value};
watch(texto, (newText, oldText) => {
   this.characters.value = allCharacters.filter(ch => {
      return ch.name.toLowerCase().includes(newText.toLowerCase());
    })  
})
</script>

<template>
  <div class="form-floating w-50 mx-auto my-5">
    <input type="text" class="form-control" id="floatingInput" placeholder="Meme" v-model="texto" @keyup="$emit('getCharactersFiltered', characters)">
    <label for="floatingInput"> Characters... </label>
  </div>
</template>