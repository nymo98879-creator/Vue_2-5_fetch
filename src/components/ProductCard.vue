<template>
  <main>
    <div v-if="getProducts.loading">
      <ul v-for="product in getProducts.products.slice(0, 5)" :key="product.id">
        <img :src="`${product.image}`" alt="" width="100" />
        <router-link :to="`/details/${product.id}`">Views</router-link>
      </ul>
    </div>
    <div v-else>
        <p>Product Loading ....</p>
    </div>
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import productStore from "../store/productStore";

const getProducts = productStore();

onMounted(() => {
  getProducts.fetchProduct();
});
</script>

<style>
</style>