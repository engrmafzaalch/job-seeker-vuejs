<template>
<div class="container">
  <MyAccount/>
  <div class="row">
    <div class="col-12 card">
      <div class="card-body">
        <div v-for="resumeItem in fileNames" >
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
                  <span class="text-black-50" >{{resumeItem}}</span>
                </div>
              </div>
              <div class="col-2 d-none"  @click="deleteresume(resumeItem)" >
                <a href="#">
                  <img class="float-right mt-1" src="../../../../assets/trash.png" height="20" width="auto">
                </a>
              </div>
              <div class="col-2" @click=" downloadresume(resumeItem)">
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
    resume:{},
      fileNames:[]
    };
  },
  beforeCreate() {
    let loader = this.$loading.show({
      loader: 'dots'
    })
    setTimeout(() => loader.hide(), 500)
    axios.get(`${process.env.VUE_ROOT_URL}/certificate/${this.$route.params.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        this.resume = res.data
        if(this.resume.certificates.length!==0){
          var temp =[];
          var fileNam = [];
          this.resume.certificates.map(item=>{
            temp = item.split('/');
            fileNam.push(temp[3]);
          })
          this.fileNames = fileNam;
        }
      })
      .catch((error) => {
        setTimeout(() => loader.hide(), 500)
        console.error(error)
      })
  },
  methods: {
    downloadresume(resumeItem){
           axios({
             url:`${process.env.VUE_ROOT_URL}/certificate/${this.$route.params.id}/${resumeItem}`,
             method:'get',
             responseType:'blob',
             headers: {
               'Authorization': `Bearer ${localStorage.getItem('token')}`
             }
           })
      .then((res)=>{
        const url = window.URL.createObjectURL(new Blob([res.data]));
        const link = document.createElement('a');
        link.href = url;
        link.setAttribute('download', resumeItem);
        document.body.appendChild(link);
        link.click();
      })
    },
    deleteresume(resumeItem){
      axios({
        url:`${process.env.VUE_ROOT_URL}/certificate/${this.$route.params.id}/${resumeItem}`,
        method:'delete',
        responseType:'blob',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res)=>{
          const url = window.URL.createObjectURL(new Blob([res.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('delete', resumeItem);
          document.body.appendChild(link);
          alert(resumeItem);
          link.click();
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
