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
       <div v-if="(fileList)" class="card">
      <div class="card-header">List of Files</div>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="(file, index) in fileList"
          :key="index"
        >
        <a :href="file.path">{{ file.name }}</a>
        </li>
      </ul>
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
      fileList:null
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
        console.log(res.data);
        this.fileList = res.data.certificates;
        console.log("res of get req" ,this.fileList)

      })
      .catch((error) => {
        console.error(error);
      });
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
      console.log("THESE FILES", this.selectedFiles);
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
          const user = JSON.parse(localStorage.getItem("user"));
          console.log(this);
          this.selectedFiles.user_id = user.user_id;
          //  console.log("Received user: ", this.selectedFiles);
          // let formData = new FormData();
          //  console.log("theses are formData" , formData)

          this.$store.commit("change", 6);
          // var data = that.selectedFiles;
          // console.log("data body", data);

          let formData = new FormData();
          for (var i = 0; i < this.selectedFiles.length; i++) {
            let file = this.selectedFiles[i];
            formData.append("docs", file);
          }
          var config = {
            method: "post",
            url: `${process.env.VUE_ROOT_URL}/certificates/0fd909cb-7bb8-4e6f-b9d2-166776cd552c`,
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              "Content-Type": "multipart/form-data",
            },
            data: formData,
          };
          // console.log("my data" ,data)
          axios(config)
            .then(function (response) {
              console.log(JSON.stringify("my response", response));
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
