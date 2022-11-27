import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '~/views/Home'
import About from '~/views/About'
import Work from '~/views/Work'
import Portfolio from '~/views/Portfolio'
import Git from '~/views/note/git/Git'
import Markdown from '~/views/note/git/Markdown'
import VSCode from '~/views/note/other/VSCode'
import Setting from '~/views/note/other/Setting'
import Reference from '~/views/note/reference/Reference'
import Html from '~/views/note/html/Html'
import Css from '~/views/note/css/Css'
import Scss from '~/views/note/css/Scss'
import JavaScript from '~/views/note/java/JavaScript'
import jQuery from '~/views/note/java/jQuery'
import RegEx from '~/views/note/java/RegEx'
import Node from '~/views/note/java/Node'
import Vue from '~/views/note/java/Vue'
import Parcel from '~/views/note/bundler/Parcel'
import WebPack from '~/views/note/bundler/WebPack'
import Oracle from '~/views/note/db/Oracle'
import MySQL from '~/views/note/db/MySQL'
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
      name:'git',
      path: "/Git",
      component: Git
    },
    {
      name:'markdown',
      path: "/Markdown",
      component: Markdown
    },
    {
      name:'vscode',
      path: "/VSCode",
      component: VSCode
    },
    {
      name:'setting',
      path: "/Setting",
      component: Setting
    },
    {
      name:'reference',
      path: "/Reference",
      component: Reference
    },
    {
      name:'html',
      path: "/Html",
      component: Html
    },
    {
      name:'css',
      path: "/Css",
      component: Css
    },
    {
      name:'scss',
      path: "/Scss",
      component: Scss
    },
    {
      name:'javaScript',
      path: "/JavaScript",
      component: JavaScript
    },
    {
      name:'jQuery',
      path: "/jQuery",
      component: jQuery
    },
    {
      name:'regEx',
      path: "/RegEx",
      component: RegEx
    },
    {
      name:'node',
      path: "/Node",
      component: Node
    },
    {
      name:'vue',
      path: "/Vue",
      component: Vue
    },
    {
      name:'parcel',
      path: "/Parcel",
      component: Parcel
    },
    {
      name:'webPack',
      path: "/WebPack",
      component: WebPack
    },
    {
      name:'oracle',
      path: "/Oracle",
      component: Oracle
    },
    {
      name:'mysql',
      path: "/MySQL",
      component: MySQL
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
