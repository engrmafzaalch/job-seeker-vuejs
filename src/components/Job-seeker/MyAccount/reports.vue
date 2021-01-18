<template>
<div class="container-fluid">
  <div class="wrapper">
    <div class="payment-received">
      <div class="received-heading">
        <strong>Payments Received</strong>
        <a class="action-btn approve-btn" href="">
          <span>Payment Received</span>
          <span><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 11L6.5 6L1.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
        </a>
      </div>
    </div>
    <div class="registration">
      <div class="received-heading">
        <strong>Registrations</strong>
        <div class="action">
          <a class="action-btn approve-btn" href="">
            <span>Jobseeker Registrations</span>
            <span><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 11L6.5 6L1.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
          </a>
          <a class="action-btn approve-btn second" href="">
            <span>Recruiter Registrations</span>
            <span><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 11L6.5 6L1.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
          </a>
        </div>
      </div>
    </div>
    <div class="payment-received">
      <div class="received-heading">
        <strong>Registrations</strong>
        <div class="action">
          <a class="action-btn approve-btn" href="">
            <span>Profile Shortlisting</span>
            <span><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 11L6.5 6L1.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
          </a>
          <a class="action-btn approve-btn second" href="">
            <span>Job Postings</span>
            <span><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 11L6.5 6L1.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
name: "reports"
}

</script>

<style scoped>
.container-fluid{

}
.container-fluid .wrapper{
  padding: 0 80px;
}
.container-fluid .wrapper{
  margin-top: 48px;
}
.container-fluid .wrapper .payment-received{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #FFFFFF;
  border: 1px solid #F0F1F3;
  box-sizing: border-box;
  border-radius: 8px;
  width: 480px;
  padding: 32px;
  margin-bottom: 10px;
}
.registration{
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  background-color: #FFFFFF;
  border: 1px solid #F0F1F3;
  box-sizing: border-box;
  border-radius: 8px;
  width: 551px;
  padding: 32px;
  margin-bottom: 10px;
}
.approve-btn{
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 27.5px 16px 20px;
  background: #0385F3;
  text-align: center;
  border-radius: 4px;
  color: white;
  margin-top: 32px;
}
.approve-btn svg{
  margin-left: 10px;
}
.second{
  margin-left: 10px;
}

.container-fluid .wrapper .payment-received .action{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.container-fluid .wrapper .registration .action{
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

</style>
