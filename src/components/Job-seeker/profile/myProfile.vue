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
                                required: true,
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
                                required: true,
                                whitespace: true,
                                message: 'Please input Email Address in this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="email_address">
              <option value="Email Address">Email Address</option>
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
                                required: true,
                                whitespace: true,
                                message: 'Please input City this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="city">
              <option value="City">City</option>
            </select>
          </div>
          <div class="col-6">
            <select v-decorator="[
                          `Country`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input Country this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="country">
              <option value="Country">Country</option>
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
                                required: true,
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
                                required: true,
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
                          `day`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]"
                    class="form-control" id="day">
              <option value="Day">Day</option>
            </select>
          </div>
          <div class="col-4">
            <select v-decorator="[
                          `month`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]"
                    class="form-control" id="month">
              <option value="Month">Month</option>
            </select>
          </div>
          <div class="col-4">
            <select v-decorator="[
                          `year`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="year">
              <option value="Year">Year</option>
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
                                required: true,
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
        <a-button class="btn btn-light mr-3 px-5">Go Back</a-button>
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
      form: this.$form.createForm(this, { name: "degree college endDate stratdate educationDetail" }),
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
