<template>
  <div class="cart">
    <cart/>
  </div>
</template>
<script setup>
import Cart from '../components/Cart.vue';
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
