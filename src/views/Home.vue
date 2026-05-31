<template>
  <main>
    <h1>Home Page</h1>
    <ul v-for="product in getProduct.products.slice(0, 2)" :key="product.id">
      <router-link to="/product">
        <img :src="`${product.image}`" alt="" width="100" />
      </router-link>
    </ul>
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import productStore from "../store/productStore";

const getProduct = productStore();
onMounted(()=>{
    getProduct.fetchProduct();
})
</script>

<style>
</style>