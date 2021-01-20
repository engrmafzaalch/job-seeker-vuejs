<template>
  <div class="container">
    <a-form :form="form" @submit="handleSubmit">
    <div class="row justify-content-center mt-3">
      <div class="col-12">
        <h4>Enter Experience Details</h4>
      </div>
    </div>
      <a-form-item>
      <div class="form-group">
        <div class="row my-4">
          <div class="col-6">
            <a-input v-decorator="[
                          `EmployerName`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input Employer Name in this field.',
                              },
                            ],
                          },
                        ]"
                     type="text" class="form-control" id="employer" placeholder="Employer Name"></a-input>
          </div>
          <div class="col-6">
            <select v-decorator="[
                          `Job Title`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please enter Job Title this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="job_title">
              <option value="" disabled selected hidden>Job Title</option>
            </select>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-6">
            <select v-decorator="[
                          `City`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please enter your City in this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="city">
              <option value="" disabled selected hidden>City</option>
            </select>
          </div>
          <div class="col-6">
            <select v-decorator="[
                          `Country`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please enter your Country in this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="country">
              <option value=""  disabled selected hidden>Country</option>
              <option v-for="country in countries" >{{country.countryName}}</option>
            </select>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-6">
            <select v-decorator="[
                          `WorkType`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please enter your Work Type in this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="work_type">
              <option value="" disabled selected hidden>Work Type</option>
            </select>
          </div>
          <div class="col-6">
            <a-input v-decorator="[
                          `Salary`,
                        ]"
                     type="text" class="form-control" id="salary" placeholder="Salary"></a-input>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-6">
            <a-date-picker v-decorator="[
                          `EndDate`,
                        ]"
                           class="w-100" @change="onChange" placeholder="End Date"/>
          </div>
          <div class="col-6">
            <a-date-picker v-decorator="[
                          `StartDate`,
                        ]"
                           class="w-100" @change="onChange" placeholder="Start Date"/>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-md-6">
            <a-textarea v-decorator="[
                          `EducationDetails`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please Educational Details in this field.',
                              },
                            ],
                          },
                        ]"
                        class="form-control"
                        name="text"
                        id="education_details"
                        cols="" rows="6"
                        placeholder="Education Details"></a-textarea>
          </div>
        </div>
        <div class="row justify-content-center text-center my-4">
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
        <a-button class="btn btn-light mr-3 px-5" @click="changed(2)">Go Back</a-button>
        <a-button type="primary"
                  html-type="submit"
                  class="login-button-style btn btn-primary px-5"
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
        'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJFZ0NPRTB3ZDVEMjZfX0ZUZURmSmhNejlucndZYXM2czFGaE5EcHo2djFJIn0.eyJleHAiOjE2MTExNzU5ODIsImlhdCI6MTYxMTE3MjM4MiwianRpIjoiMjE0NzNmMmUtZmQxNi00ZTZjLTkxYmEtMzVjM2FjZmE2NTAzIiwiaXNzIjoiaHR0cDovLzE3OC42Mi44Ny4xNjI6ODA4MC9hdXRoL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiI3ZDVhOTc2NC1kN2RiLTQ2ZTktYTdjMi01ZTdmNWZlOGUwMDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJzZXNzaW9uX3N0YXRlIjoiNTI5YTRkNDAtNWI2NS00NDNkLThkMmUtODE2ODYxNmU3ZjRlIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiSk9CU0VFS0VSIl19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlRvbnkgQXlhYmFtIiwicHJlZmVycmVkX3VzZXJuYW1lIjoidG9ueUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiVG9ueSIsImZhbWlseV9uYW1lIjoiQXlhYmFtIiwiZW1haWwiOiJ0b255QGdtYWlsLmNvbSJ9.FsNvDBdvi8obI-sUl1c5kXTAeqAdxqMja1nKDAp8YTcMMNNA37MQtojbzgBdu0mwJjXT-8frZ-j2MvLmIy1Txcq6iADEVd9QnXGqKv8uAEaQZHT9SMONf3UT9zuNmdamtbJCUV1gJKdAKQ5OgJwPFffwY6nJbM6i7dbIaLyQIcJ8_DhvdyMpJoOKWx0r_1SjRYZfdsjedOpYVqGchhlfVtBiCGZEMHwH92TRxa2WnzpPMBQQ1reXZVEnlP6_pfy9eyHP3wut9sglSKbxA7UfSKIyNu69iNsMTWBYw3D_Y_nvIH4458BdFRt_GwAtkFtdmNr4xWp_a_0cyD-ZzSUjtw`
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
          var config = {
            method: 'post',
            url: 'http://167.99.198.38:32001/add/job/seeker/work/experience',
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJFZ0NPRTB3ZDVEMjZfX0ZUZURmSmhNejlucndZYXM2czFGaE5EcHo2djFJIn0.eyJleHAiOjE2MTExNzE2ODIsImlhdCI6MTYxMTE2ODA4MiwianRpIjoiMTRhMzA1YmUtYWVlNi00MjI1LTkwY2EtNWJhYmRmMjY2NDhkIiwiaXNzIjoiaHR0cDovLzE3OC42Mi44Ny4xNjI6ODA4MC9hdXRoL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiI3ZDVhOTc2NC1kN2RiLTQ2ZTktYTdjMi01ZTdmNWZlOGUwMDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJzZXNzaW9uX3N0YXRlIjoiMjc0MmFmMDktOWExYy00YWU2LTgxZWEtMTFmMzVjNjI0NzFlIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiSk9CU0VFS0VSIl19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlRvbnkgQXlhYmFtIiwicHJlZmVycmVkX3VzZXJuYW1lIjoidG9ueUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiVG9ueSIsImZhbWlseV9uYW1lIjoiQXlhYmFtIiwiZW1haWwiOiJ0b255QGdtYWlsLmNvbSJ9.JQg1P9Rf3d6ZwSJcbNfu7mcWXz2bF47aU1FX1qoe-YVfQjGfbXQ78CMvgv4ZoxE7ilmOZSQTYasbwQ1caX9XvIsBVK6Q96yqvFyfrY6evY1NUipXM59_Fa7-30A9z_5BQGGhMvtQtHLUa0AYxAkq4Jw1xoLlBiCFeY9mIffh4XQXTpxIRccFpOO4q3kFSrQOEdwFaxG1Pk36RNh8AteMXPvuF8VYpC3p1zZg1CJgNN9OG1b8DBO7V5fdNS8N-Yj4ZA9OTZkDVySArok1JayCOl58qLimJ2N5o4LoU1otZTvna1IR4pq7H1OzUt876VO0tCnOisdOfU0Js8T8UeQmQA',
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
