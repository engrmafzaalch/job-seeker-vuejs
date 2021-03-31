<template>
<div class="container">
  <div class="row">
    <div class="col-12 card">
      <div class="card-body">

        <div class="mt-3">
        <div class="row">
          <div class="col-md-1">
            <div>
              <img src="../../../../assets/Ellipse 5 (1).png" height="70" width="auto"/>
            </div>
          </div>
          <div class="col-md-4">
            <span class="name_head line_height">{{ profile.name}}</span>
          </div>

          <div class="col-md-2">
            <div>
              <span class="text-black-50">Email Address</span>
            </div>
            <div>
              <span class="years">{{ profile.email }}</span>
            </div>
          </div>
          <div class="col-md-2">
            <div>
              <span class="text-black-50">Contact Information</span>
            </div>
            <div>
              <span class="number">{{ profile.mobileNo}}</span>
            </div>
          </div>
          <div class="col-md-2">
            <div>
              <span class="text-black-50">Location</span>
            </div>
            <div>
              <span class="years">{{ profile.country }}</span>
            </div>
          </div>
        </div>
        </div>

        <div class="mt-4">
          <hr>
        </div>

        <div class="row pt-3">
          <div class="col-12">
            <span class="text-black-50 about">About</span>
          </div>
        </div>
        <div class="row pt-4">
          <div class="col-lg-9">
            <span>
              {{profile.profileSummary}}. <a href="#">READ MORE</a>
            </span>
          </div>
        </div>

        <hr>

        <div class="row py-4">
          <div class="col-md-2">
            <span class="text-black-50">N.Y.S.C Number</span>
          </div>
          <div class="col-md-10">
            <span class="ny">{{profile.nysc}}</span>
          </div>
        </div>

        <hr>

        <div class="row py-4">
          <div class="col-md-2">
            <span class="text-black-50">D.O.B</span>
          </div>
          <div class="col-md-10">
            <span class="ny">{{ profile.dob }}</span>
          </div>
        </div>

        <hr>

        <div class="row pt-4 mb-5">
          <div class="col-md-2">
            <span class="text-black-50">LinkedIn Profile</span>
          </div>
          <div class="col-md-10">
            <a href="#" class="">{{profile.linkedIn}}</a>
          </div>
        </div>
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

import MyAccount from "./MyAccount";
import axios from "axios";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}
export default {
name: "Summery",


  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "name emailAddress city country mobileNumber linkedIn day month year nysc" }),
      profile : {}
    };
  },

  beforeCreate() {
    axios.get(`${process.env.VUE_ROOT_URL}/profile/${this.$route.params.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
    let loader = this.$loading.show({
      loader: 'dots'
    })
      .then((res) => {

        this.profile = res.data
        setTimeout(() => loader.hide(), 500)
        // console.log('alldata12',this.profile)
       // alert("data", JSON.stringify(res.data));
      })
      .catch((error) => {
        setTimeout(() => loader.hide(), 500)
        console.error(error)
      })
  },
  methods: {
    redirectToHome() {
      this.$router.push({path: '/admin/job-seeker'});
    },
  },
};

</script>

<style scoped>
@media screen and (max-width: 350px){
button {
  width: 100%;
}
}
.about {
  font-size: 14px;
}
.ny {
  font-weight: bold;
}
@media screen and (max-width: 300px){
  button {
    width: 100%;
  }
  h2 {
    width: 100%;
    font-size: 24px ;
    text-align: center;
  }
}
.name_head {
  font-weight: bold;
  font-size: 20px;
  line-height: 60px;
}
.years {
  font-size: 13px;
  font-weight: bold;
}
.number {
  font-size: 12px;
  font-weight: bold;
}
@media screen and (max-width: 767px){
.btn-primary {
  margin-top: 10px;
}
}
@media screen and (max-width: 991px) and (min-width: 768px){
.name_head {
  margin-left: 20px;
}
}
</style>
