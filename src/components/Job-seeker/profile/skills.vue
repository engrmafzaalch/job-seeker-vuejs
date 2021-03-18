<template>
<div class="container">
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item>
  <div class="row">
    <div class="col-12">
      <h4 class="">Select Key Skills</h4>
    </div>
  </div>
  <div class="row">
    <div class="col-sm-7">
      <a-select
        v-decorator="[`Skill`,]"
                mode="tags" class="py-3" style="width: 100%" placeholder="Type in to search or add new" @change="handleChange">
        <a-select-option v-for="Skill in skillSet" v-bind:key="Skill.skillSetName">
          {{Skill.skillSetName}}
        </a-select-option>
      </a-select>
    </div>
  </div>
      <div class="row">
        <div class="col-12">
        <span v-for="skill in listSkill">
          <button class="btn btn-light rounded mr-1">
            {{skill}} &times;
          </button>
        </span>
        </div>
      </div>
    </a-form-item>
  <hr>
  <div class="row float-right">
    <div class="col-12">
      <button class="btn btn-light buttonss px-5" @click="changed(5)">Go Back</button>
      <button type="primary"
              html-type="submit"
              class="btn btn-primary buttonss px-5"
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
    axios.get('192.241.137.124:8000/api/v1/skills', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then((res) => {
        this.skillSet = res.data
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
            var data = values

          console.log("data body", data)
         var config = {
            method: 'post',
            url: 'http://192.241.137.124:8000/api/v1/skill',
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

          // axios.post('http://192.241.137.124:8000/api/v1/skill')
          //   .then(response => (this.info = response.data))
          //   .catch(error => console.log(error))

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
@media screen and (max-width: 351px){
.buttonss {
  width: 100%;
  margin-bottom: 5px;
}
}
</style>
