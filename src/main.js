import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PrimeVue from 'primevue/config';

import App from './App.vue'
import router from './router'
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.use(PrimeVue);
app.component('Dropdown', Dropdown);
app.component('InputText', InputText);
app.component('TreeTable', TreeTable);
app.component('Column', Column);
app.mount('#app')
