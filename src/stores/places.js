import { defineStore } from 'pinia';
import { useApiStore } from './api';
import { useLoadingStore } from './loading';
import axios from 'axios';
import Swal from 'sweetalert2';

export const usePlacesStore = defineStore('places', {
  state: () => {
    return {
      placesList: [],
    };
  },
  getters: {
    randomPlaces: (state) => (num) => {
      const hasImagePlaces = state.placesList.filter(item => {
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
    async getPlaces() {
      const apiStore = useApiStore();
      const loadingStore = useLoadingStore();
      try {
        loadingStore.isLoading = true;
        const token = await apiStore.readToken();
        const path = `${import.meta.env.VITE_API_PATH_BASE}/v2/Tourism/ScenicSpot?format=JSON&top=60`;
        const res = await axios.get(path, {
          headers: {
            authorization: `Bearer ${token}`,
          }
        });
        this.placesList = res.data;
        setTimeout(() => {
          loadingStore.isLoading = false;
        }, 1000);
      } catch (err) {
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