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
            <a-input v-decorator="[`EmployerName`,]"
                     type="text" class="form-control" id="employer" placeholder="Employer Name"></a-input>
          </div>
          <div class="col-sm-6  py-1 py-sm-0">
            <select v-decorator="[`Job Title`,]"
                    type="text" class="form-control" id="job_title">
              <option value="" disabled selected hidden>Job Title</option>
            </select>
          </div>
        </div>
        <div class="row pt-1 pt-sm-0">
          <div class="col-sm-6 mt-2">
            <select v-decorator="[`City`,]"
                    type="text" class="form-control" id="city">
              <option value="" disabled selected hidden>City</option>
            </select>
          </div>
          <div class="col-sm-6 py-2 py-sm-0 mt-2">
            <select v-decorator="[`Country`,]"
                    type="text" class="form-control" id="country">
              <option value=""  disabled selected hidden>Country</option>
              <option v-for="country in countries" >{{country.countryName}}</option>
            </select>
          </div>
        </div>
        <div class="row py-1">
          <div class="col-sm-6 mt-1">
            <select v-decorator="[`WorkType`,]"
                    type="text" class="form-control" id="work_type">
              <option value="" disabled selected hidden>Work Type</option>
            </select>
          </div>
          <div class="col-sm-6 py-1 py-sm-0 mt-1">
            <a-input v-decorator="[`Salary`,]"
                     type="text" class="form-control py-3" id="salary" placeholder="Salary"></a-input>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <a-date-picker v-decorator="[`EndDate`,]"
                           class="w-100" @change="onChange" placeholder="End Date"/>
          </div>
          <div class="col-sm-6">
            <a-date-picker v-decorator="[`StartDate`,]"
                           class="w-100" @change="onChange" placeholder="Start Date"/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6 py-2">
            <a-textarea v-decorator="[`EducationDetails`,]"
                        class="form-control"
                        name="text"
                        id="education_details"
                        cols="" rows="6"
                        placeholder="Education Details"></a-textarea>
          </div>
        </div>
        <div class="row justify-content-center text-center my-3">
          <div class="col-12">
            <a-button class="btn btn-light">
              Add More Education
            </a-button>
          </div>
        </div>
      </div>
      </a-form-item>
    <hr>
    <div class="row float-right">
      <div class="col-12">
        <a-button class="btn btn-light px-4" @click="changed(2)">Go Back</a-button>
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
      form: this.$form.createForm(this, { name: "EmployerName JobTitle City Country WorkType Salary EndDate StartDate EducationDetails" }),
      countries:[]
    };
  },

  beforeCreate() {
    axios.get('http://167.99.198.38:32001/list/countries', {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJFZ0NPRTB3ZDVEMjZfX0ZUZURmSmhNejlucndZYXM2czFGaE5EcHo2djFJIn0.eyJleHAiOjE2MTEyNjQyMzcsImlhdCI6MTYxMTI2MDYzNywianRpIjoiYTlhMDU2NTYtZTZlYy00MDVjLTk2ODAtNzI4ZTMyMTU3ZTQyIiwiaXNzIjoiaHR0cDovLzE3OC42Mi44Ny4xNjI6ODA4MC9hdXRoL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiI3ZDVhOTc2NC1kN2RiLTQ2ZTktYTdjMi01ZTdmNWZlOGUwMDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJzZXNzaW9uX3N0YXRlIjoiMTk2NTAzYTItM2I2YS00YTllLTk4NjYtOWQzZGY1MGViNDE0IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiSk9CU0VFS0VSIl19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlRvbnkgQXlhYmFtIiwicHJlZmVycmVkX3VzZXJuYW1lIjoidG9ueUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiVG9ueSIsImZhbWlseV9uYW1lIjoiQXlhYmFtIiwiZW1haWwiOiJ0b255QGdtYWlsLmNvbSJ9.gQOtPFOPxlluJKaycKlJEv0CM-DlhqOcRV2cKDvELeZQtEOhxWF4tFqerRzBEbtvX4TjSK6VVB7cwL1AgGsZ7aDHp7pfJTCiFWUr0TKdiFKb-9Hfn37IYgaeDXlkSaYZ-tM47-LQtGldLYP_pj-OtXhK07aBECe-oxCY6QC2FVN3BdlsItyVYd3tIMpGmAvrLZkY3DoQ1CdwW7KHN6cAkPVG6F65Xb0TDjigblL9UVRr6iri5dIxsBTKQqhCbEKnOrA3hDvcHvl3A62knvwHpcg6eptUJhKLyP_0bTrGBOGuhvM1sbCcqVNyueVyhwed6OJByEy3BRlSGNEAKpuh1Q`
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
          let StartDate = values.StartDate.toDate()
          let EndDate = values.EndDate.toDate()
          values.StartDate = StartDate
          values.EndDate = EndDate
          console.log("Received values of form: ", values);
          this.$store.commit('change', 4)

          var data = values
          data.jobSeekerId = 1
          console.log("data body", data)
          var config = {
            method: 'post',
            url: 'http://167.99.198.38:32001/add/job/seeker/work/experience',
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJFZ0NPRTB3ZDVEMjZfX0ZUZURmSmhNejlucndZYXM2czFGaE5EcHo2djFJIn0.eyJleHAiOjE2MTEyNjQyMzcsImlhdCI6MTYxMTI2MDYzNywianRpIjoiYTlhMDU2NTYtZTZlYy00MDVjLTk2ODAtNzI4ZTMyMTU3ZTQyIiwiaXNzIjoiaHR0cDovLzE3OC42Mi44Ny4xNjI6ODA4MC9hdXRoL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiI3ZDVhOTc2NC1kN2RiLTQ2ZTktYTdjMi01ZTdmNWZlOGUwMDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJzZXNzaW9uX3N0YXRlIjoiMTk2NTAzYTItM2I2YS00YTllLTk4NjYtOWQzZGY1MGViNDE0IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiSk9CU0VFS0VSIl19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlRvbnkgQXlhYmFtIiwicHJlZmVycmVkX3VzZXJuYW1lIjoidG9ueUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiVG9ueSIsImZhbWlseV9uYW1lIjoiQXlhYmFtIiwiZW1haWwiOiJ0b255QGdtYWlsLmNvbSJ9.gQOtPFOPxlluJKaycKlJEv0CM-DlhqOcRV2cKDvELeZQtEOhxWF4tFqerRzBEbtvX4TjSK6VVB7cwL1AgGsZ7aDHp7pfJTCiFWUr0TKdiFKb-9Hfn37IYgaeDXlkSaYZ-tM47-LQtGldLYP_pj-OtXhK07aBECe-oxCY6QC2FVN3BdlsItyVYd3tIMpGmAvrLZkY3DoQ1CdwW7KHN6cAkPVG6F65Xb0TDjigblL9UVRr6iri5dIxsBTKQqhCbEKnOrA3hDvcHvl3A62knvwHpcg6eptUJhKLyP_0bTrGBOGuhvM1sbCcqVNyueVyhwed6OJByEy3BRlSGNEAKpuh1Q',
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

</style>
