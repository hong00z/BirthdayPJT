<!--편지 1개 카드-->

<template>
  <div class="letter-card" @click="openLetter">
    <img src="/letter.gif" alt="편지봉투" />
    <p>{{ nickname }}</p>
  </div>
</template>

<script setup>
import { supabase } from '@/supabase'
import { defineProps } from 'vue'

const props = defineProps({
  id: Number,
  nickname: String,
  content: String
})
const openLetter = () => {
  const pw = prompt('비밀번호를 입력해주세요.')
  if (!pw) return

  checkPasswordAndShow(pw)
}

const checkPasswordAndShow = async (pw) => {
  const { data, error } = await supabase
    .from('letters')
    .select('password')
    .eq('id', props.id)
    .single()

  if (error || !data) {
    alert('편지를 불러올 수 없습니다.')
    return
  }

  if (data.password === pw) {
    const action = confirm(`내용: ${props.content}\n\n수정하려면 확인, 삭제하려면 취소를 눌러주세요.`)
    if (action) editLetter()
    else deleteLetter()
  } else {
    alert('비밀번호가 틀렸습니다.')
  }
}

const editLetter = async () => {
  const newContent = prompt('새로운 내용을 입력해주세요.', props.content)
  if (!newContent) return

  const { error } = await supabase
    .from('letters')
    .update({ content: newContent })
    .eq('id', props.id)

  if (error) alert('수정 실패')
  else alert('수정 완료! 새로고침 해주세요.')
}

const deleteLetter = async () => {
  const { error } = await supabase
    .from('letters')
    .delete()
    .eq('id', props.id)

  if (error) alert('삭제 실패')
  else alert('삭제 완료! 새로고침 해주세요.')
}
</script>

<style scoped>
.letter-card {
  width: 150px;
  cursor: pointer;
}
</style>
