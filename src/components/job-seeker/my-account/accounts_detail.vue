<template>
  <div class="container-fluid">
    <div class="wrapper">
      <div class="first-detail">
        <div class="heading-detail">
          <strong>Administrator Account</strong>
        </div>
        <div class="account-detail">
          <div class="detail-image">
            <img src="../../../assets/account-detail.png" alt="">
          </div>
          <div class="detail-name">
            <strong>
              Talan Bergson
            </strong>
          </div>
          <div class="detail-email">
            <p>Email Address</p>
            <strong>Support@infohob.com</strong>
          </div>
          <div class="detail-login">
            <p>Last Login</p>
            <strong>
              Thu June 04 2020
            </strong>
          </div>
          <div class="action">
            <a class="action-btn approve-btn" href="">
              <span>Change Password</span>
              <span><svg width="8" height="12" viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 11L6.5 6L1.5 1" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
            </a>
          </div>
        </div>
      </div>
      <div class="first-detail">
        <div class="heading-detail">
          <strong>Support Account</strong>
        </div>
        <div class="account-detail">
          <div class="detail-image">
            <img src="../../../assets/account-detail-1.png" alt="">
          </div>
          <div class="detail-name">
            <strong>
              Ryan Torff
            </strong>
          </div>
          <div class="detail-email">
            <p>Email Address</p>
            <strong>Support@infohob.com</strong>
          </div>
          <div class="detail-login">
            <p>Last Login</p>
            <strong>
              Thu June 04 2020
            </strong>
          </div>
          <div class="action">
            <a class="action-btn cancel-btn" href="">Change User</a>
            <a class="action-btn approve-btn second" href="">
              <span>View Detail</span>
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
  name: "accounts_detail"
}

</script>

<style scoped>

.container-fluid {

}

.container-fluid .wrapper {
  padding: 0 80px;
  margin-top: 48px;
}

.container-fluid .wrapper .first-detail {
  margin-bottom: 32px;
}

.container-fluid .wrapper .first-detail .heading-detail {
  font-size: 18px;
  line-height: 24px;
  margin-bottom: 16px;
}

.container-fluid .wrapper .first-detail .account-detail {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px 40px;
  border: 1px solid #F0F1F3;
  box-sizing: border-box;
  border-radius: 8px;
}

.container-fluid .wrapper .first-detail .account-detail .detail-login p {
  color: #8B90A0;
  line-height: 24px;
  margin-bottom: 3px;
}

.container-fluid .wrapper .first-detail .account-detail .detail-email p {
  color: #8B90A0;
  line-height: 24px;
  margin-bottom: 3px;
}

.approve-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 27.5px 16px 20px;
  background: #0385F3;
  text-align: center;
  border-radius: 4px;
  color: white;
}

.approve-btn svg {
  margin-left: 10px;
}

.cancel-btn {
  padding: 15px 20px;
  background: #FAFAFC;
  border: 1px solid #0385F3;
  box-sizing: border-box;
  border-radius: 4px;
}

.second {
  margin-left: 10px;
}

.action {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
}


@media (min-width: 320px) and (max-width: 768px) {

  .container-fluid .wrapper {
    padding: 0 15px;
    margin-top: 48px;
  }
}

@media (min-width: 320px) and (max-width: 450px) {
  .second {
    margin-left: 0px;
    margin-top: 10px;
  }

}
</style>
