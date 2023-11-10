import { defineStore } from 'pinia';

export const useStore = defineStore('myStoreId', {
    state: () => ({
        cart: [], 
    }),

    actions: {
        addToCart(item) {
            this.cart.push(item);
        },

        removeFromCart(item) {
            const index = this.cart.findIndex(i => i.id === item.id);
            if (index !== -1) {
                this.cart.splice(index, 1);
            }
        },
    },
});
