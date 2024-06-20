import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';


// axios 套件
import axios from 'axios';
import VueAxios from 'vue-axios';

// sweet alert 套件


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueAxios, axios);

app.mount('#app');
