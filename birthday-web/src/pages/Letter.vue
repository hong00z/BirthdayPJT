<template>
  <div class="letter-page">
    <h1>💌 문갬에게 보내는 편지 💌</h1>
    <LetterWrite />
    <LetterList />
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue'
import LetterWrite from '@/components/LetterWrite.vue'
import LetterList from '@/components/LetterList.vue'
</script>

<style scoped>
.letter-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  font-family: 'Pretendard', sans-serif;
}
h1 {
  font-size: 1.8rem;
  margin-bottom: 10px;
}
</style>
