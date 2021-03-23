<template>
<div class="container">
  <a-form :form="form" @submit="handleSubmit">
  <div class="row">
    <div class="col-12">
      <h4 class="">Upload Documents</h4>
    </div>
  </div>
  <div v-decorator="[`File`,]"
       class="jumbotron">
    <div class="row">
      <div class="col-12 text-center">
        <a href="#">
          <img src="./upload.png" class="h-40 w-auto"/>
        </a>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <input type="file" multiple :name="DropYourFileshere" :disabled="isSaving" @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
          accept="/*" class="input-file py-2"/>
      </div>
    </div>
    <div class="row">
      <div class="col-12 text-center">
        <h6 class="support py-2">SUPPORT: PDF, JPGS, DOCS</h6>
      </div>
    </div>
  </div>
  <hr>
  <div class="row float-right">
    <div class="col-12">
      <button class="login-button-style btn btn-light px-5" @click="changed(4)">Go Back</button>
      <button type="primary"
              html-type="submit"
              class="login-button-style btn btn-primary px-5"
               :disabled="hasErrors(form.getFieldsError())">Proceed</button>
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
name: "Documents",
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "File" }),
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
          console.log("Received values of form: ", values);
          this.$store.commit('change', 6)
           var data = values

          console.log("data body", data)
         var config = {
            method: 'post',
            url: `${process.env.VUE_ROOT_URL}/certificate`,
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
      console.log("date", dateString);
    },
  },
}
</script>

<style scoped>
.drop_document {
  font-family: Open Sans;
  font-style: normal;
  font-size: 16px;
}
.support {
  font-family: Open Sans;
  font-style: normal;
  font-size: 14px;
}
.container {
  font-family: Open Sans;
  font-style: normal;
}
.input-file {
  margin: auto;
}
</style>
