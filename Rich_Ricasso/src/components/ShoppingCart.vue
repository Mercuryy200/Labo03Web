<template>
  <v-container>
    <v-row>
      <v-col v-for="product in products" :key="product.id" cols="12" md="4">
        <v-card>
          <v-card-title>{{ product.name }}</v-card-title>
          <v-card-text>\${{ product.price.toFixed(2) }}</v-card-text>
          <v-btn color="primary" @click="addToCart(product)">Add to Cart</v-btn>
        </v-card>
      </v-col>
    </v-row>
    <h3>Your Cart</h3>
    <v-list v-if="cartItems.length > 0">
      <v-list-item v-for="item in cartItems" :key="item.id">
        <v-list-item-title>{{ item.nom }} ({{ item.quantity }})</v-list-item-title>
        <v-list-item-subtitle>\${{ (item.prix * item.quantity).toFixed(2) }}</v-list-item-subtitle>
        <v-btn color="error" @click="removeFromCart(item.id)">Remove</v-btn>
      </v-list-item>
    </v-list>
    <p v-else>Your cart is empty.</p>
    <h4>Total: \${{ cartTotal.toFixed(2) }}</h4>
  </v-container>
</template>

<script>
import { useCartStore } from '@/stores/cart';

export default {
  setup() {
    const cartStore = useCartStore();

    return {
      products,
      cartItems: cartStore.cart,
      cartTotal: cartStore.cartTotalPrice,
      addToCart: cartStore.addToCart,
      removeFromCart: cartStore.removeFromCart,
    };
  },
};
</script>
