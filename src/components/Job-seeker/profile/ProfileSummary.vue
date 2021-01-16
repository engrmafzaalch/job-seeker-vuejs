<template>
  <div class="container justify-content-center vh-100">
    <div class="mt-3">
      <a-form :form="form" @submit="handleSubmit">
        <a-form-item>
          <div class="form-group">
            <label for="profile-summery" class="profile">Profile Summery</label>
            <a-textarea
              v-decorator="[
                          `summary`,
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
              class="form-control" rows="6" id="profile-summery" name="text" placeholder="Enter Profile Summery here"></a-textarea>
          </div>
        </a-form-item>
        <a-form-item>
          <a-button  type="primary"
                     html-type="submit"
                     class="login-button-style float-right"
                     :disabled="hasErrors(form.getFieldsError())">Proceed</a-button>
        </a-form-item>
      </a-form>
    </div>
  </div>
</template>

<script>
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

export default {
  el: "ProfileSummary",

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "summary" }),
    };
  },

  methods: {
    userNameError() {
      const {getFieldError, isFieldTouched} = this.form;
      return isFieldTouched("summary") && getFieldError("summary");
    },
    // Only show error after a field is touched.
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    },
  }}
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
