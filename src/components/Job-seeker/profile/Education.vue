<template>
  <div class="container">
    <a-form :form="form" @submit="handleSubmit">
      <div class="row justify-content-center mt-3">
        <div class="col-12">
          <h4>Enter Education Details</h4>
        </div>
      </div>
      <a-form-item>
        <div class="form-group">
          <div class="row my-4">
            <div class="col-6">
              <a-input v-decorator="[
                          `Degree`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please enter Education Details in this field.',
                              },
                            ],
                          },
                        ]"
                       type="text" class="form-control" id="degree" placeholder="Degree/Certification">
              </a-input>
            </div>
            <div class="col-6">
              <a-input v-decorator="[
                          `College`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please enter Academics in this field.',
                              },
                            ],
                          },
                        ]"
                       type="text" class="form-control" id="college" placeholder="College/University/Academy">
              </a-input>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-6">
              <a-date-picker
                v-decorator="[
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
                          `EducationDetail`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please Enter Educational Details in this field.',
                              },
                            ],
                          },
                        ]"
                          class="form-control"
                          name="text"
                          id="education_details"
                          cols=""
                          rows="6"
                          placeholder="Education Details">

              </a-textarea>
            </div>
          </div>
          <div class="row justify-content-center text-center my-4">
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
          <a-button class="btn btn-light mr-3 px-5" @click="changed(1)">Go Back</a-button>
          <a-button type="primary"
                    html-type="submit"
                    class="login-button-style btn btn-primary px-5"
                    :disabled="hasErrors(form.getFieldsError())"
                    >Proceed
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
  el: "Education",

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "Degree College EndDate StratDate EducationDetail" }),
    };
  },

  methods: {
    changed: function (step) {
      this.$store.commit('change', step)
    },
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    // Only show error after a field is touched.
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let StartDate = values.StartDate.toDate()
          let EndDate = values.EndDate.toDate()
          values.StartDate = StartDate
          values.EndDate = EndDate
          console.log("Received values of form: ", values);
          this.$store.commit('change', 3)
        }
      });

      var data = values
      var config = {
        method: 'post',
        url: 'http://167.99.198.38:32001/create/job/seeker/education',
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJFZ0NPRTB3ZDVEMjZfX0ZUZURmSmhNejlucndZYXM2czFGaE5EcHo2djFJIn0.eyJleHAiOjE2MTExMzE0MDQsImlhdCI6MTYxMTEyNzgwNCwianRpIjoiZjFkMWRiNDAtZTkwNi00ODc4LTlmODEtZTg2YzdiOTk0OGEwIiwiaXNzIjoiaHR0cDovLzE3OC42Mi44Ny4xNjI6ODA4MC9hdXRoL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiI3ZDVhOTc2NC1kN2RiLTQ2ZTktYTdjMi01ZTdmNWZlOGUwMDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJzZXNzaW9uX3N0YXRlIjoiZjk1NDViZmUtOGM5Ny00NGMyLWJjYjMtNTllZjEzYTNhYjE5IiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiSk9CU0VFS0VSIl19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlRvbnkgQXlhYmFtIiwicHJlZmVycmVkX3VzZXJuYW1lIjoidG9ueUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiVG9ueSIsImZhbWlseV9uYW1lIjoiQXlhYmFtIiwiZW1haWwiOiJ0b255QGdtYWlsLmNvbSJ9.C_GBe1m9lSsJ0k_Ir1n1BMbuSBZdRyVqV43G6rCDzAgUGI4XP-kA8z0HyVSTRFNp6ZJHZ2vfckCsXfhMRNcwMlVoO7aZILf3ek2VOcIHjLPvRXVO6Khk_7iPHqMxxw5hgj8gwV5ljBZOMvbTKuuKziTeaJaGKIoi8nz5UiUeIFLGAS2eBexjO5D16AJGIZ4qW0-PPDLgQjrE3q5RBk2sCEWXpfw5eRXS52Ik22_8jCI589vFfy5XTeUxHPxTR1Hl67-Mw4PKS3SY1ZmkE46r_yGbpqAkS3KdchgOWZcJqmiQId_dUgGZGgfuAFJIdlSggfO2AGYmcxh65KBkkPh1eQ',
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

    },
    onChange(date, dateString) {
      console.log("date", dateString);
    },
  },
}
</script>

<style scoped>

</style>
