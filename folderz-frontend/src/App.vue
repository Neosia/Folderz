<template>
  <div id="app" class="container-fluid">   
    <div class="row appContainer"> 
      <NavBar class="navigationBar"></NavBar>
      <router-view class="mainView"/>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import NavBar from "./components/nav/NavBar.vue";
import BootstrapVue from "bootstrap-vue";
import VModal from 'vue-js-modal';
import VueYouTubeEmbed from 'vue-youtube-embed'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.use(VueYouTubeEmbed)
Vue.use(BootstrapVue);
Vue.use(VModal);

export default {  
  components: {
    NavBar
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
    height: 100%;    
}

.navigationBar{
  width: 5%;
}

.mainView{
  width: 95%;
}


</style>
