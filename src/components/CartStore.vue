<template>
    <div>
        <h2 class="mb-2 font-extrabold font-sans">Carrello</h2>
        <div v-if="cart.length === 0" class="font-mono">
            Il carrello è vuoto 😱.
        </div>
        <div v-else>
            <div v-for="item in cart" :key="item.id">
                <div class="capitalize font-bold">{{ item.name }}</div>
                <div>Prezzo: {{ item.price }}</div>
                <button @click="removeFromCart(item)" class="h-10 px-6 font-semibold rounded-md bg-amber-600 hover:bg-amber-700 text-white">Rimuovi dal carrello</button>
            </div>
            <div class="text-sm mt-4 font-semibold text-slate-700">

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