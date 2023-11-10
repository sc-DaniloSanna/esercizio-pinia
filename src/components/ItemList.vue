<template>
  <div v-for="item in items" :key="item.id">
            <div>{{ item.name }}</div>
            <div>Prezzo: {{ item.price }}</div>
            <button @click="addToCart(item)">Aggiungi al carrello</button>
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
<style lang="scss"></style>