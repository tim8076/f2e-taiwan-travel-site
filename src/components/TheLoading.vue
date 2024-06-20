<template>
  <loading
    v-model:active="isLoading"
    :can-cancel="true"
    loader="dots"
    :height="128"
    :width="128"
    color="#188E6B"
    background-color="#fff"
    :is-full-page="true" />
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';
import { useLoadingStore } from '@/stores/loading.js';
import { mapState } from 'pinia';

export default {
  computed: {
    ...mapState(useLoadingStore, ['isLoading']),
  },
  components: {
    Loading,
  },
}
</script>