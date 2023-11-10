<template>
    <div>
        <h2>Carrello</h2>
        <div v-if="cart.length === 0">
            Il carrello è vuoto 😱.
        </div>
        <div v-else>
            <div v-for="item in cart" :key="item.id">
                <div>{{ item.name }}</div>
                <div>Prezzo: {{ item.price }}</div>
                <button @click="removeFromCart(item)">Rimuovi dal carrello</button>
            </div>
            <div>

                Totale: ${{ calculateTotal() }}
           
            </div>
        </div>
    </div>
 </template>
 <script setup>
 import { ref, onMounted } from 'vue';
 import { useStore } from '../stores/counter'; 
 
 const store = useStore();
 const cart = ref([]);
 
 onMounted(() => {
     cart.value = store.cart;
 });
 
 const removeFromCart = (item) => {
     store.removeFromCart(item);
 };
 
 const calculateTotal = () => {
     return cart.value.reduce((total, item) => total + item.price, 0)
 };
 </script>
 
 <style lang="scss"></style>