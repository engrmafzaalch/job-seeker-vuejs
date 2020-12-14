<template>
  <div class="mt-100">
    <div class="header">
      <div class="header-right">
        <a class="active" href="#home">About us</a>
        <a href="#jobs">Terms & Conditions</a>
        <a href="#my-application">Privacy Policy</a>
        <a href="#my-account">Blog</a>
        <a href="#my-account">Blog</a>
        <a href="#my-account">Reviews</a>
        <a href="#my-account">Careers</a>
        <a href="#my-account">Contact us</a>
      </div>
    </div>
    <div
      class="border-bottom pt-48px display-flex background-grey justify-content-space-around"
    >
      <div>
        <div class="text-align-iniital">
          <span class="finds-job-footer-text">Find Jobs in</span>
        </div>
        <div class="display-flex justify-content-space-between mt-24">
          <div>
            <span class="post-finds-jobs-in"> Business Analyst </span>
          </div>
          <div>
            <span class="ml-40px post-finds-jobs-in"> Sr. Sales Manager </span>
          </div>
        </div>
        <div class="display-flex justify-content-space-between mt-24">
          <div>
            <span class="post-finds-jobs-in"> Java Developer </span>
          </div>
          <div>
            <span class="ml-40px post-finds-jobs-in"> Fashion Designer </span>
          </div>
        </div>
        <div class="display-flex justify-content-space-between mt-24">
          <div>
            <span class="post-finds-jobs-in"> Sr. Sales Executive </span>
          </div>
          <div>
            <span class="ml-40px post-finds-jobs-in"> Sr. Admin </span>
          </div>
        </div>
        <div class="display-flex justify-content-space-between mt-24">
          <div>
            <span class="post-finds-jobs-in"> Product Manager </span>
          </div>
          <div>
            <span class="ml-40px post-finds-jobs-in">
              Sr. Marketing Executive
            </span>
          </div>
        </div>
      </div>
      <div>
        <div class="text-align-iniital">
          <span class="finds-job-footer-text">Find Jobs in</span>
        </div>
        <div class="display-flex justify-content-space-between mt-24">
          <div>
            <span class="post-finds-jobs-in"> Nairobi </span>
          </div>
          <div>
            <span class="ml-40px post-finds-jobs-in"> Kampala </span>
          </div>
        </div>
        <div class="display-flex justify-content-space-between mt-24">
          <div>
            <span class="post-finds-jobs-in"> Lagos </span>
          </div>
          <div>
            <span class="ml-40px post-finds-jobs-in"> Maputo </span>
          </div>
        </div>
        <div class="display-flex justify-content-space-between mt-24">
          <div>
            <span class="post-finds-jobs-in"> Cape Town </span>
          </div>
          <div>
            <span class="ml-40px post-finds-jobs-in"> Casablanca </span>
          </div>
        </div>
        <div class="display-flex justify-content-space-between mt-24">
          <div>
            <span class="post-finds-jobs-in"> Accra </span>
          </div>
          <div>
            <span class="ml-40px post-finds-jobs-in"> Port Elizabeth </span>
          </div>
        </div>
      </div>
    </div>
    <footer-main />
  </div>
</template>

<script>
import FooterMain from "./FooterMain.vue";
import JobCards from "./JobCards.vue";
export default {
  components: { JobCards, FooterMain },
};
</script>

<style scoped>
.text-align-iniital {
  text-align: initial;
}
.border-bottom {
  border-bottom: 1px solid #ffffff;
}
.mt-24 {
  margin-top: 24px;
}
.finds-job-footer-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  color: #5aaadf;
}
.post-finds-jobs-in {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  text-align: center;

  /* Text / Inverse */

  color: #ffffff;
}
.background-grey {
  background: #354255;
}
.pt-48px {
  padding: 48px 0;
}
.ml-40px {
  margin-left: 40px;
}
.justify-content-space-between {
  justify-content: space-between;
}
.justify-content-space-around {
  justify-content: space-around;
}
.header {
  display: flex;
  align-items: center;
  overflow: hidden;
  background-color: "#FAFAFA";
  padding: 10px 30px;
  height: 80px;
  background: #232c3a;
}
.header a {
  float: left;
  color: #ffffff;
  text-align: center;
  padding: 5px 25px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
}
</style>