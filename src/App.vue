<script setup>
import { RouterView } from 'vue-router';
import TheHeader from './components/TheHeader.vue';
import TheFooter from './components/TheFooter.vue';
import TheLoading from './components/TheLoading.vue';
</script>

<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
  <TheLoading />
</template>

<style lang="scss">
@import './scss/all.scss';
</style>
