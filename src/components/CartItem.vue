<template>
  <main>
    <h1>Cart Item</h1>
    <ul v-for="item in items.cart" :key="item.id">
      <li>{{ item.id }}</li>
      <li>{{ item.title }}</li>
      <li>{{ item.price }}</li>
      <img :src="`${item.image}`" alt="" width="50" />
      <button @click="items.decreaseQty(item.id)">-</button>

      <span>{{ item.qty }}</span>

      <button @click="items.increaseQty(item.id)">+</button>
    </ul>
    <li>Total : {{ items.countTotal.toFixed(2) }}</li>
  </main>
</template>

<script setup>
import cartItem from "../store/cartStore";

const items = cartItem();
</script>

<style>
</style>