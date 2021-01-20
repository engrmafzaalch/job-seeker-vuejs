<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
      <div class="col-12">
        <h4>Enter Personal Information</h4>
      </div>
    </div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
      <div class="form-group">
        <div class="row my-4">
          <div class="col-6">
            <a-input v-decorator="[
                          `Name`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input Name in this field.',
                              },
                            ],
                          },
                        ]"
                     type="text" class="form-control" id="name" placeholder="Name"></a-input>
          </div>
          <div class="col-6">
            <select v-decorator="[
                          `EmailAddress`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input Email Address in this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="email_address">
              <option value="" disabled selected hidden>Email Address</option>
              <option value="sikandarcapital@gmail.com">sikandarcapital@gmail.com</option>
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
                                message: 'Please input City this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="city">
              <option value="" disabled selected hidden>City</option>
              <option value="Lahore">Lahore</option>
            </select>
          </div>
          <div class="col-6">
            <select v-decorator="[
                          `Country`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input Country this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="country">
              <option value="" disabled selected hidden>Country</option>
              <option v-for="country in countries" >{{country.countryName}}</option>
            </select>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-6">
            <a-input v-decorator="[
                          `MobileNumber`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input Mobile Number this field.',
                              },
                            ],
                          },
                        ]"
                     type="text" class="form-control" id="mobile_number" placeholder="Mobile Number"></a-input>
          </div>
          <div class="col-6">
            <a-input v-decorator="[
                          `LinkedIn`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input LinkedIN Profile this field.',
                              },
                            ],
                          },
                        ]"
                     type="text" class="form-control" id="linked_in" placeholder="Linked-In Profile URL"></a-input>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h6>Date of Birth</h6>
          </div>
        </div>
        <div class="row my-2">
          <div class="col-4">
            <select v-decorator="[
                          `Day`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please select Day in this field.',
                              },
                            ],
                          },
                        ]"
                    class="form-control" id="day">
              <option value="" disabled selected hidden>Day</option>
              <option value="1">1</option>
            </select>
          </div>
          <div class="col-4">
            <select v-decorator="[
                          `Month`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]"
                    class="form-control" id="month">
              <option value="" disabled selected hidden>Month</option>
              <option value="January">January</option>
            </select>
          </div>
          <div class="col-4">
            <select v-decorator="[
                          `Year`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="year">
              <option value="" disabled selected hidden>Year</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
        <div class="row py-2">
          <div class="col-12">
            <h6>N. Y. S. C. Number</h6>
          </div>
        </div>
          <div class="row">
            <div class="col-md-6">
              <a-input v-decorator="[
                          `NYSC`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input N. Y. S. C Number this field.',
                              },
                            ],
                          },
                        ]"
                       type="text" class="form-control" id="nysc" placeholder="A00 - 0 - 0 - 0 - 0 - 0 - 0 - 0"></a-input>
            </div>
          </div>
      </div>
      </a-form-item>

    <hr>
    <div class="row float-right">
      <div class="col-12">
        <a-button class="btn btn-light mr-3 px-5" @click="changed(6)">Go Back</a-button>
        <a-button
          type="primary"
          html-type="submit"
          class="login-button-style btn btn-primary px-5"
          :disabled="hasErrors(form.getFieldsError())">
          Complete Profile
        </a-button>
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
  name: "myProfile",

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "Name EmailAddress City Country MobileNumber LinkedIn Day Month Year NYSC" }),
      countries : []
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

  methods: {
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    // Only show error after a field is touched.
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.$store.commit('change', 8)
        }
      });
    },
  },

}
</script>

<style scoped>

</style>
