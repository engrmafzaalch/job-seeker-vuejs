<template>
<div class="container">
  <MyAccount/>
  <div class="row">
    <div class="col-12 card">
      <div class="card-body">
        <div class="row">
          <div class="col-12">
            <h3 class="text-primary head_">CV</h3>
          </div>
        </div>
        <div class="row pb-2">
          <div class="col-lg-4 border border-light rounded">
            <div class="row pt-2">
              <div class="col-1">
                <a href="#">
                  <img class="mt-1" src="./Group.png" alt="Group" height="24" width="auto">
                </a>
              </div>
              <div class="col-6">
                <div>
                  <span>CV.pdf</span>
                </div>
                <div>
                  <span class="text-black-50">182 KB</span>
                </div>
              </div>
              <div class="col-2">
                <a href="#">
                  <img class="float-right mt-1" src="./trash.png" height="20" width="auto">
                </a>
              </div>
              <div class="col-2">
                <a href="#">
                  <img class="mr-2 mt-1" src="./download.png" height="20" width="auto">
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr class="py-2">

        <div class="row">
          <div class="col-12">
            <h3 class="text-primary head_">Degree Certificate</h3>
          </div>
        </div>
        <div class="row pb-2">
          <div class="col-lg-4 border border-light rounded">
            <div class="row pt-2">
              <div class="col-1">
                <a href="#">
                  <img class="mt-1" src="./Group.png" alt="Group" height="24" width="auto">
                </a>
              </div>
              <div class="col-6">
                <div>
                  <span>Degree.pdf</span>
                </div>
                <div>
                  <span class="text-black-50">182 KB</span>
                </div>
              </div>
              <div class="col-2">
                <a href="#">
                  <img class="float-right mt-1" src="./trash.png" height="20" width="auto">
                </a>
              </div>
              <div class="col-2">
                <a href="#">
                  <img class="mr-2 mt-1" src="./download.png" height="20" width="auto">
                </a>
              </div>
            </div>
          </div>
        </div>

        <hr class="py-2">

        <div class="row">
          <div class="col-12">
            <h3 class="text-primary head_">NYSC Discharge Certificate</h3>
          </div>
        </div>
        <div class="row pb-2">
          <div class="col-lg-4 border border-light rounded">
            <div class="row pt-2">
              <div class="col-1">
                <a href="#">
                  <img class="mt-1" src="./Group.png" alt="Group" height="24" width="auto">
                </a>
              </div>
              <div class="col-6">
                <div>
                  <span>NYSC.pdf</span>
                </div>
                <div>
                  <span class="text-black-50">182 KB</span>
                </div>
              </div>
              <div class="col-2">
                <a href="#">
                  <img class="float-right mt-1" src="./trash.png" height="20" width="auto">
                </a>
              </div>
              <div class="col-2">
                <a href="#">
                  <img class="mr-2 mt-1" src="./download.png" height="20" width="auto">
                </a>
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
// import axios from "axios";

// function hasErrors(fieldsError) {
//   return Object.keys(fieldsError).some((field) => fieldsError[field]);
// }
export default {
  name: "resume",


  data() {
    return {

    };
  },

  methods: {
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
