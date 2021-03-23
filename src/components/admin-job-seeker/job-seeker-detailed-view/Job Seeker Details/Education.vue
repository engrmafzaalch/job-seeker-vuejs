<template>
<div class="container">
  <div class="row">
    <div class="col-12 card">
      <div class="card-body">
        <div class="row py-2">
          <div class="col-md-4">
            <div>
              <span class="text-black-50 font-a">Name of Educational Institution/School</span>
            </div>
            <div class="py-2">
              <span class="font_b">Lorem ipsum dolor</span>
            </div>
          </div>
          <div class="col-md-3">
            <div>
              <span class="font_a">Minimum Qualification</span>
            </div>
            <div class="py-2">
              <span class="font_b">Diploma</span>
            </div>
          </div>
          <div class="col-md-2">
            <div>
              <span class="text-black-50 font-a">Start Date</span>
            </div>
            <div class="py-2">
              <span class="font_b">Jul, 2019</span>
            </div>
          </div>
          <div class="col-md-3">
            <div>
              <span class="font-a text-black-50">End Date</span>
            </div>
            <div class="py-2">
              <span class="font_b">On-going</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <span class="text-black-50 py-2">Education details</span>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-9 py-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean euismod bibendum laoreet.
              Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.
              Proin sodales pulvinar sic tempor.
              Sociis natoque penatibus et magnis dis parturient.
            </p>
          </div>
        </div>
        <hr>

        <div class="row py-2">
          <div class="col-md-4">
            <div>
              <span class="text-black-50 font-a">Name of Educational Institution/ School</span>
            </div>
            <div class="py-2">
              <span class="font_b">Lorem ipsum dolor</span>
            </div>
          </div>
          <div class="col-md-3">
            <div>
              <span class="font_a">Minimum Qualification</span>
            </div>
            <div class="py-2">
              <span class="font_b">Diploma</span>
            </div>
          </div>
          <div class="col-md-2">
            <div>
              <span class="text-black-50 font-a">Start Date</span>
            </div>
            <div class="py-2">
              <span class="font_b">date</span>
            </div>
          </div>
          <div class="col-md-3">
            <div>
              <span class="font-a text-black-50">End Date</span>
            </div>
            <div class="py-2">
              <span class="font_b">data</span>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <span class="text-black-50 py-2">Education details</span>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-9 py-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus
              accumsan et viverra justo commodo. Proin sodales pulvinar sic tempor.
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
  name: "Education",
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "degree college coompletionDate stratDate educationDetail" }),
      education : {}
    };
  },

  beforeCreate() {
    axios.get(`${process.env.VUE_ROOT_URL}/education/${this.$route.params.id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        this.education = res.data
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
@media screen and (max-width: 350px){
  button {
    width: 100%;
  }
}
.font_b {
  font-weight: bold;
  font-size: 16px;
}
.font-a {
  font-size: 14px;
}
@media screen and (max-width: 767px){
  .btn-primary {
    margin-top: 10px;
  }
}
</style>
