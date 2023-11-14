<template>
    <div class="card flex justify-content-center">
        <MultiSelect v-model="selectedCities" :options="cities" filter optionLabel="name" placeholder="Select Cities"
            :maxSelectedLabels="3" class="bg-slate-100 border-2 w-full md:w-20rem" />
    </div>
  <div v-for="product in products" :key="product.id">
            <div class="capitalize font-bold">{{ product.name }}</div>
            <div>Prezzo: {{ product.price }}</div>
            <button @click="addToCart(product)" class="h-10 px-6 font-semibold rounded-md bg-emerald-500 hover:bg-emerald-600 text-white">Aggiungi al carrello</button>
        </div>
</template>
<script setup>

import { products } from '../../db.json';
import { useUserCartStore } from '../stores/userCart.store';
import { ref } from "vue";

const selectedCities = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);

const store = useUserCartStore();


const addToCart = (product) => {
    store.addToCart(product);
};

</script>
<style lang="scss">
</style>