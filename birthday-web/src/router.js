import { createRouter, createWebHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Letter from './pages/Letter.vue'
import Gift from './pages/Gift.vue'
import Gallery from './pages/Gallery.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/letter', component: Letter },
  { path: '/gift', component: Gift },
  { path: '/gallery', component: Gallery },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
