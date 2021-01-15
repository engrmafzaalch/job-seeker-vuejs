    <template>
  <div class="background-header">
    <div class="container-fluid" style="margin-top: '0px'">
      <div class="header">
        <div class="flex-x">
          <a href="#default" class="logo">
            <img src="../../assets/Frame 1376 1.png" />
          </a>
        </div>
        <div v-if="isLoggedIn" class="header-right">
          <router-link to="/">Home</router-link>
          <!-- <a class="active" href="#home">Home</a> -->
          <router-link to="jobs">Jobs</router-link>
          <a href="#my-application">My application</a>
          <a href="#my-account">My Account</a>
          <a class="bell-icon-header" href="#my-account"
            ><i class="fas fa-bell"></i
          ></a>
          <a class="logout-button" @click="logout" href="#">Logout</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: ["isLogin"],
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      token: this.$store.state.token,
    };
  },
  // computed: {
  //   token() {
  //     console.log("in computed");
  //     return this.$store.state.token;
  //   },
  // },
  computed: {
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  watch: {
    token(newName) {
      this.$store.state.token;
    },
  },
  methods: {
    logout: function () {
      this.$store.dispatch("logout").then(() => {
        this.$router.push("/job-seeker/login");
      });
    },
  },
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
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
