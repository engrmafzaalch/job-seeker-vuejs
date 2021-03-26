<template>
<div class="container">
<!--<div>-->
<!--  <h3>Profile Summery</h3>-->
<!--</div>-->
  <div class="mt-3">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
      <div class="form-group row">
        <div class="col-md-10 col-lg-12 col-sm-10 ml-1">
        <label for="profile-summery" class="profile">Profile Summery</label>
        <a-textarea v-decorator="[`profileSummary`,
         { rules: [{ required: true, message: 'Please input Profile summery' }] },
        ]"
                    class="form-control"
                    rows="6"
                    id="profile-summery"
                    name="text"
                    placeholder="Enter Profile Summary here"
                     >
        </a-textarea>
        </div>
      </div>
      </a-form-item>
      <div>
          <a-button type="primary"
                    html-type="submit"
                    class="login-button-style btn btn-primary px-4"
                    :disabled="hasErrors(form.getFieldsError())"
          >Proceed
          </a-button>
      </div>
    </a-form>
  </div>
</div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import axios from "axios";
console.log('ye link h ' , process.env.VUE_ROOT_URL);
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}
export default {

name: "profileSummary",

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "profileSummary" }),

    };
  },
  beforeCreate() {
    const user = JSON.parse(localStorage.getItem('user'));
    axios.get(`${process.env.VUE_ROOT_URL}/profile/${user.user_id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        this.summery = res.data
        console.log("data of profile", res.data)
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
        if (err){
            this.$notification.open({
        message: 'Profile Summery detail',
        description:
          'Please Enter the required field',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
        }
        if (!err) {

          console.log('open was clicked, will auto hide');
          let loader = this.$loading.show({
            loader: 'dots'
          });
          setTimeout(() => loader.hide(), 1000)

          this.$notification.open({
        message: 'Profile Summery detail',
        description:
          'Profile Summery details are added',
        onClick: () => {
          console.log('Notification Clicked!');

        },
      });
    const user =   JSON.parse(localStorage.getItem('user'))
          console.log("Received user: ", values);
          values.user_id = user.user_id;
          console.log("Received user updated: ", values);
          this.$store.commit('change', 2)
     var data = values
     console.log("User ",data);
      var config = {
        method: 'post',
        url: `${process.env.VUE_ROOT_URL}/profile`,
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

    },
    onChange(date, dateString) {
      console.log(date, dateString);
    },

    // open() {
    //   console.log('open was clicked, will auto hide');
    //   let loader = this.$loading.show({
    //     loader: 'dots'
    //   });
    //   setTimeout(() => loader.hide(), 1000)
    // },
    // show() {
    //   console.log('show was clicked, click to hide');
    //   // do AJAX here
    //   this.visible = true
    // }

  },

  // mounted () {
  //
  // }

}
</script>

<style scoped>
.form-control {
  border-radius: 4px;
}
.btn {
  border-radius: 4px;
}
.profile {
  font-size: 18px;
}
label {
  font-weight: bold;
}
.login-button-style {
  font-size: 14px;
}
</style>
