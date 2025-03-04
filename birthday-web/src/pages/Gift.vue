<template>
  <div class="gift-page">
    <h1>{{ roundTitle }}</h1>
    
    <div v-if="currentMatch.length" class="match-container">
      <GiftCard
        v-for="gift in currentMatch"
        :key="gift.id"
        :name="gift.name"
        :image="gift.image"
        @click="selectWinner(gift)"
      />
    </div>

    <div v-else-if="winner" class="winner">
      <h2>🏆 최종 우승 선물: {{ winner.name }}</h2>
      <img :src="winner.image" alt="우승 이미지" class="winner-image" />
    </div>
  </div>
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'
  import GiftCard from '@/components/GiftCard.vue'
  import confetti from 'canvas-confetti'
  
  // 초기 후보들
  const initialGifts = [
    { id: 1, name: '샐러드 볼즈 백팩', image: '/gifts/gift1.jpg' },
    { id: 2, name: '랩 아만다 쇼퍼백', image: '/gifts/gift2.jpg' },
    { id: 3, name: '더AtG 테일러드 보이핏 자켓', image: '/gifts/gift3.jpg' },
    { id: 4, name: 'WV Project 해링턴 자켓 브라운', image: '/gifts/gift4.jpg' },
    { id: 5, name: '오르시떼 엘런핑크 잠옷', image: '/gifts/gift5.jpg' },
    { id: 6, name: '오프아워 실크라인 잠옷', image: '/gifts/gift6.jpg' },
    { id: 7, name: '틸아이다이 워싱 데님 빈티지 블루', image: '/gifts/gift7.jpg' },
    { id: 8, name: '틸아이다이 스트레이트 데님 블루', image: '/gifts/gift8.jpg' },
  ] 
  
  // 상태 관리
  const currentRound = ref([])
  const nextRound = ref([])
  const matchIndex = ref(0)
  const currentMatch = ref([])
  const winner = ref(null)
  const isClickable = ref(true)
  
  const roundTitle = computed(() => {
    if (winner.value) return '👑 우승'
    if (currentRound.value.length === 8) return '🎉 8강'
    if (currentRound.value.length === 4) return '🔥 4강'
    if (currentRound.value.length === 2) return '🏆 결승'
    return ''
  })
  
  // 시작
  onMounted(() => {
    currentRound.value = [...initialGifts]
    startNextMatch()
  })
  
  // 매치 세팅
  const startNextMatch = () => {
    isClickable.value = true
    currentMatch.value = currentRound.value.slice(matchIndex.value, matchIndex.value + 2)
    console.log(`⚔️ ${roundTitle.value} 경기: ${currentMatch.value[0].name} vs ${currentMatch.value[1].name}`)
  }
  
  // 승자 선택
  const selectWinner = (selected) => {
  if (!isClickable.value) return
  isClickable.value = false

  console.log(`✅ ${selected.name} 승리`)
  nextRound.value.push({ ...selected })
  matchIndex.value += 2

  setTimeout(() => {
    if (matchIndex.value >= currentRound.value.length) {
      if (nextRound.value.length === 1) {
        winner.value = nextRound.value[0]
        currentMatch.value = []
        
        console.log(`🏆 우승: ${winner.value.name}`)
        launchConfetti() // ✅ 우승자 확정 시 축포 발사
      } else {
        currentRound.value = [...nextRound.value]
        nextRound.value = []
        matchIndex.value = 0
        console.log(`🔄 다음 라운드 (${roundTitle.value}) 시작! 후보 목록:`, currentRound.value.map(g => g.name))
        startNextMatch()
      }
    } else {
      startNextMatch()
    }
  }, 300) // ✅ 300ms 정도면 딱 부드럽게 넘어감
}

const launchConfetti = () => {
  confetti({
    particleCount: 200,
    spread: 120,
    origin: { x: 0.5, y: 0.5 },
  })
}
</script>

<style scoped>
.gift-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
}
.match-container {
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  justify-content: center;
}
.winner {
  text-align: center;
}
.winner-image {
  width: 400px;
  border-radius: 20px;
  margin-top: 20px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 2rem;
}
</style>
