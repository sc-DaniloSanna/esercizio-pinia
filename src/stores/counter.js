import { defineStore } from 'pinia';

export const useStore = defineStore('myStoreId', {
    state: () => ({
        cart: [], 
    }),

    actions: {
        addToCart(product) {
            this.cart.push(product);
        },

        removeFromCart(product) {
            const index = this.cart.findIndex(i => i.id === product.id);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        },
    },
});
