import { createApp } from 'vue'
import App from './App.vue'

import { router } from './router';

//* Devo scrivere anche qui use(router), per ricordare all'applicazione di usare router.
createApp(App).use(router).mount('#app');
