<template>
  <button @click="goHome">
    <img src="/emoji-face.jpg" alt="홈 이모지" />
  </button>
</template>

<script setup>
import { useRouter } from 'vue-router'
const router = useRouter()
const goHome = () => router.push('/')
</script>

<style scoped>
button img {
  width: 150px;
}
</style>
