<template>
<div class="container ">
<!--<div>-->
<!--  <h3>Profile Summery</h3>-->
<!--</div>-->
  <div class="mt-3">
    <a-form :form="form" @submit="handleSubmit">
      <a-form-item>
      <div class="form-group row">
        <div class="col-md-10 col-lg-12 col-sm-10 ml-1">
        <label for="profile-summery" class="profile">Profile Summery</label>
        <a-textarea v-decorator="[`ProfileSummary`,]"
                    class="form-control"
                    rows="6"
                    id="profile-summery"
                    name="text"
                    placeholder="Enter Profile Summary here">
        </a-textarea>
        </div>
      </div>
      </a-form-item>
      <div>
      <button type="primary button"
              html-type="submit"
              class="login-button-style float-right btn btn-primary mt-5 px-5"
              :disabled="hasErrors(form.getFieldsError())">Proceed</button>
      </div>
    </a-form>
  </div>
</div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}
export default {
name: "ProfileSummary",

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "ProfileSummary" }),
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
          this.$store.commit('change', 2)
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
.form-control {
  border-radius: 4px;
}
.btn {
  border-radius: 4px;
}
.profile {
  font-size: 18px;
}
</style>
