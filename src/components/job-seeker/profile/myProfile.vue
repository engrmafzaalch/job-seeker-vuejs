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
            <a-input v-decorator="[`name`,
              { initialValue:name, rules: [{ required: true, message: '' }] } ]"
                     type="text" class="form-control" id="name" placeholder="Name"></a-input>
          </div>
          <div class="col-sm-6">
             <a-input v-decorator="[`emailAddress`,
             { initialValue:emailAddress, rules: [{ required: true, message: '' }] }
             ]"
                     type="text" class="form-control" id="email" placeholder="Email"></a-input>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <select v-decorator="[`city`,
             { initialValue:city, rules: [{ required: true, message: '' }] }]"
                     class="form-control" id="city">
              <option value="" disabled selected hidden>City</option>
              <option value="Lahore">Lahore</option>
            </select>
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`countries`,
            { initialValue:countries }]"
                    class="form-control" id="country">
              <option value="" disabled selected hidden>Country</option>
              <!-- <option v-for="country in countries" >{{country.countryName}}</option> -->
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <a-input v-decorator="[`mobileNo`,
            { initialValue:mobileNo, rules: [{ required: true, message: '' }] }]"
                     type="" class="form-control" id="mobile_number" placeholder="Mobile Number"></a-input>
          </div>
          <div class="col-sm-6">
            <a-input v-decorator="[`linkedIn`,
            { initialValue:linkedIn, rules: [{ required: true, message: '' }] }]"
                     type="url" class="form-control" id="linked_in" placeholder="Linked-In Profile URL"></a-input>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h6>Date of Birth</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-4">
            <select v-decorator="[`day`,
            { initialValue:day, rules: [{ required: true, message: '' }] }]"
                    class="form-control one" id="day">
              <option value="" disabled selected hidden>Day</option>
              <option value="1">1</option>
            </select>
          </div>
          <div class="col-sm-4">
            <select v-decorator="[`month`,
            { initialValue:month, rules: [{ required: true, message: '' }] }]"
                    class="form-control one two" id="month">
              <option value="" disabled selected hidden>Month</option>
              <option value="January">January</option>
            </select>
          </div>
          <div class="col-sm-4">
            <select v-decorator="[`year`,
            { initialValue:year, rules: [{ required: true, message: '' }] }]"
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
              <a-input v-decorator="[`nysc`,
              { initialValue:nysc, rules: [{ required: true, message: '' }] } ]"
                       type="number" class="form-control" id="nysc" placeholder="A00 - 0 - 0 - 0 - 0 - 0 - 0 - 0"></a-input>
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
      form: this.$form.createForm(this, { name: "name emailAddress city countries mobileNumber linkedIn day month year nysc" }),
      countries : [],
      city: '',
      country: '',
      createdAt: '',
      day: '',
      month: '',
      year: '',
      linkedIn: '',
      mobileNo: '',
      name: '',
      emailAddress: '',
      nysc: '',
      updatedAt:''

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
        this.name = res.data.name;
        this.linkedIn = res.data.linkedIn;
        this.nysc = res.data.nysc;
        this.mobileNo = res.data.mobileNo;
        this.city = res.data.city;
        this.country = res.data.country;
        this.dob = res.data.dob;
        this.name = res.data.name;

      })
      .catch((error) => {
        console.error(error)
      })

    axios.get(`${process.env.VUE_ROOT_URL}/countries`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        this.countries = res.data
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
        if (err)
        {
          this.$notification.open({
        message: 'Profile detail',
        description:
          'Please enter required field',

      });
        }
        if (!err) {
          this.$notification.open({
        message: 'Profile detail',
        description:
          'Profile details are added',

      });
          this.$store.commit('change', 8)
           var data = values

          const user =   JSON.parse(localStorage.getItem('user'))

         var config = {
            method: 'put',
            url: `${process.env.VUE_ROOT_URL}/profile/${user.user_id}`,
            headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json'
            },
            data : data
          };
          axios(config)
            .then(function (response) {

            })
            .catch(function (error) {
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
