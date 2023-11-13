<template>
    <div>
        <h2 class="mb-2 font-extrabold font-sans">Carrello</h2>
        <div v-if="cart.length === 0" class="font-mono">
            Il carrello è vuoto 😱.
        </div>
        <div v-else>
            <div v-for="product in cart" :key="product.id">
                <div class="capitalize font-bold">{{ product.name }}</div>
                <div>Prezzo: {{ product.price }}</div>
                <button @click="removeFromCart(product)" class="h-10 px-6 font-semibold rounded-md bg-amber-600 hover:bg-amber-700 text-white">Rimuovi dal carrello</button>
            </div>
            <div class="text-sm mt-4 font-semibold text-slate-700">

                Totale: ${{ calculateTotal() }}
           
            </div>
            <button @click="removeAll" class="h-10 px-6 font-semibold rounded-md bg-rose-700 hover:bg-rose-600 text-white">Rimuovi tutto</button>
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
 
 const removeFromCart = (product) => {
     store.removeFromCart(product);
 };
 
 const removeAll = () => store.cart = cart.value = [];



 const calculateTotal = () => {
     return cart.value.reduce((total, product) => total + parseInt(product.price), 0)
 };
 </script>
 
 <style lang="scss"></style>