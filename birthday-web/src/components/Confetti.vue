<template>
  <canvas ref="canvas"></canvas>
</template>

<script setup>
import confetti from 'canvas-confetti'
import { onMounted, ref } from 'vue'

const canvas = ref()

const launchConfetti = () => {
  const myConfetti = confetti.create(canvas.value, { resize: true })
  myConfetti({
    particleCount: 200,
    spread: 100,
    origin: { x: 0, y: 1 },
  })
  myConfetti({
    particleCount: 200,
    spread: 100,
    origin: { x: 1, y: 1 },
  })
  myConfetti({
    particleCount: 0,
    spread: 100,
    origin: { x: 0.5, y: 1 },
  })
}

onMounted(() => {
  launchConfetti(),

  // 스크롤 맨 아래 도달 시에도 실행 유지
  window.addEventListener('scroll', () => {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      launchConfetti()
    }
  })
})
</script>

<style scoped>
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}
</style>
