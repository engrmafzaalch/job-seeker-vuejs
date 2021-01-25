<template>
  <div class="container">
    <a-form :form="form" @submit="handleSubmit">
    <div class="row justify-content-center mt-3">
      <div class="col-12">
        <h4 class="">Enter Project Details</h4>
      </div>
    </div>
      <a-form-item>
      <div class="form-group">
        <div class="row">
          <div class="col-sm-6">
            <input v-decorator="[`ProjectTitle`,]"
                   type="text" class="my-2 form-control" id="project_title" placeholder="Project Title">
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`EmployerName`,]"
                    type="text" class="my-2 form-control" id="employer_name">
              <option value="" disabled selected hidden>Employer Name</option>
              <option value="JS Labs">JS Labs</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <select v-decorator="[`ClientName`,]"
                    type="text" class="my-2 form-control" id="client_name">
              <option value="" disabled selected hidden>Client Name</option>
              <option value="Usha">Usha</option>
            </select>
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`ProjectStatus`,]"
                    type="text" class="my-2 form-control" id="project_status">
              <option value="" disabled selected hidden>Project Status</option>
              <option value="On Going">On Going</option>
            </select>
          </div>
        </div>
        <div class="row date">
          <div class="col-sm-6">
            <a-date-picker v-decorator="[`EndDate`,]"
                           class="my-2 w-100" @change="onChange" placeholder="End Date"/>
          </div>
          <div class="col-sm-6">
            <a-date-picker v-decorator="[`StartDate`,]"
                           class="my-2 w-100" @change="onChange" placeholder="Start Date"/>
          </div>
        </div>
        <div class="row Education">
          <div class="col-md-6">
            <a-textarea v-decorator="[`EducationDetail`,]"
                        class="my-2 form-control"
                        name="text"
                        id="education_details"
                        cols="" rows="6"
                        placeholder="Education Details"></a-textarea>
          </div>
        </div>
        <div class="row justify-content-center text-center my-2">
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
        <a-button class="login-button-style btn btn-light px-5" @click="changed(3)">Go Back</a-button>
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
          let EndDate = values.EndDate.toDate()
          let StartDate = values.StartDate.toDate()
          values.EndDate = EndDate
          values.StartDate = StartDate
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
@media screen and (min-width: 572px){
.date {
  margin-top: 10px;
}
  .Education {
    margin-top: 5px;
  }
}
@media screen and (max-width: 337px){
  .login-button-style{
    width: 100%;
    margin-bottom: 5px;
  }
}
</style>
