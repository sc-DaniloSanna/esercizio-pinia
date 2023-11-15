<template>
    <div>
      <div v-for="(order, index) in orders" :key="index" class="border">
       
        <div>Ordine n. {{ order.id }}</div>
        <div>Eseguito il : {{ order.createdAt }}</div>
        <div>Prodotti acquistati :  {{ totalQuantity(order) }}</div>
        <div>Totale ordine : {{ order.total }}</div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { orders } from '../../db.json';
  
  const totalQuantity = computed(() => {
    return (order) => {
      let total = 0;
      for (const product of order.products) {
        total += product.quantity;
      }
      return total;
    };
  });
  </script>
  