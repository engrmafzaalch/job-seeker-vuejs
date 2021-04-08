<template>
  <div class="container education">
    <form @submit.prevent="onSubmit" @reset="onReset">
      <div class="row justify-content-center mt-3">
        <div class="form-group ml-1 col-12">
          <h4 class="pl-2">Enter Experience Details</h4>
          <div
            v-for="(ticket, i) in experience"
            :key="i"
            :set="(v = $v.experience.$each[i])"
          >
            <div
              v-if="i > 0"
              class="cross"
              style="cursor: pointer"
              @click="deleteItem(i)"
            >
              x
            </div>
            <h4 v-if="i > 0" class="pl-2">
              Enter Experience Details {{ i + 1 }}
            </h4>
            <div class="row">
              <div class="col-sm-6">
                <a-input
                  v-decorator="[`employerName`]"
                  v-model="ticket.employerName"
                  type="text"
                  class="form-control my-2 py-3"
                  id="employerName"
                  placeholder="Employer Name"
                  :class="{ 'is-invalid': v.employerName.$error }"
                ></a-input>
              </div>
              <div class="col-sm-6">
                <select
                  v-decorator="[`jobTitle`]"
                  v-model="ticket.jobTitle"
                  id="jobTitle"
                  type="text"
                  class="form-control my-2"
                  :class="{ 'is-invalid': v.jobTitle.$error }"
                  placeholder="Employer Name"
                >
                  <a-option value="" disabled selected hidden
                    >Job Title</a-option
                  >
                  <option value="junior dev">Junior dev</option>
                  <option value="senior dev">senior dev</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <select
                  v-decorator="[`city`]"
                  v-model="ticket.city"
                  type="text"
                  class="form-control my-2"
                  id="city"
                  :class="{ 'is-invalid': v.city.$error }"
                >
                  <option value="Multan">Multan</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Islamabad">Islamabad</option>

                  <!-- <option value="" disabled selected hidden>City</option> -->
                </select>
              </div>
              <div class="col-sm-6">
                <select
                  v-decorator="[`country`]"
                  v-model="ticket.country"
                  type="text"
                  class="form-control my-2"
                  id="country"
                  :class="{ 'is-invalid': v.country.$error }"
                >
                  <!-- <option value=""  disabled selected hidden>Country</option> -->

                  <option value="Pakistan">Pakistan</option>

                  <!-- <option v-for="country in countries" >{{country.countryName}}</option> -->
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <a-date-picker
                  v-decorator="[`endDate`]"
                  v-model="ticket.endDate"
                  id="endDate"
                  class="my-2 w-100"
                  placeholder="End Date"
                  :class="{ 'is-invalid': v.endDate.$error }"
                ></a-date-picker>
                <div class="invalid-feedback">
                  <div v-if="!v.startDate.required">Email is required</div>
                </div>
              </div>
              <div class="col-sm-6">
                <a-date-picker
                  v-decorator="[`startDate`]"
                  v-model="ticket.startDate"
                  id="startDate"
                  class="my-2 w-100"
                  placeholder="Start Date"
                  :class="{ 'is-invalid': v.startDate.$error }"
                ></a-date-picker>
                <div class="invalid-feedback">
                  <div v-if="!v.startDate.required">Email is required</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <a-textarea
                  v-decorator="[`jobDescription`]"
                  v-model="ticket.jobDescription"
                  class="my-2 form-control"
                  name="text"
                  id="jobDescription"
                  cols=""
                  rows="6"
                  placeholder="Education Detail"
                  :class="{ 'is-invalid': v.jobDescription.$error }"
                ></a-textarea>
              </div>
            </div>
          </div>
        </div>

        <button
          class="btn btn-light mx-auto"
          @click="onChangeTickets(1)"
          type="button"
        >
          Add more Experience
        </button>
      </div>
      <hr />
      <div class="row float-right">
        <button
          class="login-button-style btn btn-light px-5"
          @click="changed(2)"
        >
          Go Back
        </button>

        <!-- <button class="btn btn-secondary mr-1" type="reset">Reset</button> -->
        <button
          class="login-button-style btn btn-primary px-5"
          @click="openNotification"
        >
          Proceed
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import { required, email } from "vuelidate/lib/validators";

export default {
  data() {
    return {
      experience: [
        {
          employerName: "",
          jobTitle: "",
          endDate: "",
          startDate: "",
          city: "",
          country: "",
          jobDescription: "",
        },
      ],
    };
  },
  beforeCreate() {
    const user = JSON.parse(localStorage.getItem("user"));
     let loader = this.$loading.show({
        loader: 'dots'
      });
    axios
      .get(`${process.env.VUE_ROOT_URL}/experience/${user.user_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {


           setTimeout(() => loader.hide(), 500)
        this.experience = res.data;
        if(res.status==201) {
          this.experience = res.data;
        }
      })
      .catch((error) => {
        console.error(error);
               setTimeout(() => loader.hide(), 500)
        if(res.status!==200 || res.status!==201 || res.status!==204 ){
          this.$notification.open({
        message: 'Profile Summery detail',
        description:
          'Something went wrong',

      });

        }

      });
  },
  validations: {
    experience: {
      $each: {
        employerName: { required },
        jobTitle: { required },
        endDate: { required },
        startDate: { required },
        city: { required },
        country: { required },
        jobDescription: { required },
      },
    },
  },
  methods: {
    openNotification() {
      if (this.$v.$invalid) {
        this.$notification.open({
          message: "Error",
          description: "Enter the required Field",
          onClick: () => {
          },
        });
      } else {
        this.$notification.open({
          message: "Experience detail",
          description: "Experience details are added",

        });
      }
    },
    changed: function (step) {
      this.$store.commit("change", step);
    },
    onChangeTickets(value) {
      const numberOfTickets = Number(value || 0);
      this.experience = [
        ...Array(this.experience.length + numberOfTickets).keys(),
      ].map((i) => this.experience[i] || {});
    },
    onSubmit(e) {
      // set all fields to touched
      this.$v.$touch();

      // stop here if form is invalid
      if (this.$v.$invalid) return;

      // display form values on success
      // alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.$data));
      this.$store.commit("change", 4);
      var data = JSON.stringify(this.$data);

      const user =   JSON.parse(localStorage.getItem('user'))

      var temp = [];
      if(this.$data.experience.length!==0){
        this.$data.experience.map(item=>{
          item.user_id = user.user_id
          item.companyName = "jslabs"
          temp.push(item);
        })
        // alert(JSON.stringify(temp));
      }
      if(this.$data.experience.length !== 0 && this.$data.experience[0].id) {
        var config = {
          method: "post",
          url: `${process.env.VUE_ROOT_URL}/experience`,
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
          },
          data: {experience: temp},
        };
        axios(config)
          .then(function (response) {
          })
          .catch(function (error) {
          });
      }else{
        var config1 = {
          method: 'put',
          url: `${process.env.VUE_ROOT_URL}/experience/${user.user_id}`,
          headers: {
            'Authorization':  `Bearer ${localStorage.getItem('token')}`,
            'Content-Type': 'application/json'
          },
          data : {experience: temp}
        };
        axios(config1)
          .then(function (response) {
            setTimeout(() => loader.hide(), 1000)
          })
          .catch(function (error) {
            setTimeout(() => loader.hide(), 1000)
          });
      }

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
    changed: function (step) {
      this.$store.commit("change", step);
    },
  },
};
</script>
