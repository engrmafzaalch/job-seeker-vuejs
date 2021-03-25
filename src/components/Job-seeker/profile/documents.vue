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
          `File`,
          { rules: [{ required: true, message: 'Please input your name' }] },
        ]"
        class="jumbotron"
      >
        <div class="row">
          <div class="col-12 text-center">
            <a href="#">
              <img src="./upload.png" class="h-40 w-auto" />
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
            <!-- <input type="file" id="files" ref="my_files" multiple :name="DropYourFileshere" :disabled="isSaving" @change="filesChange"
         
          accept="/*" class="input-file py-2"/> -->
          </div>
        </div>
        <div class="row">
          <div class="col-12 text-center">
            <h6 class="support py-2">SUPPORT: PDF, JPGS, DOCS</h6>
          </div>
        </div>
      </div>
      <hr />
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
      form: this.$form.createForm(this, { name: "File" }),
      selectedFiles: [],
    };
  },
  methods: {
    selectFile() {
      this.selectedFiles = this.$refs.file.files;
    },
    // filesChange:  ()=>{
    //    this.files = this.$refs.my_files.files;
    //    let file = this.files[0].name;
    //    console.log(file);
    // },
    changed: function (step) {
      this.$store.commit("change", step);
    },
    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    // Only show error after a field is touched.
    handleSubmit(e) {
      var that = this;
      console.log("Mar di billi", this.selectedFiles);
      e.preventDefault();

      this.form.validateFields((err, values) => {
        //   if (err)
        //   {
        //     this.$notification.open({
        //   message: 'Document Attachment',
        //   description:
        //     'Document is  not attached',
        //   onClick: () => {
        //     console.log('Notification Clicked!');
        //   }
        // });
        //     }
        if (!err) {
           const user =   JSON.parse(localStorage.getItem('user'))
         
          this.selectedFiles.user_id = user.user_id;
           console.log("Received user: ", this.selectedFiles);
          let formData = new FormData();
         
          formData.append("file", this.selectedFiles );

        
          this.$store.commit("change", 6);
          var data = that.selectedFiles;
          console.log('abcd', data)
          console.log("data body", data);
          var config = {
            method: "post",
            url: `${process.env.VUE_ROOT_URL}/certificates`,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "multipart/form-data",
            },
            data: this.selectedFiles,
            
          
          };
          console.log("my data" ,data)
          axios(config)
            .then(function (response) {
              console.log(JSON.stringify("my response",response));
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
