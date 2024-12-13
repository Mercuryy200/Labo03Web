import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cart: [],
  }),
  getters: {
    cartItemCount: (state) => state.cart.length,
    cartTotalPrice: (state) => state.cart.reduce((total, item) => total + item.price * item.quantity, 0),
  },
  actions: {
    addToCart(product) {
      const existingItem = this.cart.find((item) => item.id === product.id);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.cart.push({ ...product, quantity: 1 });
      }
    },
    removeFromCart(productId) {
      this.cart = this.cart.filter((item) => item.id !== productId);
    },
    clearCart() {
      this.cart = [];
    },
  },
});
