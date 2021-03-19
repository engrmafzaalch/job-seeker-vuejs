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
        <a-textarea v-decorator="[`profileSummary`,]"
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
          <a-button type="primary"
                    html-type="submit"
                    class="login-button-style btn btn-primary px-4"
                    :disabled="hasErrors(form.getFieldsError())">Proceed
          </a-button>
      </div>
    </a-form>
  </div>
</div>
</template>

<script>
import axios from "axios";
console.log('ye link h ' , process.env.VUE_ROOT_URL);
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}
export default {
name: "profileSummary",

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "profileSummary" }),
    };
  },

  methods:{
    changed: function(step) {
      this.$store.commit('change', step)
    },

    userNameError() {
      const { getFieldError, isFieldTouched } = this.form;
      return isFieldTouched("username") && getFieldError("username");
    },
    // Only show error after a field is touched.
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
          this.$store.commit('change', 2)
     var data = values
      var config = {
        method: 'post',
        url: 'http://192.241.137.124:8000/api/v1/profile',
        headers: {
          'Authorization':  `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        data : data
      };
       axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));

        })
        .catch(function (error) {
          console.log(error);
        });
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
.form-control {
  border-radius: 4px;
}
.btn {
  border-radius: 4px;
}
.profile {
  font-size: 18px;
}
label {
  font-weight: bold;
}
.login-button-style {
  font-size: 14px;
}
</style>
