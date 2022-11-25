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
      name:'',
      path: '/',
      component: Home
    },
    {
      name:'',
      path: '/about',
      component: About
    },
    {
      name:'',
      path: '/work',
      component: Work
    },
    {
      name:'portfolio',
      path: '/portfolio/:title',
      component: Portfolio
    },
    {
      name:'note',
      path: '/note/:title',
      component: Note
    },
    {
      name:'',
      path: '/:notFound(.*)',
      component: NotFound
    },
    {
      name:'',
      path: '/test',
      component: Test
    }
  ]
})
