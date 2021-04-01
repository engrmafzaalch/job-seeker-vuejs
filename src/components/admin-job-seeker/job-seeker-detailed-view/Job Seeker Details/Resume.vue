<template>
<div class="container">
  <MyAccount/>
  <div class="row">
    <div class="col-12 card">
      <div class="card-body">
        <div v-for="resumeItem in resume" >
        <div class="row">
          <div class="col-12" >
            <h3 class="text-primary head_">CV.Pdf</h3>
          </div>
        </div>
        <div class="row pb-2">
          <div class="col-lg-4 border border-light rounded">
            <div class="row pt-2">
              <div class="col-1">
                <a href="#">
                  <img class="mt-1" src="../../../../assets/Group.png" alt="Group" height="24" width="auto">
                </a>
              </div>
              <div class="col-6">
                <div>
                  <span>CV.pdf</span>
                </div>
                <div>
                  <span class="text-black-50" >{{resume.certificates}}</span>
                </div>
              </div>
              <div class="col-2"  @click="deleteresume()">
                <a href="#">
                  <img class="float-right mt-1" src="../../../../assets/trash.png" height="20" width="auto">
                </a>
              </div>
              <div class="col-2" @click=" downloadresume()">
                <a href="#">
                  <img class="mr-2 mt-1" src="../../../../assets/download.png" height="20" width="auto">
                </a>
              </div>
            </div>
          </div>
        </div>
        </div>
        <hr class="py-2">
        <div class="row">
          <div class="col-6"></div>
          <div class="col-md-3">
            <button type="button" class="btn btn-light btn-block float-right" @click="redirectToHome()">Cancel</button>
          </div>
          <div class="col-md-3">
            <button type="button" class="btn btn-primary btn-block">
              Approve Account
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>

import axios from "axios";
export default {
  name: "resume",
  data() {
    return {
    resume:{}
    };
  },
  beforeCreate() {
    let loader = this.$loading.show({
      loader: 'dots'
    })
    setTimeout(() => loader.hide(), 1000)
    axios.get(`${process.env.VUE_ROOT_URL}/certificate/${this.$route.params.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        this.resume = res.data
      })
      .catch((error) => {
        setTimeout(() => loader.hide(), 1000)
        console.error(error)
      })
  },
  methods: {
    downloadresume(){
           axios({
             url:"http://192.241.137.124:8000/static/uploads/1617273469978-louis-hansel-shotsoflouis-8qT_cml7M68-unsplash.jpg",
             method:'get',
             responseType:'blob',
           })
      .then((res)=>{
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', '1617273469978-louis-hansel-shotsoflouis-8qT_cml7M68-unsplash.jpg');
        document.body.appendChild(link);
        alert("Successfully Downloaded");
        link.click();
      })
    },
    deleteresume(){
      axios({
        url:"http://192.241.137.124:8000/static/uploads/" + '1617273469978-louis-hansel-shotsoflouis-8qT_cml7M68-unsplash.jpg',
        method:'DELETE',

      })
        .then((res)=>{
          this.resume.splice('1617273469978-louis-hansel-shotsoflouis-8qT_cml7M68-unsplash.jpg', 1)
          alert("NYSC.pdf");
        })
    },
    redirectToHome() {
      this.$router.push({path: '/admin/job-seeker'});
    },
  },
};
</script>

<style scoped>
.border-light {
  border-radius: 4px;
  background-color: #FAFAFC;
}
.head_ {
  font-size: 24px;
}
.btn-primary {
  font-size: 14px;
}
@media screen and (max-width: 767px){
  .btn-primary {
    margin-top: 10px;
  }
}
</style>
