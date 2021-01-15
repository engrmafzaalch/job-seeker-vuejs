<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <Header />
    <router-view />
    <Footer />
  </div>
</template>

<script>

import Header from "./components/Job-seeker/Header.vue";
import Footer from "./components/Job-seeker/Jobs/Footer.vue";

export default {
  name: "App",
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
@import "~bootstrap/dist/css/bootstrap.css";

a:hover{
  text-decoration: none;
}

li{
  list-style: none;
  padding: 0;
  margin: 0;
}
ul{
  padding: 0;
  margin: 0;
}
p{
  padding: 0;
  margin: 0;
}

h1,h2,h3,h4,h5,h6{
  padding: 0;
  margin: 0;
}
</style>
