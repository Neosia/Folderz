<template>
  <div id="app">
    <NavBar></NavBar>
    <router-view />
  </div>
</template>


<script>
import NavBar from "./components/nav/NavBar.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import Vue from "vue";

Vue.use(BootstrapVue);

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
}

</style>
