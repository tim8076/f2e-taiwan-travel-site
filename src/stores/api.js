import { defineStore } from 'pinia';
import axios from 'axios';
import qs from 'qs';

export const useApiStore = defineStore('api', {
  actions: {
    getToken() {
      const api = {
        path: `${import.meta.env.VITE_API_PATH}/auth/realms/TDXConnect/protocol/openid-connect/token`,
        id: import.meta.env.VITE_API_CLIENT_ID,
        secret: import.meta.env.VITE_API_CLIENT_SECRET,
      }
      const data = qs.stringify({
        'grant_type': 'client_credentials',
        'client_id': api.id,
        'client_secret': api.secret,
      });
      return axios({
        method: 'POST',
        url: api.path,
        header: { 'content-type': 'application/x-www-form-urlencoded' } ,
        data,
      })
    },
    async readToken() {
      function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
      }
      if(!getCookie('accessToken')) {
        const res = await this.getToken();
        document.cookie = `accessToken=${res.data.access_token}; max-age=86400; path=/`;
      }
      return getCookie('accessToken');
    }
  },
})