<template>
  <div class="container">

    <div class="mt-3">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item>
          <div class="form-group row">
            <div class="col-md-10 col-lg-12 col-sm-10 ml-1">
              <label for="profile-summery" class="profile">Profile Summery</label>

              <a-textarea v-decorator="[`profileSummary`,

         { initialValue:profileSummary,rules: [{ required: true, message: 'Please input Profile summery' }] },
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
                    class="login-button-style btn btn-primary px-4 float-right"
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

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

export default {

  name: "profileSummary",

  data() {

    return {
      hasErrors,
      form: this.$form.createForm(this, {name: "profileSummary"}),
      profileSummary: '',
      isLoading: false
    };
  },
  beforeCreate() {
    const user = JSON.parse(localStorage.getItem('user'));
    let loader = this.$loading.show({
      loader: 'dots'
    });
    axios.get(`${process.env.VUE_ROOT_URL}/profile/${user.user_id}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })

      .then((res) => {
        this.profileSummary = res.data.profileSummary
        setTimeout(() => loader.hide(), 500)

      })
      .catch((error) => {
        console.error(error)
        setTimeout(() => loader.hide(), 500)
        if (res) {
          this.$notification.open({
            message: 'Profile Summery detail',
            description:
              'Something went wrong',
            onClick: () => {
            },
          });
        }


      })
  },

  methods: {
    openNotification() {
      this.$notification.open({
        key,
        message: 'Notification Title',
        description: 'description.',
      });
      setTimeout(() => {
        this.$notification.open({
          key,
          message: 'New Title',
          description: 'New description.',
        });
      }, 1000);
    },

    changed: function (step) {
      this.$store.commit('change', step)

    },

    userNameError() {
      const {getFieldError, isFieldTouched} = this.form;
      return isFieldTouched("userName") && getFieldError("userName");
    },
    // Only show error after a field is touched.
    handleSubmit(e) {
      e.preventDefault();

      this.form.validateFields((err, values) => {
        if (err) {
          this.$notification.open({
            message: 'Profile Summery detail',
            description:
              'Please Enter the required field',

          });
        }
        if (!err) {


          const user = JSON.parse(localStorage.getItem('user'))
          values.user_id = user.user_id;
          this.$store.commit('change', 2)
          var data = values
          var config = {
            method: 'post',
            url: `${process.env.VUE_ROOT_URL}/profile`,
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json'
            },
            data: data

          };
          let loader = this.$loading.show({
            loader: 'dots'
          });
          axios(config)
            .then(function (response) {

              setTimeout(() => loader.hide(), 1000)


            })
            .catch(function (error) {

              setTimeout(() => loader.hide(), 1000)

            });

          var config1 = {
            method: 'put',
            url: `${process.env.VUE_ROOT_URL}/profile/${user.user_id}`,
            headers: {
              'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json'
            },
            data: data

          };
          axios(config1)
            .then(function (response) {

              setTimeout(() => loader.hide(), 1000)


            })
            .catch(function (error) {

              setTimeout(() => loader.hide(), 1000)

            });


        }
      });

    },
    onChange(date, dateString) {
    },


  },


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
