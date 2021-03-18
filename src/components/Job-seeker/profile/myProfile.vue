<template>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12">
        <h4>Enter Personal Information</h4>
      </div>
    </div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
      <div class="form-group">
        <div class="row">
          <div class="col-sm-6">
            <a-input v-decorator="[`name`,]"
                     type="text" class="form-control" id="name" placeholder="Name"></a-input>
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`emailAddress`,]"
                    type="text" class="form-control" id="email_address">
              <option value="" disabled selected hidden>Email Address</option>
              <option value="none">none</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <select v-decorator="[`city`,]"
                    type="text" class="form-control" id="city">
              <option value="" disabled selected hidden>City</option>
              <option value="Lahore">Lahore</option>
            </select>
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`country`,]"
                    type="text" class="form-control" id="country">
              <option value="" disabled selected hidden>Country</option>
              <option v-for="country in countries" >{{country.countryName}}</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <a-input v-decorator="[`mobileNumber`,]"
                     type="text" class="form-control" id="mobile_number" placeholder="Mobile Number"></a-input>
          </div>
          <div class="col-sm-6">
            <a-input v-decorator="[`linkedIn`,]"
                     type="text" class="form-control" id="linked_in" placeholder="Linked-In Profile URL"></a-input>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h6>Date of Birth</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <select v-decorator="[`day`,]"
                    class="form-control one" id="day">
              <option value="" disabled selected hidden>Day</option>
              <option value="1">1</option>
            </select>
          </div>
          <div class="col-sm-4">
            <select v-decorator="[`month`,]"
                    class="form-control one two" id="month">
              <option value="" disabled selected hidden>Month</option>
              <option value="January">January</option>
            </select>
          </div>
          <div class="col-sm-4">
            <select v-decorator="[`year`,]"
                    type="text" class="form-control one two" id="year">
              <option value="" disabled selected hidden>Year</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h6>N. Y. S. C. Number</h6>
          </div>
        </div>
          <div class="row">
            <div class="col-md-6">
              <a-input v-decorator="[
                          `nysc`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input N. Y. S. C Number this field.',
                              },
                            ],
                          },
                        ]"
                       type="text" class="form-control" id="nysc" placeholder="A00 - 0 - 0 - 0 - 0 - 0 - 0 - 0"></a-input>
            </div>
          </div>
      </div>
      </a-form-item>

    <hr>
    <div class="row float-right">
      <div class="col-12">
        <a-button class="btn btn-light px-5" @click="changed(6)">Go Back</a-button>
        <a-button
          type="primary"
          html-type="submit"
          class="btn btn-primary px-5"
          :disabled="hasErrors(form.getFieldsError())">
          Complete Profile
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
  name: "myProfile",

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "name emailAddress city country mobileNumber linkedIn day month year nysc" }),
      countries : []
    };
  },

  beforeCreate() {
    axios.get('http://192.241.137.124:8000/api/v1/countries', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        this.countries = res.data
        console.log("data", res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  },

  methods: {
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
          this.$store.commit('change', 8)
           var data = values

          console.log("data body", data)
         var config = {
            method: 'post',
            url: 'http://192.241.137.124:8000/api/v1/profile',
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
  },

}
</script>

<style scoped>
.one {
  padding-right: 0px;
  padding-left: 15px;
  margin-left: 0px;
  margin-right: 0px;
}
.two {
  padding-right: 15px;
  padding-left: 10px;
}
@media screen{
select {
  margin: 10px 0px;
}
  input {
    margin: 10px 0px;
    height: 38px;
  }
h6 {
  margin-top: 10px;
}
/*h4 {*/
/*  margin-top: 10px;*/
/*}*/
}
@media screen and (max-width: 391px){
.btn-primary {
  margin-top: 5px;
}
  button {
    width: 100%;
  }
}
</style>
