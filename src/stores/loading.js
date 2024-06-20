import { defineStore } from 'pinia';

export const useLoadingStore = defineStore('loading', {
  state: () => {
    return {
      isLoading: false,
    };
  },
  actions: {
    showLoading() {
      this.isLoading = true;
    },
    closeLoading() {
      this.isLoading = false;
    },
  },
})