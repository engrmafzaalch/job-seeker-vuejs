<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <Header />
    <router-view />
    <!-- <Footer /> -->
  </div>
</template>

<script>

import Header from "./components/Job-seeker/Header.vue";
import Footer from "./components/Job-seeker/Jobs/Footer.vue";
import { store } from './store/store'

export default {
  name: "App",
  store,
  components: { Header, Footer },
};

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  /* margin-top: 60px; */
}
.ant-form-item-control-wrapper{
    display: inline-block;
    vertical-align: top;
    width: 100%!important;
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
