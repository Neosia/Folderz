import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./views/About.vue')
    },
    {
      path: '/playlist',
      name: 'Playlist',
      component: () => import('./views/Playlist.vue')
    },
    {
      path: '/songs',
      name: 'Songs',
      component: () => import('./views/Songs.vue')
    }
    ,
    {
      path: '/songs/addSong',
      name: 'New song',
      component: () => import('./views/AddSong.vue')
    }
  ]
})
