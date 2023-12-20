<template>
    <div>
      <div class="relative">
        <!-- ... Il resto del tuo template ... -->
      </div>
  
      <div v-for="product in filteredProducts" :key="product.id">
        <div class="capitalize font-bold">{{ product.name }}</div>
        <div>Prezzo: {{ product.price }}</div>
        <button @click="addToCart(product)" class="h-10 px-6 font-semibold rounded-md bg-emerald-500 hover:bg-emerald-600 text-white">
          Aggiungi al carrello
        </button>
      </div>
  
      <Toast ref="toast" />
    </div>
  </template>
  
  <script setup>
  import { ref, computed, onMounted } from 'vue';
  import { useUserCartStore } from '../stores/userCart.store';
  import { Products } from "@/api/index.js";
  import { useToast } from 'primevue/usetoast';
  
  const searchedValue = ref(null);
  const store = useUserCartStore();
  const products = ref([]);
  const toast = useToast();
  
  onMounted(async () => {
    try {
      products.value = await Products.getProducts();
    } catch (error) {
      console.error(error);
    } finally {
      console.log('Fine caricamento');
    }
  });
  
  const filteredProducts = computed(() => {
    const searchTerm = searchedValue.value ? searchedValue.value.toLowerCase() : '';
    return products.value.filter(product => product.name.toLowerCase().includes(searchTerm));
  });
  
  const addToCart = (product) => {
    store.addToCart(product);
    showToast('info', `Aggiunto ${product.name} al carrello`);
    console.log(toast.add);
  };
  
  const showToast = (severity, detail) => {
    toast.add({
      severity: severity,
      summary: 'Notifica',
      detail: detail,
      life: 3000
    });
  };
  </script>
  
  <style lang="scss"></style>
  