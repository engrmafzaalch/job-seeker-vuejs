<template>
  <div class="container">
    <a-form :form="form" @submit="handleSubmit">
    <div class="row justify-content-center mt-3">
      <div class="col-12">
        <h4 class="pl-2">Enter Experience Details</h4>
      </div>
    </div>
      <a-form-item>
      <div class="form-group ml-2">
        <div class="row">
          <div class="col-sm-6">
            <a-input v-decorator="[`employerName`,]"
                     type="text" class="form-control my-2 py-3" id="employer" placeholder="Employer Name"></a-input>
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`jobTitle`,]"
                    type="text" class="form-control my-2" id="job_title">
              <option value="" disabled selected hidden>Job Title</option>
              <option value="junior dev" >Junior dev</option>
              <option value="senior dev" >senior dev</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <select v-decorator="[`City`,]"
                    type="text" class="form-control my-2" id="city">
              <option value="" disabled selected hidden>City</option>
            </select>
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`country`,]"
                    type="text" class="form-control my-2" id="country">
              <option value=""  disabled selected hidden>Country</option>
              <option v-for="country in countries" >{{country.countryName}}</option>
            </select>
          </div>
        </div>
        <div class="row py-1">
          <div class="col-sm-6">
            <select v-decorator="[`workType`,]"
                    type="text" class="my-2 form-control" id="work_type">
              <option value="" disabled selected hidden>Work Type</option>
               <option value="Full time">Full time</option>
                <option value="Part time">Part time</option>

            </select>
          </div>
          <div class="col-sm-6">
            <a-input v-decorator="[`salary`,]"
                     type="text" class="form-control py-3 my-2" id="salary" placeholder="Salary"></a-input>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <a-date-picker v-decorator="[`endDate`,]"
                           class="my-2 w-100" @change="onChange" placeholder="End Date"/>
          </div>
          <div class="col-sm-6">
            <a-date-picker v-decorator="[`startDate`,]"
                           class="my-2 w-100" @change="onChange" placeholder="Start Date"/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <a-textarea v-decorator="[`jobDescriptions`,]"
                        class="my-2 form-control"
                        name="text"
                        id="education_details"
                        cols="" rows="6"
                        placeholder="Job Description"></a-textarea>
          </div>
        </div>
        <div class="row justify-content-center text-center my-3">
          <div class="col-12">
            <button class="btn btn-light">
              Add More Education
            </button>
          </div>
        </div>
      </div>
      </a-form-item>
    <hr>
    <div class="row float-right">
      <div class="col-12">
        <a-button class="login-button-style btn btn-light px-4" @click="changed(2)">Go Back</a-button>
        <a-button type="primary"
                  html-type="submit"
                  class="login-button-style btn btn-primary px-4"
                  :disabled="hasErrors(form.getFieldsError())">Proceed</a-button>
      </div>
    </div>
    </a-form>
  </div>
</template>

<script>
import axios from "axios";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}
export default {
name: "experience",

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "employerName jobTitle city country workType salary endDate startDate jobDetails" }),
      countries:[]
    };
  },

  beforeCreate() {
    axios.get('http://192.241.137.124:8000/api/v1/countries', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        this.countries = res.data
        console.log("data", res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  },

  methods:{
    changed: function(step) {
      this.$store.commit('change', step)
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let startDate = values.startDate.toDate()
          let endDate = values.endDate.toDate()
          values.startDate = startDate
          values.endDate = endDate
          console.log("Received values of form: ", values);
          this.$store.commit('change', 4)

          var data = values

          console.log("data body", data)
          var config = {
            method: 'post',
            url: 'http://192.241.137.124:8000/api/v1/experience',
            headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json'
            },
            data : data
          };
          axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));

            })
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  }
}
</script>

<style scoped>
@media screen and (max-width: 240px){
.login-button-style{
  width: 100%;
  margin-bottom: 5px;
}
}
</style>
