<script>
import { useCartStore } from '@/stores/cart';

export default {
  setup() {
    const cartStore = useCartStore();

    return {
      cartItems: cartStore.cart,
      cartTotal: cartStore.cartTotalPrice,
      addToCart: cartStore.addToCart,
      removeFromCart: cartStore.removeFromCart,
    };
  },
};</script>

<template>
     <v-container v-if="cartItems.length > 0">
      <v-card v-for="item in cartItems" :key="item.id">
        <v-img :src="item.image" width="100px" ></v-img>
        <v-card-title>{{ item.nom }} ({{ item.quantity }})</v-card-title>
        <v-card-subtitle>${{ (item.prix * item.quantity).toFixed(2) }}</v-card-subtitle>
        <v-btn color="error" @click="removeFromCart(item.id)">Remove</v-btn>
      </v-card>
    </v-container>
<p v-else>Your cart is empty.</p>
    <h4>Total: ${{ cartTotal.toFixed(2) }}</h4>
</template>

<style scoped>

</style>
