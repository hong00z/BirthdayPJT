<!--편지 목록-->

<template>
    <div>
      <LetterCard
        v-for="letter in letters"
        :key="letter.id"
        :id="letter.id"
        :nickname="letter.nickname"
        :content="letter.content"
      />
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { supabase } from '@/supabase'
  import LetterCard from '@/components/LetterCard.vue'
  
  const letters = ref([])
  
  onMounted(async () => {
    const { data, error } = await supabase.from('letters').select('*').order('created_at', { ascending: false })
    if (error) {
      alert('불러오기 실패')
    } else {
      letters.value = data
    }
  })
  </script>
  