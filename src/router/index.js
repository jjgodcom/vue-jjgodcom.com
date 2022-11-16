import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '~/views/Home'
import About from '~/views/About'
import Work from '~/views/Work'
import Portfolio from '~/views/Portfolio'
import Note from '~/views/Note'
import NotFound from '~/views/NotFound'
import Test from '~/views/Test'

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
      path: '/work',
      component: Work
    },
    {
      path: '/portfolio',
      component: Portfolio
    },
    {
      path: '/note',
      component: Note
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    },
    {
      path: '/test',
      component: Test
    }
  ]
})
