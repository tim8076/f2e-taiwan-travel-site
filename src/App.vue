<script setup>
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
</script>

<template>
 
  <TheHeader />
  <RouterView />

</template>

<style lang="scss">
@import './scss/all.scss';
</style>
