<template>
  <div class="container">
    <div class="row justify-content-center mt-3">
      <div class="col-12">
        <h4>Enter Experience Details</h4>
      </div>
    </div>
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
        <div class="form-group">
          <div class="row my-4">
            <div class="col-md-6">
              <a-input
                v-decorator="[
                          `EmployerName`,
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
                type="text" class="form-control" id="employer" placeholder="Employer Name"></a-input>
            </div>
            <div class="col-6">
              <select
                v-decorator="[
                          `JobTitle`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input Employer Name in this field.',
                              },
                            ],
                          },
                        ]"
                type="text" class="form-control" id="job_title">
                <option value="0">Job Title</option>
              </select>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-6">
              <select
                v-decorator="[
                          `City`,
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
                type="text" class="form-control" id="city">
                <option value="0">City</option>
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
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]"
                      type="text" class="form-control" id="country">
                <option value="0">Country</option>
              </select>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-6">
              <select v-decorator="[
                          `WorkType`,
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
                      type="text" class="form-control" id="work_type">
                <option value="0">Work Type</option>
              </select>
            </div>
            <div class="col-6">
              <a-input v-decorator="[
                          `Salary`,
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
                       type="text" class="form-control" id="salary" placeholder="Salary"></a-input>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-6">
              <a-input v-decorator="[
                          `EndDate`,
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
                       type="text" class="form-control" id="end_date" placeholder="End Date"></a-input>
            </div>
            <div class="col-6">
              <a-input v-decorator="[
                          `StartDate`,
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
                       type="text" class="form-control" id="start_date" placeholder="Start Date">

              </a-input>
            </div>
          </div>
          <div class="row my-4">
            <div class="col-md-6">
              <a-textarea v-decorator="[
                          `EducationDetails`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please input email this field.',
                              },
                            ],
                          },
                        ]" name="text" id="education_details" cols="" rows="6" placeholder="Education Details"></a-textarea>
            </div>
          </div>
          <div class="row justify-content-center text-center my-4">
            <div class="col-12">
              <a-button class="btn btn-light">
                Add More Education
              </a-button>
            </div>
          </div>
        </div>
      </a-form-item>
      <hr>
      <a-form-item>
        <div class="row float-right">
          <div class="col-12">
            <a-button class="btn btn-light mr-3 px-5"  @click="$emit('prevStep')">Go Back</a-button>
            <a-button
              type="primary"
              html-type="submit"
              class="login-button-style btn btn-primary px-5"
              :disabled="hasErrors(form.getFieldsError())">
              Proceed
            </a-button>
          </div>
        </div>
      </a-form-item>
    </a-form>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}
export default {
  name: "experience",

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "EmployerName JobTitle City Country WorkType Salary EndDate StartDate EducationDetails" }),
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
          this.$emit('stepSuccess', values)
        }
      });
    },
  },
}
</script>

<style scoped>
.form-control{
  height: 48px
}
</style>
