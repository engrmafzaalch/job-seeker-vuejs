<template>
  <div class="container education">
    <form @submit.prevent="onSubmit" @reset="onReset">
      <div class="row justify-content-center mt-3">
        <div class="form-group ml-1 col-12">
          <h4 class="pl-2">Enter Education Details </h4>
          <div
            v-for="(ticket, i) in education"
            :key="i"
            :set="(v = $v.education.$each[i])"
          >
            <div v-if="(i>0)" class="cross" style="cursor:pointer;" @click="deleteItem(i)">x</div>
            <h4 v-if="(i>0)" class="pl-2">Enter Education Details {{ i + 1 }}</h4>
            <div class="row">
              <div class="col-sm-6">
                <a-input v-decorator="[`courseOfStudy`,]"
                         v-model="ticket.courseOfStudy"
                         type="text" class="form-control my-2 py-3" id="courseOfStudy" placeholder="DegreeCertification"
                         :class="{ 'is-invalid': v.courseOfStudy.$error }"></a-input>
              </div>
              <div class="col-sm-6">
                <a-input v-decorator="[`institutionName`,]"
                         v-model="ticket.institutionName"
                         type="text" class="form-control my-2 py-3" id="institutionName"
                         placeholder="CollegeUniversityAcademy"
                         :class="{ 'is-invalid': v.institutionName.$error }"></a-input>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <a-date-picker v-decorator="[`completionDate`,]"
                               v-model="ticket.completionDate"
                               id="completionDate"
                               class="my-2 w-100" placeholder="End Date"
                               :class="{ 'is-invalid': v.completionDate.$error }"
                ></a-date-picker>
                <div class="invalid-feedback">
                  <div v-if="!v.startDate.required">Date is required</div>
                </div>
              </div>
              <div class="col-sm-6">
                <a-date-picker v-decorator="[`startDate`,]"
                               v-model="ticket.startDate"
                               id="startDate"
                               class="my-2 w-100" placeholder="Start Date"
                               :class="{ 'is-invalid': v.startDate.$error }"
                ></a-date-picker>
                <div class="invalid-feedback">
                  <div v-if="!v.startDate.required">Date is required</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <a-textarea v-decorator="[`educationDetail`,]"
                            v-model="ticket.educationDetail"
                            class="my-2 form-control"
                            name="text"
                            id="education_details"
                            cols="" rows="6"
                            placeholder="Education Detail"
                            :class="{ 'is-invalid': v.educationDetail.$error }"></a-textarea>
              </div>
            </div>
          </div>
        </div>
        <button class="btn btn-light mx-auto" @click="onChangeTickets(1)" type="button">Add more Education</button>
      </div>
      <hr>
      <div class="row float-right">
        <button class="login-button-style btn btn-light px-5" @click="changed(1)">Go Back</button>
        <button class="login-button-style btn btn-primary px-5" @click="openNotification">Proceed</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import {required} from "vuelidate/lib/validators";

export default {
  data() {
    return {
      education: [{
        user_id: '',
        completionDate: '',
        startDate: '',
        courseOfStudy: '',
        institutionName: '',
        educationDetail: ''
      }]
    };
  },
  async beforeCreate() {
    try{
      const user = JSON.parse(localStorage.getItem('user'));
      let loader = this.$loading.show({
        loader: 'dots'
      });
      const res = await axios.get(`${process.env.VUE_ROOT_URL}/education/${user.user_id}`, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setTimeout(() => loader.hide(), 500)
      this.education = res.data;

    }catch(error){
      setTimeout(() => loader.hide(), 500)
      this.$notification.open({
        message: 'Profile Summery detail',
        description: 'Something went wrong'
      });
    }
  },
  validations: {
    education: {
      $each: {
        completionDate: {required},
        startDate: {required},
        courseOfStudy: {required},
        institutionName: {required},
        educationDetail: {required}
      }
    }
  },
  methods: {
    openNotification() {
      if (this.$v.$invalid) {
        this.$notification.open({
          message: 'Error',
          description: 'Enter the required Field'
        });

      } else {
        this.$notification.open({
          message: 'Education detail',
          description: 'Education details are added',
        });
      }
    },
    changed: function (step) {
      this.$store.commit('change', step)
      this.$store.commit('change', step)
    },
    onChangeTickets(value) {
      const numberOfTickets = Number(value || 0);
      this.education = [...Array(this.education.length + numberOfTickets).keys()].map(i => this.education[i] || {});
    },
    onSubmit(e) {

      // set all fields to touched
      this.$v.$touch();

      // stop here if form is invalid
      if (this.$v.$invalid) return;

      this.$store.commit('change', 3)
      var data = JSON.stringify(this.$data)

      const user = JSON.parse(localStorage.getItem('user'))

      var temp = [];
      if (this.$data.education.length !== 0) {
        this.$data.education.map(item => {
          item.user_id = user.user_id
          temp.push(item);
        })
      }
      var config = {
        method: 'post',
        url: `${process.env.VUE_ROOT_URL}/education`,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        data: {education: temp}
      };
      axios(config)
        .then(function (response) {
          console.log((response.data));

        })
        .catch(function (error) {
          console.log(error);
        });

      var config1 = {
        method: 'put',
        url: `${process.env.VUE_ROOT_URL}/education/${user.user_id}`,
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        data: {education: temp}

      };
      axios(config1)
        .then(function (response) {

          setTimeout(() => loader.hide(), 1000)
          console.log(JSON.stringify(response.data));


        })
        .catch(function (error) {
          setTimeout(() => loader.hide(), 1000)
        });
    },
    onReset() {
      // reset form validation errors
      this.$v.$reset();

      // reset form data
      const initialData = this.$options.data.call(this);
      Object.assign(this.$data, initialData);
    },
    deleteItem(counter) {
      this.tickets.splice(counter, 1);
    },
  }
};
</script>
<style scoped>
.one {
  padding-right: 0px;
  padding-left: 15px;
  margin-left: 0px;
  margin-right: 0px;
}

.two {
  padding-right: 15px;
  padding-left: 10px;
}

@media screen {
  select {
    margin: 10px 0px;
  }

  input {
    margin: 10px 0px;
    height: 38px;
  }

  h6 {
    margin-top: 10px;
  }
}

@media screen and (max-width: 391px) {
  .btn-primary {
    margin-top: 5px;
  }

  button {
    width: 100%;
  }
}
</style>
