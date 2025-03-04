<template>
  <div class="home">
    <div class="content">
      <img src="/gallery/team.gif" alt="메인 이미지" class="main-gif" />
    </div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, onBeforeUnmount, ref } from 'vue'
import confetti from 'canvas-confetti'

const canvas = ref()
let intervalId

const launchConfetti = () => {
  const myConfetti = confetti.create(canvas.value, { resize: true })
  myConfetti({
    particleCount: 150,
    spread: 100,
    origin: { x: 0, y: 1 },
  })
  myConfetti({
    particleCount: 150,
    spread: 100,
    origin: { x: 1, y: 1 },
  })
  myConfetti({
    particleCount: 150,
    spread: 100,
    origin: { x: 0.5, y: 1 },
  })
}

onMounted(() => {
  launchConfetti() // ✅ 진입 후 바로 실행
  intervalId = setInterval(launchConfetti, 3000) // ✅ 3초마다 반복 실행
})

onBeforeUnmount(() => {
  clearInterval(intervalId) // ✅ 페이지 벗어날 때 정리
})
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 70px;
  position: relative;
}
.main-gif {
  width: 500px;
  height: auto;
  border-radius: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
/* ✅ 전체 화면을 덮는 canvas */
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
  z-index: 9999; /* ✅ 다른 요소 위에 있도록 */
}
</style>
