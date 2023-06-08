import { createPinia } from 'pinia';
import { createApp } from 'vue';
import { HeliaProviderPlugin } from './plugins/HeliaProviderPlugin'

import App from './App.vue';
import './assets/main.css';
import router from './router';

const app = createApp(App);

app.use(createPinia());
app.use(HeliaProviderPlugin);
app.use(router);

app.mount('#app');
