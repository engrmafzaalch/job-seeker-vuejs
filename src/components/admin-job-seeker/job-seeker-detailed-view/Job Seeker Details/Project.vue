<template>
<div class="container">
  <div class="row">
    <div class="col-12 card">
      <div class="card-body">

        <div class="row">
          <div class="col-12 py-2">
            <h3 class="text-primary">Experience</h3>
          </div>
        </div>

        <div class="row">
          <div class="col-lg-2">
            <span class="text-black-50 font_a">Project Title</span><br>
            <span class="font_b">ABC Private Limited</span>
          </div>
          <div class="col-lg-2">
            <span class="text-black-50 font_a">Client Name</span><br>
            <span class="font_b">Charlie Bergson</span>
          </div>
          <div class="col-lg-2">
            <span class="text-black-50 font_a">Project Status</span><br>
            <span class="font_b">Completed</span>
          </div>
          <div class="col-lg-2">
            <span class="text-black-50 font_a">Duration</span><br>
            <span class="font_b">1 Year 6 Months</span>
          </div>
          <div class="col-lg-2">
            <span class="text-black-50 font_a">Start Date</span><br>
            <span class="font_b">Jun - 2019</span>
          </div>
          <div class="col-lg-2">
            <span class="text-black-50 font_a">Finished On</span><br>
            <span class="font_b">Dec - 2020</span>
          </div>
        </div>
        <div class="row">
          <div class="col-12 pt-4 pb-2">
            <h6 class="text-black-50">Project Details</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-9 pb-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean euismod bibendum laoreet.
              Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
              Proin sodales pulvinar sic tempor.
              Sociis natoque penatibus et magnis dis parturient.
            </p>
          </div>
        </div>

        <hr>

        <div class="row">
          <div class="col-lg-2">
            <span class="text-black-50 font_a">Project Title</span><br>
            <span class="font_b">ABC Private Limited</span>
          </div>
          <div class="col-lg-2">
            <span class="text-black-50 font_a">Client Name</span><br>
            <span class="font_b">Charlie Bergson</span>
          </div>
          <div class="col-lg-2">
            <span class="text-black-50 font_a">Project Status</span><br>
            <span class="font_b">Completed</span>
          </div>
          <div class="col-lg-2">
            <span class="text-black-50 font_a">Duration</span><br>
            <span class="font_b">1 Year 6 Months</span>
          </div>
          <div class="col-lg-2">
            <span class="text-black-50 font_a">Start Date</span><br>
            <span class="font_b">Jun - 2019</span>
          </div>
          <div class="col-lg-2">
            <span class="text-black-50 font_a">Finished On</span><br>
            <span class="font_b">Dec - 2020</span>
          </div>
        </div>
        <div class="row">
          <div class="col-12 pt-4 pb-2">
            <h6 class="text-black-50">Project Details</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-9 pb-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean euismod bibendum laoreet.
              Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo.
              Proin sodales pulvinar sic tempor.
              Sociis natoque penatibus et magnis dis parturient.
            </p>
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
import axios from "axios";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}
export default {
  name: "project",


  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "projectTitle employerName clientName projectStatus endDate stratDate projectDetail"}),
      project : {}

    };
  },

  beforeCreate() {
    axios.get(`http://192.241.137.124:8000/api/v1/project/${this.$route.params.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        this.project = res.data
        // alert("data", JSON.stringify(res.data));
      })
      .catch((error) => {
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
.card {
  width: 1400px;
}
/*.border_ {*/
/*  border-radius: 24px;*/
/*}*/
/*.list_ {*/
/*  list-style: none;*/
/*  display: inline;*/
/*  margin-left: -38px;*/
/*}*/
/*.list_ li {*/
/*  display: inline-block;*/
/*}*/
.font_a {
  font-size: 12px;
}
.font_b {
  font-size: 14px;
  font-weight: bold;
}
@media screen and (max-width: 767px){
  .btn-primary {
    margin-top: 10px;
  }
}
</style>
