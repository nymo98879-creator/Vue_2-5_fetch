<script setup>
import Footer from "./components/Footer.vue";
import Nav from "./components/Nav.vue";
</script>

<template>
  <main>
    <Nav />
    <router-view />
    <Footer />
  </main>
</template>

