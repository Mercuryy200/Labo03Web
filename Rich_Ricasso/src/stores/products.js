import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    products: [],
  }),
  getters: {
    totalProducts() {
      return this.products.length;
    },
  },
});