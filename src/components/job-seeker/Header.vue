    <template id="navBar">
<div class="">

  <nav v-if="users.id == null" class="navbar navbar-expand-lg navbar-light background-header header" ref="navbar">
    <a class="navbar-brand " href="">
      <img src="../../assets/Frame 1376 1.png" />
    </a>
    <button class="navbar-toggler" type="button"
            @click.stop="toggleNavbar()">
      <span class="navbar-toggler-icon"></span>
    </button>
<!--    <div :class="collapseClasses" id="navbarSupportedContent" :style="collapseStyle" ref="mynav">-->
<!--      <ul class="navbar-nav ml-auto">-->
<!--        <li class="nav-item active">-->
<!--          <a class="nav-link" > <router-link to="/">Home</router-link></a>-->
<!--        </li>-->
<!--        <li class="nav-item">-->
<!--          <a class="nav-link" > <router-link to="jobs">Jobs</router-link></a>-->
<!--        </li>-->

<!--&lt;!&ndash;        <li class="nav-item">&ndash;&gt;-->
<!--&lt;!&ndash;          <a class="nav-link disabled">  <router-link to="MyApplications">My application</router-link></a>&ndash;&gt;-->
<!--&lt;!&ndash;        </li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li class="nav-item">&ndash;&gt;-->
<!--&lt;!&ndash;          <a class="nav-link " >   <router-link to="my-account">My Account</router-link></a>&ndash;&gt;-->
<!--&lt;!&ndash;        </li>&ndash;&gt;-->
<!--        <li class="nav-item mr-4 mt-1">-->
<!--          <a class="bell-icon-header nav-link " href="#my-account"-->
<!--          ><i class="fas fa-bell bell-icon-header"></i></a>-->
<!--        </li>-->
<!--        <li>-->
<!--          <router-link to="/job-seeker/Signup">-->
<!--            <a  class="Signup-button">SignUp</a>-->
<!--          </router-link>-->
<!--&lt;!&ndash;        </li>&ndash;&gt;-->
<!--&lt;!&ndash;        <li class="nav-item">&ndash;&gt;-->
<!--&lt;!&ndash;          <router-link to="/job-seeker/login" >&ndash;&gt;-->
<!--&lt;!&ndash;            <a class="logout-button" @click="getData()">Logout</a>&ndash;&gt;-->
<!--&lt;!&ndash;          </router-link>&ndash;&gt;-->
<!--        </li>-->
<!--      </ul>-->

<!--    </div>-->
  </nav>

    <nav v-else class="navbar navbar-expand-lg navbar-light background-header header" ref="navbar">
         <a class="navbar-brand " >
           <router-link to="/">
            <img src="../../assets/Frame 1376 1.png" />
           </router-link>
         </a>
        <button class="navbar-toggler" type="button"
            @click.stop="toggleNavbar()">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div :class="collapseClasses" id="navbarSupportedContent" :style="collapseStyle" ref="mynav">
            <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                    <a class="nav-link" > <router-link to="/admin/job-seeker">Job Seekers</router-link></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link"> <router-link to="#">Recruiters</router-link></a>
                </li>

                <li class="nav-item">
                    <a class="nav-link disabled">  <router-link to="#">Posting</router-link></a>
                </li>
              <li class="nav-item">
                <a class="nav-link disabled">  <router-link to="/">Payments</router-link></a>
              </li>
                 <li class="nav-item">
                    <a class="nav-link " >  <router-link to="my-account">My Account</router-link></a>
                </li>
                 <li class="nav-item mr-4 mt-1">
                 <a class="bell-icon-header nav-link " href="#"><i class="fas fa-bell bell-icon-header"></i></a>
                </li>
<!--             <li>-->
<!--                <router-link to="/job-seeker/Signup">-->
<!--                <a  class="Signup-button">SignUp</a>-->
<!--                </router-link>-->
<!--              </li>-->
                  <li class="nav-item">
                <a class="logout-button" @click="getData()">Logout</a>
                </li>
            </ul>

        </div>
    </nav>
    </div>
</template>

<script>
export default {
  name: "Header",
  props: ["isLogin"],
 data() {
    return {
      users: [],
        collapseClasses: {
            'navbar-collapse':true,
            collapse:true,
            collapsing:false,
            show:false //initial state
        },
        collapseStyle: {}
    }

     return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  mounted(){
    // const user = JSON.parse(localStorage.getItem("user"));
    // console.log(user);

    if (localStorage.getItem("user")){
      this.users = JSON.parse(localStorage.getItem("user"))
      // alert(this.users);

    }
  },
  methods: {

    // getData() {
    //
    //   if (localStorage.getItem("user")){
    //     this.user = alert(JSON.parse(localStorage.getItem("user")))
    //   }
    //   localStorage.removeItem('token');
    //   localStorage.removeItem('user');
    // },
    getData(){
      // window.location.reload();
      localStorage.removeItem('token');
      localStorage.removeItem('user');
      this.$router.push("/job-seeker/login");
      window.location.reload();

    },

    toggleNavbar() {
        let curr = this.collapseClasses
        this.collapseClasses = {
            ...curr,
            ...{
                collapsing:true,
                collapse:false,
                show:false
            }
        }
        setTimeout(()=>{
            let navHeight = this.$refs.mynav.clientHeight
            console.log(navHeight)
            this.collapseStyle = {height:navHeight+'px'}
            this.collapseClasses = {
                ...curr,
                ...{
                    collapsing:false,
                    collapse:true,
                    show:!curr.show
                }
            }
        },340)
    },
  }

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  align-items: center;
  /*overflow: hidden;*/
  z-index: 1;
  background-color: #FAFAFA;
  padding: 10px 10px;
}
.background-header {
  background: #fafafa;
}
.navbar-nav {

}
.navbar-nav li a {
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
.Signup-button {
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
@media only screen and (min-width: 320px) and (max-width: 990px) {
  .navbar-nav {
  background-color:white;
  color:black;
  position: absolute;
  left:0;
  right:0;

  }
  .logout-button{
    margin-left:60px;
    margin-bottom: 20px;
  }
  .bell-icon-header{
     margin-left:20px;
  }
}
@import "~bootstrap/dist/css/bootstrap.css";
</style>
