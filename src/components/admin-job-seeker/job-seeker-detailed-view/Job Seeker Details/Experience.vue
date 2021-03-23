<template>
<div class="container-fluid">
  <div class="row">
    <div class="col-12 card">
      <div class="card-body">
          <div class="row">
            <div class="col-12 mt-2">
              <h3 class="text-primary">Skills</h3>
            </div>
          </div>
        <div class="row">
            <div class="col-md-2 one two">Key Skills</div>
          <div class="col-10">
            <div class="row">
              <div class="border_ text-center m-1">C</div>
              <div class="border_ text-center m-1">C++</div>
              <div class="border_ text-center m-1">JAVA</div>
              <div class="border_ text-center m-1">SQL</div>
              <div class="border_ text-center m-1">Windows Server-2008</div>
            </div>
          </div>
          </div>
        </div>
        <hr>

        <div class="row">
          <div class="col-12 py-2">
            <h3 class="text-primary">Experience</h3>
          </div>
        </div>

        <div class="row">
            <div class="col-lg-2">
              <span class="text-black-50 font_a">Employe Name</span><br>
              <span class="font_b">ABC Private Limited</span>
            </div>
            <div class="col-lg-2">
              <span class="text-black-50 font_a">Job Title</span><br>
              <span class="font_b">Sr. Business Analyst</span>
            </div>
            <div class="col-lg-2">
              <span class="text-black-50 font_a">Duration</span><br>
              <span class="font_b">Jun-2020 till now</span>
            </div>
            <div class="col-lg-2">
              <span class="text-black-50 font_a">Location</span><br>
              <span class="font_b">Argentina, Buenos Aires</span>
            </div>
            <div class="col-lg-2">
              <span class="text-black-50 font_a">Industry</span><br>
              <span class="font_b">Healthcare</span>
            </div>
            <div class="col-lg-1">
              <span class="text-black-50 font_a">Work Type</span><br>
              <span class="font_b">Full Time</span>
            </div>
            <div class="col-lg-1">
              <span class="text-black-50 font_a">Salary</span><br>
              <span class="font_b">75,000</span>
            </div>
        </div>
        <div class="row">
          <div class="col-12 pt-4 pb-2">
            <h6 class="text-black-50">Job Responsibility</h6>
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
          <span class="text-black-50 font_a">Employe Name</span><br>
          <span class="font_b">ABC Private Limited</span>
        </div>
        <div class="col-lg-2">
          <span class="text-black-50 font_a">Job Title</span><br>
          <span class="font_b">Sr. Business Analyst</span>
        </div>
        <div class="col-lg-2">
          <span class="text-black-50 font_a">Duration</span><br>
          <span class="font_b">Jun-2020 till now</span>
        </div>
        <div class="col-lg-2">
          <span class="text-black-50 font_a">Location</span><br>
          <span class="font_b">Argentina, Buenos Aires</span>
        </div>
        <div class="col-lg-2">
          <span class="text-black-50 font_a">Industry</span><br>
          <span class="font_b">Healthcare</span>
        </div>
        <div class="col-lg-1">
          <span class="text-black-50 font_a">Work Type</span><br>
          <span class="font_b">Full Time</span>
        </div>
        <div class="col-lg-1">
          <span class="text-black-50 font_a">Salary</span><br>
          <span class="font_b">75,000</span>
        </div>
      </div>
      <div class="row">
        <div class="col-12 pt-4 pb-2">
          <h6 class="text-black-50">Job Responsibility</h6>
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
</template>

<script>
import axios from "axios";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}
export default {
  name: "Experience",


  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "employerName jobTitle city country workType salary endDate startDate jobDetails" }),
      experience : {}

    };
  },

  beforeCreate() {
    axios.get(`${process.env.VUE_ROOT_URL}/experience/${this.$route.params.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        this.experience = res.data
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
.two {
  line-height: 50px;
}
.card {
  width: 1400px;
}
.border_ {
  border-radius: 24px;
  background-color: #FAFAFC;
  padding: 10px 25px;
}
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
.btn-primary {
  margin-bottom: 20px;
}
@media screen and (max-width: 767px){
  .btn-primary {
    margin-top: 10px;
  }
}
</style>
