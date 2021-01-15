<template>
  <div class="width-100 mb-100">
    <a-form layout="inline" :form="form" @submit="handleSubmit">
      <div class="row">
        <div class="col-2"></div>
        <div class="col-8">
          <div class="profile-summary-text">Profile Summary</div>
          <div class="display-flex width-100 text-align-initial">
            <a-form-item
              :validate-status="profileSummaryError() ? 'error' : ''"
              :help="profileSummaryError() || ''"
              class="width-100 mr-0"
            >
              <a-textarea
                style="width: 100%"
                :rows="4"
                class="searchbox-style width-100"
                v-decorator="[
                  'profile_summary',
                  {
                    rules: [
                      {
                        required: true,
                        message: 'Please input your profile summary!',
                      },
                    ],
                  },
                ]"
                placeholder="Enter profile summary here"
              >
              </a-textarea>
            </a-form-item>
          </div>

          <hr />

          <div class="text-align-end">
            <a-form-item class="mr-0">
              <a-button
                type="primary"
                html-type="submit"
                :disabled="hasErrors(form.getFieldsError())"
                class="search-button-style"
              >
                Proceed
              </a-button>
            </a-form-item>
          </div>
        </div>
      </div>
    </a-form>
  </div>
</template>

<script>
import axios from "axios";
import { mapState } from "vuex";
import loader from "../../helpers/loader";
import httpClient from "../../../utils/httpclient";
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}
export default {
  props: ["nextStep"],
  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, {
        name: "registration_profile_summary",
      }),
    };
  },
  mounted() {
    this.$nextTick(() => {
      // To disabled submit button at the beginning.
      this.form.validateFields();
    });
  },
  methods: {
    // Only show error after a field is touched.
    profileSummaryError() {
      const { getFieldError, isFieldTouched } = this.form;
      return (
        isFieldTouched("profile_summary") && getFieldError("profile_summary")
      );
    },
    // Only show error after a field is touched.
    passwordError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("password") && getFieldError("password");
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        let obj = {
          profile_summary: values.profile_summary,
        };
        console.log(err);
        if (!err) {
          axios
            .post("http://167.99.198.38:32001/job/seeker/profile_summary", obj)
            .then((response) => {
              console.log(response);
            })
            .catch((error) => {
              console.log(error);
            });
          this.nextStep();
          console.log("Received values of form: ", values);
        }
      });
    },
  },
};
</script>

<style>
.text-align-initial {
  text-align: initial;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  margin-left: 10px;
  width: 100%;
  border-top: 1px solid #f0f1f3;
  margin: 1em 0;
  padding: 0;
}
.text-align-end {
  text-align: end;
}
.ant-col {
  width: 100%;
}
.display-flex {
  display: flex;
}
.mr-0 {
  margin-right: 0px;
}
.width-100 {
  width: 100%;
}
.mt-45px {
  margin-top: 45px;
}
.mb-100 {
  margin-bottom: 50px;
}
.searchbox-style {
  /* width: 700px; */
  /* height: 48px; */
  border-radius: 4px;
  background: #ffffff;
  color: #8b90a0;
  font-family: SF UI Display;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
}
.profile-summary-text {
  text-align: initial;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  color: #505565;
  margin-bottom: 30px;
}
.search-button-style {
  background: #0385f3;
  border-radius: 4px;
  width: 160px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
}
</style>