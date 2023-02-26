<!-- ANOTHER WAY TO MAKE CODE WITH 'SETUP' (EASIER) -->
<script setup>
import {ref, computed} from 'vue'; // HOOKS?
const counter = ref(0);
const arrayCounter = ref([]);

const increment = () => counter.value++;
const decrement = () => counter.value--;
const reset = () => counter.value = 0;
const add = () => arrayCounter.value.push(counter.value);

const bloqueador = computed(() => {
  const verificador = arrayCounter.value.find(el => el === counter.value);
  return verificador || verificador === 0;
})
</script>

<template>
  <div class="d-flex flex-column align-items-center justify-content-center">
    <h1>Contador</h1>
    <h2>{{ counter }}</h2>
    <!-- <button @click.right.prevent="increment">CLick</button> -->
    <div :id="`list ${counter}`" class="btn-group" role="group">
      <button type="button" class="btn btn-secondary " v-on:click="decrement">Decrement</button>
      <button type="button" class="btn btn-success" v-on:click="reset">Reset</button>
      <button type="button" class="btn btn-primary" @click="increment">Increment</button>
      <button type="button" class="btn btn-warning" @click="add" :disabled="bloqueador">Add</button>
    </div>
    <h2>{{ arrayCounter }}</h2>
  </div>
</template>