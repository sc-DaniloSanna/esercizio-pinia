import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'
import MultiSelect from 'primevue/multiselect';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue);
app.component('MultiSelect', MultiSelect);
app.mount('#app')
