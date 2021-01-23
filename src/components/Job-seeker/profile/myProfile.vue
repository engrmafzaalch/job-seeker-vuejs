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
            <a-input v-decorator="[`Name`,]"
                     type="text" class="form-control" id="name" placeholder="Name"></a-input>
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`EmailAddress`,]"
                    type="text" class="form-control" id="email_address">
              <option value="" disabled selected hidden>Email Address</option>
              <option value="sikandarcapital@gmail.com">sikandarcapital@gmail.com</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <select v-decorator="[`City`,]"
                    type="text" class="form-control" id="city">
              <option value="" disabled selected hidden>City</option>
              <option value="Lahore">Lahore</option>
            </select>
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`Country`,]"
                    type="text" class="form-control" id="country">
              <option value="" disabled selected hidden>Country</option>
              <option v-for="country in countries" >{{country.countryName}}</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <a-input v-decorator="[`MobileNumber`,]"
                     type="text" class="form-control" id="mobile_number" placeholder="Mobile Number"></a-input>
          </div>
          <div class="col-sm-6">
            <a-input v-decorator="[`LinkedIn`,]"
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
            <select v-decorator="[`Day`,]"
                    class="form-control" id="day">
              <option value="" disabled selected hidden>Day</option>
              <option value="1">1</option>
            </select>
          </div>
          <div class="col-sm-4">
            <select v-decorator="[`Month`,]"
                    class="form-control" id="month">
              <option value="" disabled selected hidden>Month</option>
              <option value="January">January</option>
            </select>
          </div>
          <div class="col-sm-4">
            <select v-decorator="[`Year`,]"
                    type="text" class="form-control" id="year">
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
                          `NYSC`,
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
        <a-button class="btn btn-light px-3" @click="changed(6)">Go Back</a-button>
        <a-button
          type="primary"
          html-type="submit"
          class="btn btn-primary px-3"
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
      form: this.$form.createForm(this, { name: "Name EmailAddress City Country MobileNumber LinkedIn Day Month Year NYSC" }),
      countries : []
    };
  },

  beforeCreate() {
    axios.get('http://167.99.198.38:32001/list/countries', {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJFZ0NPRTB3ZDVEMjZfX0ZUZURmSmhNejlucndZYXM2czFGaE5EcHo2djFJIn0.eyJleHAiOjE2MTEyMzAwMTksImlhdCI6MTYxMTIyNjQxOSwianRpIjoiMTU2YWM2OTktZjNiNS00MDQ1LWIwYWEtMzJlZTNmNTQ0Mjc0IiwiaXNzIjoiaHR0cDovLzE3OC42Mi44Ny4xNjI6ODA4MC9hdXRoL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiI3ZDVhOTc2NC1kN2RiLTQ2ZTktYTdjMi01ZTdmNWZlOGUwMDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJzZXNzaW9uX3N0YXRlIjoiNDM3MmU1ZmUtOTA5Zi00YTQwLWE4MzYtMzk0NzMxYjBmM2RiIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiSk9CU0VFS0VSIl19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlRvbnkgQXlhYmFtIiwicHJlZmVycmVkX3VzZXJuYW1lIjoidG9ueUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiVG9ueSIsImZhbWlseV9uYW1lIjoiQXlhYmFtIiwiZW1haWwiOiJ0b255QGdtYWlsLmNvbSJ9.oriQrwqrbp8R94vQJcl2XuY4wlRYcCzelIAaZiSfz78B-ryUGQU3p4lpkRGZpdU_lrBRgUTB4kteIp5uHfb2XQ9iUnghKuwIIMR46jOBmDptk8P1sNHIVEYq-61XMHmfQrwyPnkY2ufxRVCWv8wV0onKrHSD6jepwvp8Opkm-4xZY5ZaRpAVzGAJwj-WRNVI3NPg5wOsCUgTzhXyguBAHko_uMoXug-oHOKiMStoyjQ068McwaoHKiu93SWZ6fxNS0IQwmw6Q4MG2KuKMiyCGNd8fjxPjEOXNsF1TUifyGHXq2zRHU4hbP92QBDShRaANqONZEK6pQLnQeM3e0PQig`
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
        }
      });
    },
  },

}
</script>

<style scoped>
@media screen{
select {
  margin-top: 5px;
}
  input {
    margin-top: 5px;
    height: 38px;
  }
h6 {
  margin-top: 10px;
}
/*h4 {*/
/*  margin-top: 10px;*/
/*}*/
}
@media screen and (max-width: 260px){
.btn-primary {
  margin-top: 5px;
}
  button {
    width: 100%;
  }
}
</style>
