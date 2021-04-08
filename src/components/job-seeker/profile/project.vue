
<template>
  <div class="container">
    <form @submit.prevent="onSubmit" @reset="onReset">
      <div class="row justify-content-center mt-3">
        <div class="form-group ml-1 col-12">
          <h4 class="pl-2">Enter Projects Details</h4>
          <div
            v-for="(ticket, i) in project"
            :key="i"
            :set="(v = $v.project.$each[i])"
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
              Enter Projects Details {{ i + 1 }}
            </h4>
            <div class="row">
              <div class="col-sm-6">
                <a-input
                  v-decorator="[`projectTitle`]"
                  v-model="ticket.projectTitle"
                  type="text"
                  class="form-control my-2 py-3"
                  id="projectTitle"
                  placeholder="projectTitle"
                  :class="{ 'is-invalid': v.projectTitle.$error }"
                ></a-input>
              </div>
              <div class="col-sm-6">
                <select
                  v-decorator="[`employerName`]"
                  v-model="ticket.employerName"
                  id="employerName"
                  type="text"
                  class="form-control my-2"
                  :class="{ 'is-invalid': v.employerName.$error }"
                  placeholder="Employer Name"
                >
                  <a-option value="" disabled selected hidden
                    >Job Title</a-option
                  >
                  <option value="JS Labs">jslabs</option>
                </select>
              </div>
            </div>
            <div class="row">
              <div class="col-sm-6">
                <select
                  v-decorator="[`clientName`]"
                  v-model="ticket.clientName"
                  type="text"
                  class="form-control my-2"
                  id="clientName"
                  :class="{ 'is-invalid': v.clientName.$error }"
                >
                  <option value="Usha">Usha</option>

                  <!-- <option value="" disabled selected hidden>City</option> -->
                </select>
              </div>
              <div class="col-sm-6">
                <select
                  v-decorator="[`projectStatus`]"
                  v-model="ticket.projectStatus"
                  type="text"
                  class="form-control my-2"
                  id="country"
                  :class="{ 'is-invalid': v.projectStatus.$error }"
                >
                  <!-- <option value=""  disabled selected hidden>Country</option> -->
                  <option value="On Going">On going</option>
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
                  <div v-if="!v.startDate.required">Date is required</div>
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
                  <div v-if="!v.startDate.required">Date is required</div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6">
                <a-textarea
                  v-decorator="[`projectDetail`]"
                  v-model="ticket.projectDetail"
                  class="my-2 form-control"
                  name="text"
                  id="projectDetail"
                  cols=""
                  rows="6"
                  placeholder="Education Detail"
                  :class="{ 'is-invalid': v.projectDetail.$error }"
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
          @click="changed(3)"
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
      project: [
        {
          clientName: "",
          employerName: "",
          endDate: "",
          projectDetail: "",
          projectStatus: "",
          projectTitle: "",
          startDate: "",
        },
      ],
    };
  },
  beforeCreate() {
    const user = JSON.parse(localStorage.getItem("user"));
    axios
      .get(`${process.env.VUE_ROOT_URL}/project/${user.user_id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        this.project = res.data

        if(res.status==201) {
          this.project = res.data
        }      })
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
    project: {
      $each: {
        clientName: { required },
        employerName: { required },
        endDate: { required },
        projectDetail: { required },
        projectStatus: { required },
        projectTitle: { required },
        startDate: { required },
      },
    },
  },
  methods: {
    openNotification() {
      if (this.$v.$invalid) {
        this.$notification.open({
          message: "Error",
          description: "Please Enter the required Field",

        });
      } else {
        this.$notification.open({
          message: "Project details",
          description: "Projects details are added",

        });
      }
    },
    changed: function (step) {
      this.$store.commit("change", step);
    },
    onChangeTickets(value) {
      const numberOfTickets = Number(value || 0);
      this.project = [
        ...Array(this.project.length + numberOfTickets).keys(),
      ].map((i) => this.project[i] || {});
    },
    onSubmit(e) {
      // set all fields to touched

      this.$v.$touch();

      // stop here if form is invalid
      if (this.$v.$invalid) return;

      // display form values on success
      this.$store.commit("change", 5);
      var data = JSON.stringify(this.$data);

      const user =   JSON.parse(localStorage.getItem('user'))

      var temp = [];
      if(this.$data.project.length!==0){
        this.$data.project.map(item=>{
          item.user_id = user.user_id
          temp.push(item);
        })
        // alert(JSON.stringify(temp));
      }

      var config = {
        method: "post",
        url: `${process.env.VUE_ROOT_URL}/project`,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        data: {project: temp},
      };
      axios(config)
        .then(function (response) {
        })
        .catch(function (error) {
        });

      var config1 = {
        method: 'put',
        url: `${process.env.VUE_ROOT_URL}/project/${user.user_id}`,
        headers: {
          'Authorization':  `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        data : {project: temp}
      };
      axios(config1)
        .then(function (response) {

          setTimeout(() => loader.hide(), 1000)
          console.log(JSON.stringify(response.data));


        })
        .catch(function (error) {

          setTimeout(() => loader.hide(), 1000)

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
     <h4 class="pl-1">Enter Project Details</h4>
      <div class="previous"
      v-for="(info, counter) in infoPro"
      v-bind:key="counter">

      <div class="row justify-content-center mt-3">
         <div class="col-12">

          <h4  v-if="(counter>0)" class="pl-1">Enter Project Details<span class="text-muted">{{counter}}</span> </h4>
        </div>
         <div class="form-group ml-1 col-12">
      <div  class="form-group ml-1 col-12">


          <span class="cross" v-if="(counter>0)" style="cursor:pointer;"  @click="deleteItem(counter) ">x</span>


 <div class="row">
          <div class="col-sm-6">
            <input v-decorator="[`projectTitle`,]"
                   type="text" class="my-2 form-control" id="project_title" placeholder="Project Title"
                    v-model="info.projectTitle">
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`employerName`,]"  v-model="info.employerName"
                    type="text" class="my-2 form-control" id="employer_name">
              <option value="" disabled selected hidden>Employer Name</option>
              <option value="JS Labs">JS Labs</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <select v-decorator="[`clientName`,]"  v-model="info.clientName"
                    type="text" class="my-2 form-control" id="client_name">
              <option value="" disabled selected hidden>Client Name</option>
              <option value="Usha">Usha</option>
            </select>
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`projectStatus`,]"  v-model="info.projectStatus"
                    type="text" class="my-2 form-control" id="project_status">
              <option value="" disabled selected hidden>Project Status</option>
              <option value="On Going">On Going</option>
            </select>
          </div>
        </div>
        <div class="row date">
          <div class="col-sm-6">
            <a-date-picker v-decorator="[`endDate`,]" v-model="info.endDate"
                           class="my-2 w-100" @change="onChange" placeholder="End Date"/>
          </div>
          <div class="col-sm-6">
            <a-date-picker v-decorator="[`startDate`,]"  v-model="info.startDate"
                           class="my-2 w-100" @change="onChange" placeholder="Start Date"/>
          </div>
        </div>
        <div class="row Education">
          <div class="col-md-6">
            <a-textarea v-decorator="[`projectDetail`,]"
                        class="my-2 form-control"
                        name="text"
                        id="education_details"
                        cols="" rows="6"
                        placeholder="Project Details"
                        v-model="info.projectDetail"></a-textarea>
          </div>
        </div>
           </div>
      </div>

        </div>

      </div>



       <div class="row float-right">
        <div class="col-12">
          <a-button class="login-button-style btn btn-light px-4" @click="changed(3)">Go Back</a-button>
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
       infoPro:[
       {
         projectTitle:'',
         employerName:'',
         endDate:'',
         startDate:'',
         projectDetail:'',
       }
     ]

    }
  },
  methods : {
    addItem(){
      this.infoPro.push({
      projectTitle:'',
         employerName:'',
         endDate:'',
         startDate:'',
         projectDetail:'',
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
      console.log(JSON.stringify(this.infoPro))

        e.preventDefault();

               console.log("Received values of form: ", JSON.stringify(this.infoPro));
            // //  alert('!err function runs')
            // let startDate = values.startDate.toDate()
            // let coompletionDate = values.coompletionDate.toDate()
            // values.startDate = startDate
            // values.coompletionDate = coompletionDate

            // console.log("Received values of form: ", values);
           this.$store.commit('change', 5)
            var data = JSON.stringify(this.infoPro)
      var config = {
        method: 'post',
        url: 'http://192.241.137.124:8000/api/v1/project',
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












<!--<template>
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
            <input v-decorator="[`projectTitle`,]"
                   type="text" class="my-2 form-control" id="project_title" placeholder="Project Title">
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`employerName`,]"
                    type="text" class="my-2 form-control" id="employer_name">
              <option value="" disabled selected hidden>Employer Name</option>
              <option value="JS Labs">JS Labs</option>
            </select>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-6">
            <select v-decorator="[`clientName`,]"
                    type="text" class="my-2 form-control" id="client_name">
              <option value="" disabled selected hidden>Client Name</option>
              <option value="Usha">Usha</option>
            </select>
          </div>
          <div class="col-sm-6">
            <select v-decorator="[`projectStatus`,]"
                    type="text" class="my-2 form-control" id="project_status">
              <option value="" disabled selected hidden>Project Status</option>
              <option value="On Going">On Going</option>
            </select>
          </div>
        </div>
        <div class="row date">
          <div class="col-sm-6">
            <a-date-picker v-decorator="[`endDate`,]"
                           class="my-2 w-100" @change="onChange" placeholder="End Date"/>
          </div>
          <div class="col-sm-6">
            <a-date-picker v-decorator="[`startDate`,]"
                           class="my-2 w-100" @change="onChange" placeholder="Start Date"/>
          </div>
        </div>
        <div class="row Education">
          <div class="col-md-6">
            <a-textarea v-decorator="[`projectDetail`,]"
                        class="my-2 form-control"
                        name="text"
                        id="education_details"
                        cols="" rows="6"
                        placeholder="Project Details"></a-textarea>
          </div>
        </div>
        <div class="row justify-content-center text-center my-2">
          <div class="col-12">
            <a-button class="btn btn-light">
              Add More Projects
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
import axios from "axios";
function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some((field) => fieldsError[field]);
}
export default {
  name: "project",

  data() {
    return {
      hasErrors,
      form: this.$form.createForm(this, { name: "projectTitle employerName clientName projectStatus endDate stratDate projectDetail" }),
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
          let endDate = values.endDate.toDate()
          let startDate = values.startDate.toDate()
          values.endDate = endDate
          values.startDate = startDate
          console.log("Received values of form: ", values);
          this.$store.commit('change', 5)
           var data = values

          console.log("data body", data)
         var config = {
            method: 'post',
            url: 'http://192.241.137.124:8000/api/v1/project',
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
