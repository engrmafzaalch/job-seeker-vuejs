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
        v-decorator="[`skills`,
        { initialValue:pastData, rules: [{ required: true, message: 'Please enter the skills' }] }, ]"
                mode="tags" class="py-3" style="width: 100%" placeholder="Type in to search or add new" @change="handleChange">
        <a-select-option v-for="Skill in skillSet" v-bind:key="Skill.skillSetName">
          {{Skill.skillSetName}}
        </a-select-option>

      </a-select>

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
      form: this.$form.createForm(this, { name: "skills" }),
      skillSet:[],
      listSkill:[],
      pastData:[]
    };
  },

  beforeCreate() {
    const user = JSON.parse(localStorage.getItem("user"));
    axios.get(`${process.env.VUE_ROOT_URL}/skills/${user.user_id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
      }
    })
      .then((res) => {
        this.pastData = res.data.skills
        console.log("my skills are here" , res.data.skills)
        console.log("YO YO ", pastData);
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
         if (err)
        {
          this.$notification.open({
        message: 'Key Skills',
        description:
          'Please fill the required field',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
        }
        if (!err) {
           this.$notification.open({
        message: 'Skill',
        description:
          'Skills submitted',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
          console.log("Received values of form: ", values);
          this.$store.commit('change', 7)
          const user =   JSON.parse(localStorage.getItem('user'))
          values.user_id = user.user_id;
            var data = values


          console.log("data body", data)
         var config = {
            method: 'post',
            url: `${process.env.VUE_ROOT_URL}/skill`,
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

          var config1 = {
            method: 'put',
            url: `${process.env.VUE_ROOT_URL}/skills/${user.user_id}`,
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json'
            },
            data : data
          };
          axios(config1)
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
