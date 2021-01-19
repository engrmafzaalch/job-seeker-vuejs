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
              <option value="Web Developer">Web Developer</option>
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
                                message: 'Please enter your CIty in this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="city">
              <option value="" disabled selected hidden>City</option>
              <option value="Washington DC">Washington D.C</option>
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
              <option value="" v-for="country in countries" >{{country.countryName}}</option>
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
              <option value="Developer">Developer</option>
            </select>
          </div>
          <div class="col-6">
            <a-input v-decorator="[
                          `Salary`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input Salary in this field.',
                              },
                            ],
                          },
                        ]"
                     type="text" class="form-control" id="salary" placeholder="Salary"></a-input>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-6">
            <a-date-picker v-decorator="[
                          `EndDate`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please enter Academics in this field.',
                              },
                            ],
                          },
                        ]"
                           class="w-100" @change="onChange" placeholder="End Date"/>
          </div>
          <div class="col-6">
            <a-date-picker v-decorator="[
                          `StartDate`,
                          {
                            rules: [
                              {

                                whitespace: true,
                                message: 'Please enter Academics in this field.',
                              },
                            ],
                          },
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
        'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJFZ0NPRTB3ZDVEMjZfX0ZUZURmSmhNejlucndZYXM2czFGaE5EcHo2djFJIn0.eyJleHAiOjE2MTEwNjgyNzIsImlhdCI6MTYxMTA2NDY3MiwianRpIjoiZjEzNWJmMTMtYzExZi00MmRjLWFhZDgtNWM0YWE3NWIyYjU1IiwiaXNzIjoiaHR0cDovLzE3OC42Mi44Ny4xNjI6ODA4MC9hdXRoL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiI3ZDVhOTc2NC1kN2RiLTQ2ZTktYTdjMi01ZTdmNWZlOGUwMDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJzZXNzaW9uX3N0YXRlIjoiM2E4MDllNjItZDZiOC00Y2JjLWJiNTUtNGE0ZTgwZWIxOWE4IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiSk9CU0VFS0VSIl19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlRvbnkgQXlhYmFtIiwicHJlZmVycmVkX3VzZXJuYW1lIjoidG9ueUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiVG9ueSIsImZhbWlseV9uYW1lIjoiQXlhYmFtIiwiZW1haWwiOiJ0b255QGdtYWlsLmNvbSJ9.Te1EIAVljTARLhISIfvJ8OC1eUoX3EaIZGh7yk4S7OzWH4AgtWvNgGWxrFMgH8wm5KLFuhCbQIBanPMJBtpbVSHa29DC306m0xHv1vvBESZ9KouVRlGGzl-zIcUjKUadsVCOzNP3Id9nmCDMWwJYp0AZ3-50k8zFq1htxqtWzNWTrK_hKIJ6_vx42jpMuNsArpUU7ULl-8bHgEbCJR2zKTd3AE1IRP80AANwGVHDTYKZntUkyS9193FRCj6jJCoVCVg-1DJ_VywHo1XN8mVFM6UP8pvuO6Rc3IAgDVJnu_pFB8Job-mXx8jQE-E4YA1LiDlAQXwfEc4oAEjWE2RpPA`
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
          console.log("Received values of form: ", values);
          this.$store.commit('change', 4)

          var data = values
          var config = {
            method: 'post',
            url: 'http://167.99.198.38:32001/add/job/seeker/work/experience',
            headers: {
              'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJFZ0NPRTB3ZDVEMjZfX0ZUZURmSmhNejlucndZYXM2czFGaE5EcHo2djFJIn0.eyJleHAiOjE2MTEwNjgyNzIsImlhdCI6MTYxMTA2NDY3MiwianRpIjoiZjEzNWJmMTMtYzExZi00MmRjLWFhZDgtNWM0YWE3NWIyYjU1IiwiaXNzIjoiaHR0cDovLzE3OC42Mi44Ny4xNjI6ODA4MC9hdXRoL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiI3ZDVhOTc2NC1kN2RiLTQ2ZTktYTdjMi01ZTdmNWZlOGUwMDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJzZXNzaW9uX3N0YXRlIjoiM2E4MDllNjItZDZiOC00Y2JjLWJiNTUtNGE0ZTgwZWIxOWE4IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiSk9CU0VFS0VSIl19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlRvbnkgQXlhYmFtIiwicHJlZmVycmVkX3VzZXJuYW1lIjoidG9ueUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiVG9ueSIsImZhbWlseV9uYW1lIjoiQXlhYmFtIiwiZW1haWwiOiJ0b255QGdtYWlsLmNvbSJ9.Te1EIAVljTARLhISIfvJ8OC1eUoX3EaIZGh7yk4S7OzWH4AgtWvNgGWxrFMgH8wm5KLFuhCbQIBanPMJBtpbVSHa29DC306m0xHv1vvBESZ9KouVRlGGzl-zIcUjKUadsVCOzNP3Id9nmCDMWwJYp0AZ3-50k8zFq1htxqtWzNWTrK_hKIJ6_vx42jpMuNsArpUU7ULl-8bHgEbCJR2zKTd3AE1IRP80AANwGVHDTYKZntUkyS9193FRCj6jJCoVCVg-1DJ_VywHo1XN8mVFM6UP8pvuO6Rc3IAgDVJnu_pFB8Job-mXx8jQE-E4YA1LiDlAQXwfEc4oAEjWE2RpPA',
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
