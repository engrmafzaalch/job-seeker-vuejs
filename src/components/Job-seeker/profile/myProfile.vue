<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
      <div class="col-12">
        <h4>Enter Personal Information</h4>
      </div>
    </div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
      <div class="form-group">
        <div class="row my-4">
          <div class="col-6">
            <a-input v-decorator="[
                          `Name`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input Name in this field.',
                              },
                            ],
                          },
                        ]"
                     type="text" class="form-control" id="name" placeholder="Name"></a-input>
          </div>
          <div class="col-6">
            <select v-decorator="[
                          `EmailAddress`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input Email Address in this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="email_address">
              <option value="" disabled selected hidden>Email Address</option>
              <option value="sikandarcapital@gmail.com">sikandarcapital@gmail.com</option>
            </select>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-6">
            <select v-decorator="[
                          `City`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input City this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="city">
              <option value="" disabled selected hidden>City</option>
              <option value="Lahore">Lahore</option>
            </select>
          </div>
          <div class="col-6">
            <select v-decorator="[
                          `Country`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input Country this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="country">
              <option value="" disabled selected hidden>Country</option>
              <option value="Nigeria">Nigeria</option>
            </select>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-6">
            <a-input v-decorator="[
                          `MobileNumber`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input Mobile Number this field.',
                              },
                            ],
                          },
                        ]"
                     type="text" class="form-control" id="mobile_number" placeholder="Mobile Number"></a-input>
          </div>
          <div class="col-6">
            <a-input v-decorator="[
                          `LinkedIn`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input LinkedIN Profile this field.',
                              },
                            ],
                          },
                        ]"
                     type="text" class="form-control" id="linked_in" placeholder="Linked-In Profile URL"></a-input>
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h6>Date of Birth</h6>
          </div>
        </div>
        <div class="row my-2">
          <div class="col-4">
            <select v-decorator="[
                          `Day`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please select Day in this field.',
                              },
                            ],
                          },
                        ]"
                    class="form-control" id="day">
              <option value="" disabled selected hidden>Day</option>
              <option value="1">1</option>
            </select>
          </div>
          <div class="col-4">
            <select v-decorator="[
                          `Month`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]"
                    class="form-control" id="month">
              <option value="" disabled selected hidden>Month</option>
              <option value="January">January</option>
            </select>
          </div>
          <div class="col-4">
            <select v-decorator="[
                          `Year`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="year">
              <option value="" disabled selected hidden>Year</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
        <div class="row py-2">
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
        <a-button class="btn btn-light mr-3 px-5" @click="changed(6)">Go Back</a-button>
        <a-button
          type="primary"
          html-type="submit"
          class="login-button-style btn btn-primary px-5"
          :disabled="hasErrors(form.getFieldsError())">
          Complete Profile
        </a-button>
      </div>
    </div>
    </a-form>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

export default {
  name: "myProfile",

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "Name EmailAddress City Country MobileNumber LinkedIn Day Month Year NYSC" }),
    };
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

</style>
