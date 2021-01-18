<template>
  <div class="container">
    <a-form :form="form" @submit="handleSubmit">
    <div class="row justify-content-center mt-3">
      <div class="col-12">
        <h4>Enter Project Details</h4>
      </div>
    </div>
      <a-form-item>
      <div class="form-group">
        <div class="row my-4">
          <div class="col-6">
            <input v-decorator="[
                          `ProjectTitle`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please enter Project Title in this field.',
                              },
                            ],
                          },
                        ]"
                   type="text" class="form-control" id="project_title" placeholder="Project Title">
          </div>
          <div class="col-6">
            <select v-decorator="[
                          `EmployerName`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please enter Employer Name in this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="employer_name">
              <option value="Employer Name">Employer Name</option>
            </select>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-6">
            <select v-decorator="[
                          `ClientName`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please enter CLient Name in this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="client_name">
              <option value="Client Name">Client Name</option>
            </select>
          </div>
          <div class="col-6">
            <select v-decorator="[
                          `ProjectStatus`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please enter Project Status in this field.',
                              },
                            ],
                          },
                        ]"
                    type="text" class="form-control" id="project_status">
              <option value="Project Status">Project Status</option>
            </select>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-6">
            <a-date-picker v-decorator="[
                          `EndDate`,
                          {
                            rules: [
                              {

                                whitespace: true,
                                message: 'Please enter Academics in this field.',
                              },
                            ],
                          },
                        ]"
                           class="w-100" @change="onChange" placeholder="End Date"/>
          </div>
          <div class="col-6">
            <a-date-picker v-decorator="[
                          `StartDate`,
                          {
                            rules: [
                              {

                                whitespace: true,
                                message: 'Please enter Academics in this field.',
                              },
                            ],
                          },
                        ]"
                           class="w-100" @change="onChange" placeholder="Start Date"/>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-md-6">
            <a-textarea v-decorator="[
                          `EducationDetail`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please Enter Educational Details in this field.',
                              },
                            ],
                          },
                        ]"
                        class="form-control"
                        name="text"
                        id="education_details"
                        cols="" rows="6"
                        placeholder="Education Details"></a-textarea>
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
    <div class="row float-right">
      <div class="col-12">
        <a-button class="btn btn-light mr-3 px-5" @click="changed(3)">Go Back</a-button>
        <a-button type="primary"
                  html-type="submit"
                  class="login-button-style btn btn-primary px-5"
                  :disabled="hasErrors(form.getFieldsError())">Proceed</a-button>
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
  name: "project",

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "Degree College EndDate StratDate EducationDetail" }),
    };
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
          this.$store.commit('change', 5)
        }
      });
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  }
}
</script>

<style scoped>

</style>
