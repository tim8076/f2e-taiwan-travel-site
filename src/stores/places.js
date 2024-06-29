import { defineStore } from 'pinia';
import { useApiStore } from './api';
import { useLoadingStore } from './loading';
import axios from 'axios';
import Swal from 'sweetalert2';

export const usePlacesStore = defineStore('places', {
  state: () => {
    return {
      placesList: [],
      placesByZipCode: [],
      singlePlace: {
        Address: '',
        TravelInfo: '',
        DescriptionDetail: '',
        Picture: {
          PictureUrl1: '',
        },
        Position: {
          PositionLat: 0,
          PositionLon: 0,
        }
      },
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
        
        let path = `${import.meta.env.VITE_API_PATH_BASE}/v2/Tourism/ScenicSpot?format=JSON&top=60`;
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
    async getSinglePlace(spotId) {
      const apiStore = useApiStore();
      const loadingStore = useLoadingStore();
      try {
        loadingStore.isLoading = true;
        const token = await apiStore.readToken();
        let path = `${import.meta.env.VITE_API_PATH_BASE}/v2/Tourism/ScenicSpot?format=JSON&$filter=ScenicSpotID eq '${spotId}'`;
        const res = await axios.get(path, {
          headers: {
            authorization: `Bearer ${token}`,
          }
        });
        this.singlePlace = res.data[0];
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
    async getPlacesByZipcode(zipCode) {
      const apiStore = useApiStore();
      const loadingStore = useLoadingStore();
      try {
        loadingStore.isLoading = true;
        const token = await apiStore.readToken();
        let path = `${import.meta.env.VITE_API_PATH_BASE}/v2/Tourism/ScenicSpot?format=JSON&$filter=ZipCode eq '${zipCode}'`;
        const res = await axios.get(path, {
          headers: {
            authorization: `Bearer ${token}`,
          }
        });
        this.placesByZipCode = res.data;
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
    }
  },
})