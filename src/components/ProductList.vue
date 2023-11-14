<template>
  <div v-for="product in products" :key="product.id">
            <div class="capitalize font-bold">{{ product.name }}</div>
            <div>Prezzo: {{ product.price }}</div>
            <button @click="addToCart(product)" class="h-10 px-6 font-semibold rounded-md bg-emerald-500 hover:bg-emerald-600 text-white">Aggiungi al carrello</button>
        </div>
</template>
<script setup>
import { products } from '../../db.json';
import { useUserCartStore } from '../stores/userCart.store';

const store = useUserCartStore();


const addToCart = (product) => {
    store.addToCart(product);
};

</script>
<style lang="scss">
</style>