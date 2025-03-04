<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
</script>

<style>
body {
  margin: 0;
  padding: 0;
  background: linear-gradient(135deg, #b3e5fc, #e1f5fe, #f3e5f5);
  font-family: 'Pretendard', sans-serif;
  min-height: 100vh;
}
#app {
  max-width: 1400px;
  margin: 0 auto;
  padding: 20px;
}
</style>

