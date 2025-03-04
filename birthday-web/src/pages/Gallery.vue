<template>
  <div class="gallery">
    <h1 class="gallery-title">📸문갬과의 추억📸</h1>

    <!-- 사진 -->
    <div class="gallery-photos">
      <img v-for="(photo, idx) in photos" :key="idx" :src="photo" class="gallery-photo" />
    </div>

    <!-- 유튜브 영상 추가 -->
    <div class="youtube-container">
      <h2>🎥 특별 영상</h2>
      <iframe
        width="100%"
        height="400"
        src="https://www.youtube.com/embed/dfWhFGfzlm8?start=1756"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>

    <!-- 촬영 -->
    <div class="photobooth">
      <h2>🎞️ 포토 부스</h2>
      <video ref="video" autoplay playsinline></video>
      <button class="shoot-btn" @click="takePhoto">📸 촬영</button>
      <canvas ref="canvas"></canvas>

      <!-- 찍은 사진 -->
      <div v-if="capturedImage" class="polaroid">
        <img :src="capturedImage" class="captured-photo" />
        <div class="polaroid-text">
          2025.03.04<br />
          이문경 생일 기념🎂
        </div>
      </div>
    </div>
  </div>
</template>


<script setup>
  import { onMounted, ref } from 'vue'
  import Webcam from 'webcam-easy'
  import confetti from 'canvas-confetti'

  const photos = [
    '/gallery/sticker1.png',
    '/gallery/sticker2.png',
    '/gallery/team_sticker1.png',
    '/gallery/team_sticker2.png',
    '/gallery/team_sticker3.png'
  ]

  const video = ref()
  const canvas = ref()
  const capturedImage = ref(null)
  let webcam

  onMounted(() => {
    webcam = new Webcam(video.value, 'user', canvas.value)
    webcam.start()
  })

  const takePhoto = () => {
    capturedImage.value = webcam.snap()
    launchConfetti() // ✅ 촬영 후 콘페티 발사
  }

  const launchConfetti = () => {
  confetti({
    particleCount: 200,
    spread: 90,
    origin: { y: 0.6 },
  })
}
</script>

<style scoped>
.gallery {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  gap: 50px;
}

.gallery-title {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 20px;
  font-family: 'Pretendard', sans-serif;
}

.gallery-photos {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.gallery-photo {
  width: 350px;
  height: auto;
}

.photobooth {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  max-width: 800px;
}

video {
  width: 100%;
  max-width: 700px;
  border-radius: 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
}

canvas {
  display: none;
}

.shoot-btn {
  padding: 12px 24px;
  font-size: 1.3rem;
  font-family: 'Pretendard', sans-serif;
  border: none;
  border-radius: 10px;
  background-color: #ffca28;
  cursor: pointer;
}

.captured-photo {
  width: 700px;
  margin-top: 10px;
}

h3 {
  margin-top: 30px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  font-family: 'Pretendard', sans-serif;
}


/* 폴라로이드 프레임 */
.polaroid {
  width: 100%;
  max-width: 700px; /* ✅ video 크기와 동일하게 */
  background-color: white;
  padding: 20px 20px 60px; /* 하단에 문구 공간 확보 */
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* 사진 비율 */
.captured-photo {
  width: 100%;
  height: auto;
  border-radius: 10px;
  object-fit: cover;
}

/* 문구 */
.polaroid-text {
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
  font-family: 'Pretendard', sans-serif;
  color: #333;
}

.youtube-container {
  margin: 50px 0;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.youtube-container iframe {
  width: 100%;
  height: 450px;
  border-radius: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

</style>
