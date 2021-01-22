<template>
<div class="container">
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item>
  <div class="row mt-5">
    <div class="col-12">
      <h4 class="ml-2">Select Key Skills</h4>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-sm-6">
      <a-select
        v-decorator="[`Skill`,]"
                mode="tags" class="ml-2" style="width: 100%" placeholder="Type in to search or add new" @change="handleChange">
        <a-select-option v-for="Skill in skillSet" v-bind:key="Skill.skillSetName">
          {{Skill.skillSetName}}
        </a-select-option>
      </a-select>
    </div>
  </div>
      <div class="row btn btn-light ml-2 mt-2">
        <div class="col-12">
        <span v-for="skill in listSkill">
          <button class="mr-1">
            {{skill}} &times;
          </button>
        </span>
        </div>
      </div>
    </a-form-item>
  <hr>
  <div class="row float-right buttonss">
    <div class="col-12">
      <button class="btn btn-light px-5" @click="changed(5)">Go Back</button>
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
  name: "Skills",

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "Skill" }),
      skillSet:[],
      listSkill:[]
    };
  },

  beforeCreate() {
    axios.get('http://167.99.198.38:32001/list/skill/set', {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJFZ0NPRTB3ZDVEMjZfX0ZUZURmSmhNejlucndZYXM2czFGaE5EcHo2djFJIn0.eyJleHAiOjE2MTEyMzAwMTksImlhdCI6MTYxMTIyNjQxOSwianRpIjoiMTU2YWM2OTktZjNiNS00MDQ1LWIwYWEtMzJlZTNmNTQ0Mjc0IiwiaXNzIjoiaHR0cDovLzE3OC42Mi44Ny4xNjI6ODA4MC9hdXRoL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiI3ZDVhOTc2NC1kN2RiLTQ2ZTktYTdjMi01ZTdmNWZlOGUwMDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJzZXNzaW9uX3N0YXRlIjoiNDM3MmU1ZmUtOTA5Zi00YTQwLWE4MzYtMzk0NzMxYjBmM2RiIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiSk9CU0VFS0VSIl19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlRvbnkgQXlhYmFtIiwicHJlZmVycmVkX3VzZXJuYW1lIjoidG9ueUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiVG9ueSIsImZhbWlseV9uYW1lIjoiQXlhYmFtIiwiZW1haWwiOiJ0b255QGdtYWlsLmNvbSJ9.oriQrwqrbp8R94vQJcl2XuY4wlRYcCzelIAaZiSfz78B-ryUGQU3p4lpkRGZpdU_lrBRgUTB4kteIp5uHfb2XQ9iUnghKuwIIMR46jOBmDptk8P1sNHIVEYq-61XMHmfQrwyPnkY2ufxRVCWv8wV0onKrHSD6jepwvp8Opkm-4xZY5ZaRpAVzGAJwj-WRNVI3NPg5wOsCUgTzhXyguBAHko_uMoXug-oHOKiMStoyjQ068McwaoHKiu93SWZ6fxNS0IQwmw6Q4MG2KuKMiyCGNd8fjxPjEOXNsF1TUifyGHXq2zRHU4hbP92QBDShRaANqONZEK6pQLnQeM3e0PQig`
      }
    })
      .then((res) => {
        this.skillSet = res.data
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
          this.$store.commit('change', 7)

          axios
            .post('http://167.99.198.38:32001/add/job/seeker/skill/set')
            .then(response => (this.info = response.data.bpi))
            .catch(error => console.log(error))

        }
      });
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    },
    handleChange(value) {
      this.listSkill = value;
      console.log(`selected ${value}`);
    },
  },
}
</script>

<style scoped>
h4 {
  font-size: 18px;
}
.container {
  font-family: Open Sans;
}
.buttonss {
  font-size: 14px;
}
.close_button {
  border-radius: 4px;
}
.one {
  border-radius: 4px;
}
.btn_ {
  height: auto;
  width: auto;
}
.btn__ {
  border-radius: 8px;
}
</style>
