<template>
  <div class="card" @click.stop="$emit('click')">
    <img :src="image" alt="선물 이미지" />
    <div class="card-name">{{ name }}</div>
  </div>
</template>

<script setup>
defineProps(['name', 'image'])
</script>

<style scoped>
.card {
  position: relative;
  width: 400px;
  height: 500px;
  border-radius: 15px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.2s;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}
.card:hover {
  transform: scale(1.05);
}
.card img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-name {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  padding: 10px;
  text-align: center;
  font-size: 1.5rem;
  opacity: 0;
  transition: opacity 0.2s;
}
.card:hover .card-name {
  opacity: 1;
}
</style>
