import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '~/views/Home'
import About from '~/views/About'
import NotFound from '~/views/NotFound'

export default createRouter({
  history: createWebHashHistory(),
  scrollBehavior(){
    return { top:0 }
  },
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about',
      component: About
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})
