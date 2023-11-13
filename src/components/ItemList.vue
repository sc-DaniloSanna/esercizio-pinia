<template>
  <div v-for="item in items" :key="item.id">
            <div class="capitalize font-bold">{{ item.name }}</div>
            <div>Prezzo: {{ item.price }}</div>
            <button @click="addToCart(item)" class="h-10 px-6 font-semibold rounded-md bg-emerald-500 hover:bg-emerald-600 text-white">Aggiungi al carrello</button>
        </div>
</template>
<script setup>
import { items } from '../../content';
import { useStore } from '../stores/counter';

const store = useStore();


const addToCart = (item) => {
    store.addToCart(item);
};

</script>
<style lang="scss">
</style>