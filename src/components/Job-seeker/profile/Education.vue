<template>
<div class="container education" >
  <form @submit.prevent="onSubmit" @reset="onReset">
   <div class="row justify-content-center mt-3">
    
      <div class="form-group ml-1 col-12">
         <h4 class="pl-2">Enter Education Details </h4>
      <div 
        v-for="(ticket, i) in tickets"
        :key="i"
        :set="(v = $v.tickets.$each[i])"
      >
      <div  v-if="(i>0)"  class="cross"  style="cursor:pointer;" @click="deleteItem(i)" >x</div>
           <h4 v-if="(i>0)"  class="pl-2">Enter Education Details {{ i + 1 }}</h4>
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
                     type="text" class="form-control my-2 py-3" id="institutionName" placeholder="CollegeUniversityAcademy"
                      :class="{ 'is-invalid': v.institutionName.$error }"></a-input>
          </div>
        
              <!-- <label>Name</label>
              <input
                type="text"
                v-model="ticket.name"
                class="form-control"
                :class="{ 'is-invalid': v.name.$error }"
              />
              <div class="invalid-feedback">
                <div>Name is required</div>
              </div> -->
          
            <!-- <div class="form-group col-6">
              <label>Email</label>
              <input
                type="email"
                v-model="ticket.email"
                class="form-control"
                :class="{ 'is-invalid': v.email.$error }"
              />
              <div class="invalid-feedback">
                <div v-if="!v.email.required">Email is required</div>
                <div v-if="!v.email.email">Email is invalid</div>
              </div>
            </div> -->
          </div>
          <div class="row">
          <div class="col-sm-6">
            <a-date-picker v-decorator="[`coompletionDate`,]" 
             v-model="ticket.coompletionDate"
                      id="coompletionDate"
                        class="my-2 w-100" placeholder="End Date"
                         :class="{ 'is-invalid': v.coompletionDate.$error }"
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
     
    
          <button class="btn btn-light mx-auto" @click="onChangeTickets(1)" type="button">Add more Projects</button>
       
      
      
  
      
    </div>
    <hr>
      <div class="row float-right">
           <button class="login-button-style btn btn-light px-5" @click="changed(1)">Go Back</button>
       
        <!-- <button class="btn btn-secondary mr-1" type="reset">Reset</button> -->
          <button class="login-button-style btn btn-primary px-5"  @click="openNotification">Proceed</button>
        
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
                tickets: [{
                     coompletionDate:'',
                    startDate:'',
                    courseOfStudy: '',
                    institutionName: '',
                    educationDetail: ''
                }]
      

                
            };
        },
        validations: {
          
            tickets: {
                $each: {
                   coompletionDate: {required},
                    startDate:{required},
                    courseOfStudy: { required },
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
        description:
          'Enter the required Field',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      }); 

              }
              else{
      this.$notification.open({
        message: 'Education detail',
        description:
          'Education details are added',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
              }
    },
           changed: function(step) {
      this.$store.commit('change', step)
       this.$store.commit('change', step)
    },
            onChangeTickets(value) {
                const numberOfTickets = Number(value || 0);
                this.tickets = [...Array(this.tickets.length + numberOfTickets).keys()].map(i => this.tickets[i] || {});
            },
            onSubmit(e) {
              
                // set all fields to touched
                this.$v.$touch();

                // stop here if form is invalid
                if (this.$v.$invalid) return;

                // display form values on success
                alert("SUCCESS!! :-)\n\n" + JSON.stringify(this.$data));
                 this.$store.commit('change', 3)
                 var data = JSON.stringify(this.$data)
                  var config = {
        method: 'post',
       url: `${process.env.VUE_ROOT_URL}/education`,
        headers: {
          'Authorization':  `Bearer ${localStorage.getItem('token')}`,
          'Content-Type': 'application/json'
        },
        data : data
      };
       axios(config)
        .then(function (response) {
          console.log((response.data));

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
          deleteItem(counter){
            this.tickets.splice(counter,1);

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
@media screen{
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
/*h4 {*/
/*  margin-top: 10px;*/
/*}*/
}
@media screen and (max-width: 391px){
.btn-primary {
  margin-top: 5px;
}
  button {
    width: 100%;
  }
}
</style>