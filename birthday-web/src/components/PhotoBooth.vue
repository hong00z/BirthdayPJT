<template>
  <div>
    <video ref="video" autoplay playsinline></video>
    <button @click="takePhoto">📸 촬영</button>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Webcam from 'webcam-easy'

const video = ref()
const canvas = ref()
let webcam

onMounted(() => {
  webcam = new Webcam(video.value, 'user', canvas.value)
  webcam.start()
})

const takePhoto = () => {
  const picture = webcam.snap()
  const img = new Image()
  img.src = picture
  document.body.appendChild(img)
}
</script>

<style scoped>
video {
  width: 100%;
  border-radius: 20px;
}
canvas, img {
  width: 300px;
  margin-top: 20px;
  border: 10px solid white;
  box-shadow: 0 4px 10px rgba(0,0,0,0.3);
}
</style>
