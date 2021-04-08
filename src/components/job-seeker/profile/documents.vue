<template>
  <div class="container">
    <a-form :form="form" @submit="handleSubmit">
      <div class="row">
        <div class="col-12">
          <h4 class="">Upload Documents</h4>
        </div>
      </div>
      <div
        v-decorator="[
          `selectedFiles`,
          { selectedFiles: [{ required: true, message: 'Please input your name' }] },
        ]"
        class="jumbotron"
      >
        <div class="row">
          <div class="col-12 text-center">
            <a href="#">
              <img src="../../../assets/upload.png" class="h-40 w-auto"/>
            </a>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <input
              class="input-file py-2"
              type="file"
              ref="file"
              multiple
              :name="DropYourFileshere"
              :disabled="isSaving"
              @change="selectFile"
              accept="/*"
            />

          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <h6 class="support py-2">SUPPORT: PDF, JPGS, DOCS</h6>
          </div>
        </div>
      </div>
      <div v-if="(fileList)" class="card">
        <div class="card-header">List of Files</div>
        <ul class="list-group list-group-flush">
          <li
            class="list-group-item"
            v-for="(file, index) in fileList"
            :key="index"
          >
            <a :href="file">{{ file }}</a>
          </li>
        </ul>
      </div>
      <hr/>

      <div class="row float-right">
        <div class="col-12">
          <button
            class="login-button-style btn btn-light px-5"
            @click="changed(4)"
          >
            Go Back
          </button>
          <button
            type="primary"
            html-type="submit"
            class="login-button-style btn btn-primary px-5"
            :disabled="hasErrors(form.getFieldsError())"
          >
            Proceed
          </button>
        </div>
      </div>
    </a-form>
  </div>
</template>


<script>
import axios from "axios";
import UploadService from "./services/UploadFilesService";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

export default {
  name: "Documents",
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, {name: "File"}),
      selectedFiles: [],
      fileList: [],
    };
  },
  beforeCreate() {
    const user = JSON.parse(localStorage.getItem("user"));
    axios
      .get(`${process.env.VUE_ROOT_URL}/certificate/${user.user_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        var fileNames = [];
        if (res.data.certificates.length != 0) {
          res.data.certificates.map(item => {
            let fileName = item.split('/');
            fileNames.push(fileName[3]);
          })
        }
        this.fileList = fileNames;

      })
      .catch((error) => {
        console.error(error);
      });
  },
  methods: {
    selectFile() {
      this.selectedFiles = this.$refs.file.files;
    },

    changed: function (step) {
      this.$store.commit("change", step);
    },
    userNameError() {
      const {getFieldError, isFieldTouched} = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    // Only show error after a field is touched.
    handleSubmit(e) {
      var that = this;
      e.preventDefault();

      this.form.validateFields((err, values) => {
        if (!err) {
          const user = JSON.parse(localStorage.getItem("user"));
          this.selectedFiles.user_id = user.user_id;


          this.$store.commit("change", 6);


          let formData = new FormData();
          for (var i = 0; i < this.selectedFiles.length; i++) {
            let file = this.selectedFiles[i];
            formData.append("docs", file);
          }


          var config = {
            method: "post",
            url: `${process.env.VUE_ROOT_URL}/certificates/${user.user_id}`,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "multipart/form-data",
            },
            data: formData,
          };
          axios(config)
            .then(function (response) {
            })
            .catch(function (error) {
            });

          var config1 = {
            method: "put",
            url: `${process.env.VUE_ROOT_URL}/certificate/${user.user_id}`,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "multipart/form-data",
            },
            data: formData,
          };
          axios(config1)
            .then(function (response) {
            })
            .catch(function (error) {
            });
        }
      });
    },
    onChange(date, dateString) {
    },
  },
};
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
