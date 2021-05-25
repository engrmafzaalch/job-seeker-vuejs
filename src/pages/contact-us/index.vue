<template>
    <div class="container-fluid" style="margin:64px 0px;">
        <div class="row padding">
            <div class="col-md-7 mb-3">
                <h1 class="top-heading">Frequently Asked Questions</h1>
                <div>
                    <a-collapse default-active-key="1" :bordered="false" class="quesiton-collapse">
                        <a-collapse-panel key="1" header="This is panel header 1">
                            <p>{{ text }}</p>
                        </a-collapse-panel>
                        <a-collapse-panel key="2" header="This is panel header 2" :disabled="false">
                            <p>{{ text }}</p>
                        </a-collapse-panel>
                        <a-collapse-panel key="3" header="This is panel header 3">
                            <p>{{ text }}</p>
                        </a-collapse-panel>
                        <a-collapse-panel key="4" header="This is panel header 4" :disabled="false">
                            <p>{{ text }}</p>
                        </a-collapse-panel>
                        <a-collapse-panel key="5" header="This is panel header 5">
                            <p>{{ text }}</p>
                        </a-collapse-panel>
                    </a-collapse>
                </div>
            </div>
            <div class="col-md-5">
                <div class="card">
                    <div class="card-body">
                        <h3>Send Your Feedback/Question</h3>
                        <p>Please use the form below to contact our support. We will get back to you within a few working days.</p>

                        <input type="text" placeholder="Message Title" class="tite-input mb-3">

                        <textarea name="" id="" cols="30" rows="10" placeholder="Enter your Message" class="form-control t-area"></textarea>
                        
                        <div style="float:right;margin:20px 0px;">
                            <span class="submit-button text-center">Send Message</span>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
</template>
<script>
export default {
    name:'contact-us',
    data(){
        return{
            text: 'A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found as a welcome guest in many households across the world.',
        }
    },
    methods:{
        callback(key) {
            console.log(key);
        },
    }
}
</script>
<style scoped>
.input-field input{
  border: 1px solid #A1A4B1;
  border-radius: 4px;
  height: 48px;
  background: none;
  padding: 0 16px;
  width: 350px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
}
.input-field input:-webkit-autofill {
  background-color: transparent;
  -webkit-text-fill-color: #fff;
  -webkit-box-shadow: 0 0 0px 1000px rgba(35, 44, 58, 1) inset;
  transition: background-color 5000s ease-in-out 0s;

}
 .input-field input:-webkit-autofill {
  background-color: transparent;
  -webkit-text-fill-color: #fff;
  -webkit-box-shadow: 0 0 0px 1000px rgba(35, 44, 58, 1) inset;
  transition: background-color 5000s ease-in-out 0s;
}

 .input-field input:focus {
  outline: none;
}

 .input-field input::-webkit-input-placeholder { /* Edge */
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
}

 .input-field input:-ms-input-placeholder { /* Internet Explorer 10-11 */
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
}

 .input-field input::placeholder {
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  text-transform: capitalize;
}
.card-body{
    padding:32px;
    background-color:#0084F4;
}
.card-body p{
    line-height:32px;
    color:white;
}
.card-body h3{
    color:white;
}
.submit-button{
    background: white;
    border-radius: 1px;
    padding: 10px 16px;
    cursor: pointer;
    font-family: 'Open Sans',sans-serif;
    text-align: center;
}
.quesiton-collapse{
    background-color: white!important;
}
.quesiton-collapse p{
    line-height: 32px;;
    font-size: 16px;
    color:#8B90A0;
}
.tite-input {
    display: block;
    width: 100%;
    height: calc(1.5em + 0.75rem + 2px);
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: white;
    background-color: #0084F4;
    background-clip: padding-box;
    border: 1px solid white;
    border-radius: 0.25rem;
    -webkit-transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out, -webkit-box-shadow 0.15s ease-in-out;
}

textarea::-webkit-input-placeholder {
  color: white!important;
}

textarea:-moz-placeholder { /* Firefox 18- */
  color: white!important;
}

textarea::-moz-placeholder {  /* Firefox 19+ */
  color: white!important;
}

textarea:-ms-input-placeholder {
  color: white!important;
}

textarea::placeholder {
  color: white!important;
}
.t-area{
    background-color: #0084F4;
}
::placeholder {
   color: white!important;
  opacity: 1; /* Firefox */
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: white!important;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: white!important;
}
.top-heading{
    color:#505565;
}
.padding{
    padding:10px 50px;
}
@media only screen and (max-width: 767px) {
    .padding{
        padding:10px 20px;
    }
    .top-heading{
        font-size:30px;
    }
}

@media only screen and (max-width: 450px) {
    .padding{
        padding:10px;
    }
}
</style>