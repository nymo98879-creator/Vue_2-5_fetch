<template>
  <main>
    <nav>
        <router-link to="/">Home</router-link> | 
        <router-link to="/product">Product</router-link> | 
        <router-link to="/about">About</router-link> | 
        <router-link to="/contact">Contact</router-link> |
        <router-link to="/cart">Cart ({{count.countCard}})</router-link> 
    </nav>
  </main>
</template>

<script setup>
import cartItem from '../store/cartStore';

  const count = cartItem()
</script>

<style>

</style>