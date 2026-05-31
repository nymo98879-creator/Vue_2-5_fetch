<template>
  <main>
    <h1>Product details</h1>
    <div v-if="getSingleProduct.loading">
      <ul>
        <li>{{ getSingleProduct.product.id }}</li>
        <li>{{ getSingleProduct.product.title }}</li>
        <li>{{ getSingleProduct.product.price }}</li>
        <img :src="`${getSingleProduct.product.image}`" alt="" width="100" />
      </ul>
    </div>
    <div v-else>
        <p>Product Loading ....</p>
    </div>
    <router-link to="/product">Back</router-link>
  </main>
</template>

<script setup>
import { onMounted } from "vue";
import { useRoute } from "vue-router";
import productStore from "../store/productStore";

const route = useRoute();
const getSingleProduct = productStore();
onMounted(() => {
  getSingleProduct.fetchProductById(route.params.id);
});
</script>

<style>
</style>