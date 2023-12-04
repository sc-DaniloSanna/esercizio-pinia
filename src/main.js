import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';
import PrimeVue from 'primevue/config';
import { createI18n } from 'vue-i18n'

import App from './App.vue';
import router from './router';
import InputText from 'primevue/inputtext';
import Dropdown from 'primevue/dropdown';
import TreeTable from 'primevue/treetable';
import Column from 'primevue/column';

import itTranslation from './assets/translations/it.json';
import enTranslation from './assets/translations/en.json';


const app = createApp(App);
const i18n =  createI18n({
  legacy: false,
  locale: 'it', // lingua predefinita
  messages: {
    'it': itTranslation,
    'en': enTranslation,

    // Aggiungi altre lingue secondo necessità
  },
});
  

app.use(createPinia());
app.use(router);
app.use(PrimeVue);
app.use(i18n);  

app.component('Dropdown', Dropdown);
app.component('InputText', InputText);
app.component('TreeTable', TreeTable);
app.component('Column', Column);

app.mount('#app');
