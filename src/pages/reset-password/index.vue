<template>
    <div class="container">
        <div class="row center-out">
            <div class="reset-box">                
                <h3>Reset Password</h3>
                <div>
                    <a-tabs class="reset-password" default-active-key="1" size="large" @change="callback">
                        <a-tab-pane key="1" tab="Email Address">
                            <h5>Enter your registered email address to reset the password</h5>
                            <div class="hori-column">
                                <div class="input-field mb-2">
                                    <input placeholder="Email Address *" autocomplete="off" type="email" v-model="email">
                                </div>
                                <span class="submit-button text-center">Send OTP</span>            
                            </div>
                        </a-tab-pane>
                        <a-tab-pane key="2" tab="Mobile number" force-render>
                            <h5>Copy Enter your registered Mobile Number to reset the password</h5>
                            <div class="hori-column">
                                <div class="input-field mb-2">
                                    <input placeholder="Mobile Number *" autocomplete="off" type="email" v-model="email">
                                </div>
                                <span class="submit-button text-center">Send OTP</span>
                            </div>
                        </a-tab-pane>
                    </a-tabs>
                </div>
                
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'reset-password',
    methods:{
        callback(key) {
            console.log(key);
        },
    }
}
</script>
<style scoped>
.center-out{
    display: flex;
    justify-content: center;
    align-items: center;
}
.reset-box{
    width: 562px;
    margin:224px 30px;
}
.reset-box h3{
    font-weight:600;
    font-size:24px;
    font-family: 'Open Sans',sans-serif;
    font-style: normal;
    margin-bottom:20px;
    color:#505565;
}
.reset-box h5{
    font-family: 'Open Sans',sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    color:#505565;
    margin-top: 19px;
    margin-bottom: 22px;
}
@media screen and (max-width: 768px) {
    .reset-box{
        width:400px;
        margin:224px 10px;
    }   
}
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
@media screen and (max-width: 440px) {
    .reset-box{
        width:90%;
        margin:224px 10px;
    }   
    .input-field input{
        width:300px;
    }
}
@media screen and (max-width: 340px) {
    .input-field input{
        width:270px;
    }
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

 .input-field{
  position: relative;
  margin-bottom: 20px;
}
.hori-column{
    display:flex;
    flex-wrap: wrap;
    flex-direction: row;
}
.submit-button{
    background: #0385F3;
    border-radius: 4px;
    padding:16px;
    margin-left: 10px;
    height:47px;
    color:white;
    cursor: pointer;
    font-family: 'Open Sans',sans-serif;
}
@media screen and (max-width: 768px) {
    .submit-button{
        margin-left: 0px;
    }
}

</style>