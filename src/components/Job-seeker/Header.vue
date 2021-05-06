<template>
  <nav class="background-header" ref="nav">
    <div class="container-fluid" style="margin-top: '0px'">
      <div class="header">

        <div class="flex-x">
          <a href="#default" class="logo">
            <img src="../../assets/Frame 1376 1.png" />
          </a>
        </div>

        <div class="header-right" ref="navLinks">
          <router-link to="/">Home</router-link>
          <!-- <a class="active" href="#home">Home</a> -->
          <router-link to="jobs">Jobs</router-link>
          <router-link to="MyApplications">My application</router-link>
          <router-link to="my-account">My Account</router-link>
          <a class="bell-icon-header" href="#my-account"
            ><i class="fas fa-bell"></i></a>
          <a class="logout-button" href="#">Logout</a>
        </div>

        <div class="burger" @click="navCollapse()" ref="burger" :class="{nav_state:'toggle'}">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
        </div>

      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Header",
  props: ["isLogin"],
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      nav_state:false
    };
  },
  methods:{
    changeRoute(){

    },
    navCollapse(){
      
      if(!this.nav_state){
        // this.$refs.nav.style.height='250px';
        this.$refs.navLinks.style.transform = 'translate(-24px,68%)';
      }else{
        this.$refs.navLinks.style.transform = 'translate(-24px,-100%)';
        // this.$refs.nav.style.height='85px';
      }
      this.$refs.burger.classList.toggle('toggle');
      this.nav_state=!this.nav_state;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: "#FAFAFA";
  padding: 10px 10px;
}
.background-header {
  background: #fafafa;
}
.header a {
  float: left;
  color: black;
  text-align: center;
  padding: 5px 39px;
  text-decoration: none;
  font-size: 15px;
  line-height: 25px;
  border-radius: 5px;
}
.headera.logo {
  font-size: 25px;
  font-weight: bold;
}
.flex-x {
  flex: auto;
}
.header a:hover {
  /* background-color: grey; */
  color: #0385f3;
}
.bell-icon-header {
  color: #0385f3;
}
.logout-button {
  text-align: center;
  background-color: #ff4c68;
  color: #ffffff !important;
  height: 40px !important;
  font-size: 14px !important;
  font-weight: 600 !important;
}
.headera.active {
  background-color: green;
  color: white;
}
.header-right {
  float: right;
}
@media screen and (max-width: 500px) {
  .header a {
    float: none;
    display: block;
    text-align: left;
  }
  .header-right {
    float: none;
  }
  nav .logo{
    padding: 5px 35px;
    justify-content: flex-start;
    flex-direction: row;
  }
}
@import "~bootstrap/dist/css/bootstrap.css";




















.nav-links{
    flex:1 1 65%;
    height:100%;
    display:flex;
    justify-content:flex-start;
    align-items:center;
    margin:0px;
    padding:10px 0px;

}

.nav-links li{
    list-style:none;
    margin-right: 17px;
}
.nav-links li a{
    text-decoration:none;
    font-weight:600;   
    color:white;
    font-size:17px;
    transform:uppercase;
}
.email h5{
    font-size: medium;
    font-family:"Open Sans", sans-serif;
    font-weight: 600;
}
.burger{
    display:none;
    cursor:pointer;
    justify-content: center;
    flex-direction:column;
    align-items: center;
    flex:1 1 5%;
}
.burger div{
    height:3px;
    background-color:#3F4B6B;
    width: 32px;
    margin: 4px 3px;
    transition:all 0.3s ease;
}

@media screen and (max-width:768px){
    nav{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        z-index:4;
        height: 85px;
        width:100%;
        transition: height 0.5s ease-in;
    }
    .burger{
        cursor:pointer;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .header-right{
        position:absolute;
        transform: translate(-24px,-100%);
        padding: 9px 0px;
        width:100%;
        z-index: 1000000000000;
        border: 1px solid #f0f1f3;
        background-color:#FAFAFA;
        display: flex;
        justify-content:flex-start;
        align-items:flex-start;
        flex-direction:column;
        transition: transform 0.3s ease-in;
    }

    
    .nav-links li{
        opacity:0;
    }
    .nav-links li a{
        font-size:16.5px;
    }
    .header-right a{
      margin-left:23px;
    }
    .logout-button{
      margin-left: 55px!important;
    }
}
.nav-active{
    font-size: medium;
}

@keyframes navLinkFade{
    0% {
        opacity: 0;
    }

    1% {
        opacity: 0;

    }

    100% {
        opacity: 1;
    }
}
.toggle .line1{
    transform:rotate(-45deg) translate(-5px,10px);
}
.toggle .line2{
    opacity:0;
}
.toggle .line3{
    transform:rotate(45deg) translate(-5px,-10px);
}
</style>
