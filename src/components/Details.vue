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
      <button @click="addCard.addToCard(getSingleProduct.product)">Add To Card</button>
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
import cartItem from "../store/cartStore";

const route = useRoute();
const getSingleProduct = productStore();
const addCard = cartItem()
onMounted(() => {
  getSingleProduct.fetchProductById(route.params.id);
});
</script>

<style>
</style>