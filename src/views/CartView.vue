<template>
  <div class="cart">
    <cart-store/>
  </div>
</template>
<script setup>
import CartStore from '../components/CartStore.vue';
</script>
<style>
@media (min-width: 1024px) {
  .cart {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
