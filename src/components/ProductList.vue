<template>
  <div v-for="product in products" :key="product.id">
            <div class="capitalize font-bold">{{ product.name }}</div>
            <div>Prezzo: {{ product.price }}</div>
            <button @click="addToCart(product)" class="h-10 px-6 font-semibold rounded-md bg-emerald-500 hover:bg-emerald-600 text-white">Aggiungi al carrello</button>
        </div>
</template>
<script setup>
import { products } from '../../content';
import { useStore } from '../stores/counter';

const store = useStore();


const addToCart = (product) => {
    store.addToCart(product);
};

</script>
<style lang="scss">
</style>