<template>
  <header class="navbar">
    <HomeButton />
    <p class="title">🎉 문갬의 생일을 축하합니다 🎉</p>
    <nav class="menu">
      <button @click="goTo('/letter')">💌 편지</button>
      <button @click="goTo('/gift')">🎁 선물</button>
      <button @click="goTo('/gallery')">📸 갤러리</button>
    </nav>
  </header>
</template>

<script setup>
import { useRouter } from 'vue-router'
import HomeButton from '@/components/HomeButton.vue'

const router = useRouter()

const goTo = (path) => {
  router.push(path)
}
</script>

<style scoped>
.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 30px;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  background-color: #f7fbff;
  border-bottom: 1px solid #ddd;
}
.title {
  font-size: 1.9rem;
  font-weight: bold;
}
.menu {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}
button {
  background: none;
  border: none;
  font-family: 'Pretendard', sans-serif;
  font-weight: 600;
  font-size: 1.7rem;
  cursor: pointer;
  padding: 8px 60px;
  border-radius: 8px;
  transition: background-color 0.2s;
}
button:hover {
  background-color: #ffeaea;
}
</style>
