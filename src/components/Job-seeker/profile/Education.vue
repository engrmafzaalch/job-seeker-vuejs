<template>
  <div class="container">
    <a-form :form="form" @submit="handleSubmit">
      <div class="row justify-content-center mt-3">
        <div class="col-12">
          <h4 class="pl-1">Enter Education Details</h4>
        </div>
      </div>
      <a-form-item>
        <div class="form-group ml-1">
          <div class="row">
            <div class="col-sm-6">
              <a-input v-decorator="[`degree`,]"
                       type="text" class="my-2 form-control" id="degree" placeholder="Degree/Certification">
              </a-input>
            </div>
            <div class="col-sm-6">
              <a-input v-decorator="[`college`,]"
                       type="text" class="my-2 form-control" id="college" placeholder="College/University/Academy">
              </a-input>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-6">
              <a-date-picker
                v-decorator="[`coompletionDate`,]"
                             class="my-2 w-100" @change="onChange" placeholder="End Date"/>
            </div>
            <div class="col-sm-6">
              <a-date-picker v-decorator="[`startDate`,]"
                             class="my-2 w-100" @change="onChange" placeholder="Start Date"/>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6">
              <a-textarea v-decorator="[`educationDetail`,]"
                          class="form-control my-2"
                          name="text"
                          id="education_details"
                          cols=""
                          rows="6"
                          placeholder="Education Details">

              </a-textarea>
            </div>
          </div>
          <div class="row justify-content-center text-center my-2">
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
          <a-button class="login-button-style btn btn-light px-4" @click="changed(1)">Go Back</a-button>
          <a-button type="primary"
                    html-type="submit"
                    class="login-button-style btn btn-primary px-4"
                    :disabled="hasErrors(form.getFieldsError())">Proceed
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
  name: "Education",

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "degree college coompletionDate stratDate educationDetail" }),
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
          let startDate = values.startDate.toDate()
          let coompletionDate = values.coompletionDate.toDate()
          values.startDate = startDate
          values.coompletionDate = coompletionDate
          console.log("Received values of form: ", values);
          this.$store.commit('change', 3)
            var data = values
      var config = {
        method: 'post',
        url: 'http://192.241.137.124:8000/api/v1/education',
        headers: {
          'Authorization':  `Bearer ${localStorage.getItem('token')}`,
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

      // var data = values
      // var config = {
      //   method: 'post',
      //   url: 'http://192.241.137.124:8000/api/v1/education',
      //   headers: {
      //     'Authorization':  `Bearer ${localStorage.getItem('token')}`,
      //     'Content-Type': 'application/json'
      //   },
      //   data : data
      // };
      // axios(config)
      //   .then(function (response) {
      //     console.log(JSON.stringify(response.data));

      //   })
      //   .catch(function (error) {
      //     console.log(error);
      //   });

    },
    onChange(date, dateString) {
      console.log("date", dateString);
    },
  },
}
</script>

<style scoped>
@media screen and (max-width: 242px) {
  .login-button-style {
    margin-bottom: 5px ;
    width: 100%;
  }
}
</style>
