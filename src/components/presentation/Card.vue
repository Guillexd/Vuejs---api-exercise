<script setup>
  import Item from './Items.vue';
    defineProps({
        characters:{
            type: Object
        }
    })
</script>

<template>
    <section class="d-flex gap-3 flex-wrap">
      <div v-for="character in characters" class="card rounded-5">
        <Item :character="character" :key="character.id"/> 
      </div>
    </section>
</template>

<style scoped>
section{
  width: 100%;
}
section div{
  width: 18rem;
  margin: 0 !important;
  overflow: hidden;
}
</style>