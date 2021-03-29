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
          Add more Projects
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
        console.log("this is my Experience", res.data);
        this.experience = res.data;
           setTimeout(() => loader.hide(), 500)
      })
      .catch((error) => {
        console.error(error);
               setTimeout(() => loader.hide(), 500)
        if(res.status!==200 || res.status!==201 || res.status!==204 ){
          this.$notification.open({
        message: 'Profile Summery detail',
        description:
          'Something went wrong',
        onClick: () => {
          console.log('Notification Clicked!');
        },
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
            console.log("Notification Clicked!");
          },
        });
      } else {
        this.$notification.open({
          message: "Experience detail",
          description: "Experience details are added",
          onClick: () => {
            console.log("Notification Clicked!");
          },
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
      alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.$data));
      this.$store.commit("change", 4);
      var data = JSON.stringify(this.$data);
      var config = {
        method: "post",
        url: `${process.env.VUE_ROOT_URL}/experience`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        data: data,
      };
      axios(config)
        .then(function (response) {
          console.log(response.data);
        })
        .catch(function (error) {
          console.log(error);
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
    changed: function (step) {
      this.$store.commit("change", step);
    },
  },
};
</script>
<!--<template>
  <div class="container education" >
       <form @submit="handleSubmit">   
               
   
     <h4 class="pl-2">Enter Experience Details</h4>
      <div class="previous"
      v-for="(info, counter) in infoExp"
      v-bind:key="counter">
    
      <div class="row justify-content-center mt-3">
         <div class="col-12">
         
          <h4  v-if="(counter>0)" class="pl-1">Enter Experience Details<span class="text-muted">{{counter}}</span> </h4>
        </div>
         <div class="form-group ml-1 col-12">
      <div  class="form-group ml-1 col-12">
       
       
          <span class="cross" v-if="(counter>0)" style="cursor:pointer;"  @click="deleteItem(counter) ">x</span>
      


         
              <div class="row">
          <div class="col-sm-6">
            <a-input v-decorator="[`employerName`,]"
                     type="text" class="form-control my-2 py-3" id="employer" placeholder="Employer Name"
                     v-model="info.employerName"></a-input>
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`jobTitle`,]" v-model="info.jobTitle"
                    type="text" class="form-control my-2" id="job_title">
              <option value="" disabled selected hidden >Job Title</option>
              <option value="junior dev" >Junior dev</option>
              <option value="senior dev" >senior dev</option>
            </select>
          </div>
        </div> 
           <div class="row">
          <div class="col-sm-6">
            <select v-decorator="[`city`,]" v-model="info.city"
                    type="text" class="form-control my-2" id="city">
              <option value="" disabled selected hidden>City</option>
            </select>
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`country`,]" v-model="info.country"
                    type="text" class="form-control my-2" id="country">
              <option value=""  disabled selected hidden>Country</option>
              <option v-for="country in countries" >{{country.countryName}}</option>
            </select>
          </div>
        </div>
  <div class="row">
          <div class="col-sm-6">
            <a-date-picker v-decorator="[`endDate`,]"
                           class="my-2 w-100" @change="onChange" placeholder="End Date"
                            v-model="info.endDate"/>
          </div>
          <div class="col-sm-6">
            <a-date-picker v-decorator="[`startDate`,]"
                           class="my-2 w-100" @change="onChange" placeholder="Start Date"
                            v-model="info.startDate"/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <a-textarea v-decorator="[`jobDescriptions`,]"
                        class="my-2 form-control"
                        name="text"
                        id="education_details"
                        cols="" rows="6"
                        placeholder="Job Description"
                        v-model="info.jobDescriptions"></a-textarea>
          </div>
        </div>

           
           </div>
      </div>
      
        </div>
        
      </div>
      
      
       
       <div class="row float-right">
        <div class="col-12">
          <a-button class="login-button-style btn btn-light px-4" @click="changed(2)">Go Back</a-button>
          <a-button type="primary"
                   html-type="submit"
                   class="login-button-style btn btn-primary px-4"
                  @click="handleSubmit"
                  
                     >Proceed
          </a-button>
        </div>
        

        </div>
         </form>
         <button class="btn btn-light mx-auto" @click="addItem">Add more Education</button>
       <hr>
  </div>
</template> 


<script>
import axios from "axios";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}

export default {
  name: 'education',
  props: {
    msg: String
  },

  
  data(){
    return {
      hasErrors,
       countries:[],
       infoExp:[
       {
         employerName:'', 
         jobTitle:'', 
         city:'', 
         country:'', 
         endDate:'',
         startDate:'',
        jobDescriptions:''
       }
     ]
    
    }
  },
  beforeCreate() {
    axios.get('http://192.241.137.124:8000/api/v1/countries', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        this.countries = res.data
        console.log("data", res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  },
  
  methods : {
    addItem(){
      this.infoExp.push({
       employerName:'', 
         jobTitle:'', 
         city:'', 
         country:'', 
         endDate:'',
         startDate:'',
        jobDescriptions:''
      })
    },
    
    deleteItem(counter){
      this.infoEdu.splice(counter,1);

    },
        changed: function (step) {
      this.$store.commit('change', step)
    },

    // userNameError() {
    //   const { getFieldError, isFieldTouched } = this.form;
    //   return isFieldTouched("userName") && getFieldError("userName");
    // },
    // Only show error after a field is touched.
    handleSubmit(e) {
      console.log(JSON.stringify(this.infoEdu))
      
        e.preventDefault();
      
               console.log("Received values of form: ", JSON.stringify(this.infoExp));
            // //  alert('!err function runs')
            // let startDate = values.startDate.toDate()
            // let coompletionDate = values.coompletionDate.toDate()
            // values.startDate = startDate
            // values.coompletionDate = coompletionDate
            
            // console.log("Received values of form: ", values);
           this.$store.commit('change', 4)
            var data = JSON.stringify(this.infoExp)
      var config = {
        method: 'post',
       url: 'http://192.241.137.124:8000/api/v1/experience',
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

    },
    onChange(date, dateString) {
      console.log("date", dateString);
    },
  }

  }

</script>
<style scoped>
@media screen and (max-width: 242px) {
  .login-button-style {
    margin-bottom: 5px ;
    width: 100%;
  }
  .alignBtn{
        margin-left: 472px;
  }
  .cross{
    margin-left: 900px;
  }
 .mx-auto 
  {
    margin-right: auto !important;
    margin-left: auto !important;
  }

}
</style>




















<!-- <template>
  <div class="container">
    <a-form :form="form" @submit="handleSubmit">
    <div class="row justify-content-center mt-3">
      <div class="col-12">
        <h4 class="pl-2">Enter Experience Details</h4>
      </div>
    </div>
      <a-form-item>
      <div class="form-group ml-2">
        <div class="row">
          <div class="col-sm-6">
            <a-input v-decorator="[`employerName`,]"
                     type="text" class="form-control my-2 py-3" id="employer" placeholder="Employer Name"></a-input>
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`jobTitle`,]"
                    type="text" class="form-control my-2" id="job_title">
              <option value="" disabled selected hidden>Job Title</option>
              <option value="junior dev" >Junior dev</option>
              <option value="senior dev" >senior dev</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <select v-decorator="[`City`,]"
                    type="text" class="form-control my-2" id="city">
              <option value="" disabled selected hidden>City</option>
            </select>
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`country`,]"
                    type="text" class="form-control my-2" id="country">
              <option value=""  disabled selected hidden>Country</option>
              <option v-for="country in countries" >{{country.countryName}}</option>
            </select>
          </div>
        </div>
        <div class="row py-1">
          <div class="col-sm-6">
            <select v-decorator="[`workType`,]"
                    type="text" class="my-2 form-control" id="work_type">
              <option value="" disabled selected hidden>Work Type</option>
               <option value="Full time">Full time</option>
                <option value="Part time">Part time</option>

            </select>
          </div>
          <div class="col-sm-6">
            <a-input v-decorator="[`salary`,]"
                     type="text" class="form-control py-3 my-2" id="salary" placeholder="Salary"></a-input>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <a-date-picker v-decorator="[`endDate`,]"
                           class="my-2 w-100" @change="onChange" placeholder="End Date"/>
          </div>
          <div class="col-sm-6">
            <a-date-picker v-decorator="[`startDate`,]"
                           class="my-2 w-100" @change="onChange" placeholder="Start Date"/>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <a-textarea v-decorator="[`jobDescriptions`,]"
                        class="my-2 form-control"
                        name="text"
                        id="education_details"
                        cols="" rows="6"
                        placeholder="Job Description"></a-textarea>
          </div>
        </div>
        <div class="row justify-content-center text-center my-3">
          <div class="col-12">
            <button class="btn btn-light">
              Add More Education
            </button>
          </div>
        </div>
      </div>
      </a-form-item>
    <hr>
    <div class="row float-right">
      <div class="col-12">
        <a-button class="login-button-style btn btn-light px-4" @click="changed(2)">Go Back</a-button>
        <a-button type="primary"
                  html-type="submit"
                  class="login-button-style btn btn-primary px-4"
                  :disabled="hasErrors(form.getFieldsError())">Proceed</a-button>
      </div>
    </div>
    </a-form>
  </div>
</template>

<script>
import axios from "axios";

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}
export default {
name: "experience",

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "employerName jobTitle city country workType salary endDate startDate jobDetails" }),
      countries:[]
    };
  },

  beforeCreate() {
    axios.get('http://192.241.137.124:8000/api/v1/countries', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((res) => {
        this.countries = res.data
        console.log("data", res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  },

  methods:{
    changed: function(step) {
      this.$store.commit('change', step)
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          let startDate = values.startDate.toDate()
          let endDate = values.endDate.toDate()
          values.startDate = startDate
          values.endDate = endDate
          console.log("Received values of form: ", values);
          this.$store.commit('change', 4)

          var data = values

          console.log("data body", data)
          var config = {
            method: 'post',
            url: 'http://192.241.137.124:8000/api/v1/experience',
            headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
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
  }
}
</script>

<style scoped>
@media screen and (max-width: 240px){
.login-button-style{
  width: 100%;
  margin-bottom: 5px;
}
}
</style>
