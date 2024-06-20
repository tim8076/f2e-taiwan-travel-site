import { defineStore } from 'pinia';
import { useApiStore } from './api';
import axios from 'axios';
import Swal from 'sweetalert2';

export const useCityStore = defineStore('city', {
  state: () => {
    return {
      cityList: [],
      townList: [],
    };
  },
  actions: {
    async getCities() {
      try {
        const apiStore = useApiStore();
        const token = await apiStore.readToken();
        const path = `${import.meta.env.VITE_API_PATH_BASE}/v2/Basic/City?format=JSON`;
        const res = await axios.get(path, {
          headers: {
            authorization: `Bearer ${token}`,
          }
        });
        this.cityList = res.data;
      } catch(err) {
        Swal.fire({
          title: 'Error!',
          text: err.message,
          icon: 'error',
          confirmButtonText: '確認',
        });
      }
    },
    async getTowns(city) {
      try {
        const apiStore = useApiStore();
        const token = await apiStore.readToken();
        const path = `${import.meta.env.VITE_API_PATH_BASE}/v2/Basic/City/${city}/Town?format=JSON`;
        const res = await axios.get(path, {
          headers: {
            authorization: `Bearer ${token}`,
          }
        });
        this.townList.push(res.data);
      }
      catch (err) {
        Swal.fire({
          title: 'Error!',
          text: err.message,
          icon: 'error',
          confirmButtonText: '確認',
        });
      }
    }
  },
})