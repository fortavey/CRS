import { createApp } from 'vue';
import VueGtag from 'vue-gtag';
import App from './App.vue';
import store from './store';

createApp(App).use(store).use(VueGtag, { config: { id: 'G-Y7ZLZ5V941' } }).mount('#app');
