<template>
  <div id="app" class="container-fluid">   
    <div class="row appContainer" :style="'height : ' + this.mainViewH + '%'"> 
      <NavBar class="navigationBar"></NavBar>
      <router-view class="mainView" @playSong="playSong"/>      
    </div>
    <div class="row player-container">
      <Player ref="mainPlayer"/>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import NavBar from "./components/nav/NavBar.vue";
import Player from "./components/player/Player.vue";
import BootstrapVue from "bootstrap-vue";
import VModal from 'vue-js-modal';
import VueYouTubeEmbed from 'vue-youtube-embed'
import VueCookie from 'vue-cookie';

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueYouTubeEmbed)
Vue.use(BootstrapVue);
Vue.use(VModal);
Vue.use(VueCookie);

export default {  
  components: {
    NavBar, 
    Player
  },
  data() {
    return {
      mainViewH : '100'
    }
  },
  methods : {
      playSong : function(song){          
          this.mainViewH = '85';
          this.$refs.mainPlayer.initPlayer(song);
      }
  }

};
</script>


<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}

.appContainer {
    padding: 0px !important;   
    height: 100%
}
.player-container {
  padding: 0px;
  height: 15%;
}

.navigationBar{
  width: 5%;
}

.mainView{
  width: 95%;
}


</style>
