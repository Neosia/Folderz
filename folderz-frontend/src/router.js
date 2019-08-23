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
      name: 'playlist',
      component: () => import('./views/Playlist.vue')
    },
    {
      path: '/songs',
      name: 'songs',
      component: () => import('./views/Song/Songs.vue')
    },
    {
      path: '/songs/addSong',
      name: 'newSong',
      params: true,
      component: () => import('./views/Song/AddSong.vue')
    },
    {
      path: '/songs/searchSong',
      name: 'searchSong',
      component: () => import('./views/Song/SearchSong.vue')
    },
    {
      path: '/songs/allSongs',
      name: 'allSongs',
      component: () => import('./views/Song/SongList.vue')
    }
  ]
})
