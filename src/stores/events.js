import { defineStore } from 'pinia';
import { useApiStore } from './api';
import { useLoadingStore } from './loading';
import axios from 'axios';
import Swal from 'sweetalert2';

export const useEventStore = defineStore('events', {
  state: () => {
    return {
      eventsList: [],
    };
  },
  getters: {
    randomEvents: (state) => (num) => {
      const hasImagePlaces = state.eventsList.filter(item => {
        return Object.prototype.hasOwnProperty.call(item.Picture, 'PictureUrl1');
      })
      const ary = [];
      while (ary.length < num) {
        const index = Math.floor(Math.random() * hasImagePlaces.length);
        const item = hasImagePlaces[index];
        if (!ary.includes(item)) {
          ary.push(item);
        }
      }
      return ary;
    }
  },
  actions: {
    async getEvents() {
      const apiStore = useApiStore();
      const loadingStore = useLoadingStore();
      try {
        loadingStore.isLoading = true;
        const token = await apiStore.readToken();
        const path = `${import.meta.env.VITE_API_PATH_BASE}/v2/Tourism/Activity?format=JSON&top=60`;
        const res = await axios.get(path, {
          headers: {
            authorization: `Bearer ${token}`,
          }
        });
        this.eventsList = res.data;
        setTimeout(() => {
          loadingStore.isLoading = false;
        }, 1000);
      } catch(err) {
        Swal.fire({
          title: 'Error!',
          text: err.message,
          icon: 'error',
          confirmButtonText: '確認',
        });
        loadingStore.isLoading = false;
      }
    },
  },
})