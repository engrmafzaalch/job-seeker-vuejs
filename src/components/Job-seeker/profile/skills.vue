<template>
<div class="container">
  <a-form :form="form" @submit="handleSubmit">
    <a-form-item>
  <div class="row mt-5">
    <div class="col-12">
      <h4>Select Key Skills</h4>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-md-6">
      <input
        v-decorator="[
                          `Skill`,
                          {
                            rules: [
                              {
                                required: true,
                                whitespace: true,
                                message: 'Please enter Degree Details in this field.',
                              },
                            ],
                          },
                        ]"
        type="text"
        class="form-control one"
        id="search"
        placeholder="Type in to Search or add new">
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-12">
    <a-select
      v-decorator="[
                          `Skills`,
                          {
                            rules: [
                              {
                                whitespace: true,
                                message: 'Please enter Degree Details in this field.',
                              },
                            ],
                          },
                        ]"
      mode="multiple"
      :default-value="['C', 'C++']"
      placeholder="Please select"
      @change="handleChange">
      <a-select-option v-for="i in 25" :key="(i + 9).toString(36) + i">
        {{ (i + 9).toString(36) + i }}
      </a-select-option>
    </a-select>
    </div>
  </div>
    </a-form-item>
  <hr>
  <div class="row float-right buttonss">
    <div class="col-sm-12">
      <button class="btn btn-light px-5" @click="changed(5)">Go Back</button>
      <button type="primary"
              html-type="submit"
              class="login-button-style btn btn-primary px-5"
              :disabled="hasErrors(form.getFieldsError())">Proceed</button>
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
  name: "Skills",

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "Skill Skills" }),
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
          this.$store.commit('change', 7)
        }
      });
    },
    onChange(date, dateString) {
      console.log(date, dateString);
    },
  },
}
</script>

<style scoped>
h4 {
  font-size: 18px;
}
.container {
  font-family: Open Sans;
}
.buttonss {
  font-size: 14px;
}
.close_button {
  border-radius: 4px;
}
.one {
  border-radius: 4px;
}
</style>
