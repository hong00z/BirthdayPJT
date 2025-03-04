<!--편지 작성 폼-->

<template>
    <div>
      <input v-model="nickname" placeholder="닉네임" />
      <input v-model="password" type="password" placeholder="비밀번호" />
      <textarea v-model="content" placeholder="편지 내용"></textarea>
      <button @click="submitLetter">작성하기</button>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { supabase } from '@/supabase'
  
  const nickname = ref('')
  const password = ref('')
  const content = ref('')
  
  const submitLetter = async () => {
    const { error } = await supabase.from('letters').insert([
      { nickname: nickname.value, password: password.value, content: content.value }
    ])
    if (error) {
      alert('작성 실패')
    } else {
      alert('작성 완료!')
      window.location.reload()
    }
  }
  </script>
  