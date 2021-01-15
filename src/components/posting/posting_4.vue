<template>
  <div class="container-fluid">
    <div class="wrapper">
      <div class="job-heading">
        <h1 class="job-heading-inr">Job Details</h1>
      </div>
      <div class="first">
        <div class="select-otr">
          <select>
            <option value="volvo">Select Recruiter</option>
            <option value="saab">Saab</option>
            <option value="opel">Opel</option>
            <option value="audi">Audi</option>
          </select>
          <svg class="arrow" width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0L5 5L10 0H0Z" fill="#A1A4B1"/>
          </svg>
        </div>
        <div class="input-outer">
          <input class="input" type="text" placeholder="Job Position">
        </div>
      </div>
      <div class="second">
        <div class="experience-otr">
          <h2 class="experience">Experience </h2>
          <div class="progress">
            <div class="progress-custom" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <span class="span">
                                3 Years
                            </span>
            </div>
          </div>
          <div class="years">
            <p class="years-inr">Fresh</p>
            <p class="years-inr">10+ Year</p>
          </div>
        </div>
        <div class="experience-otr experience-otr-second">
          <h2 class="experience ">Salary Range</h2>
          <div class="progress">
            <div class="progress-custom" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <span class="span">
                                3 Years
                            </span>
            </div>
          </div>
          <div class="years">
            <p class="years-inr">Fresh</p>
            <p class="years-inr">10+ Year</p>
          </div>
        </div>
      </div>
      <div class="third">
        <h2 class="job-descrpton">Job Description</h2>
        <textarea class="textarea" name="" cols="30" rows="5" placeholder="Enter Job Description"></textarea>
      </div>
      <div class="four">
        <div class="company-heading">
          <h1 class="company-heading-inr">Company Details</h1>
        </div>
        <div class="first pad-bottom">
          <div class="select-otr">
            <select>
              <option value="volvo">Select Recruiter</option>
              <option value="saab">Saab</option>
              <option value="opel">Opel</option>
              <option value="audi">Audi</option>
            </select>
            <svg class="arrow" width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 0L5 5L10 0H0Z" fill="#A1A4B1"/>
            </svg>
          </div>
          <div class="input-outer">
            <input class="input" type="text" placeholder="Job Position">
          </div>
        </div>
        <div class="experience-otr">
          <h2 class="experience">Experience </h2>
          <div class="progress fifty">
            <div class="progress-custom" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">
                            <span class="span">
                                3
                            </span>
            </div>
          </div>
          <div class="years wid-50">
            <p class="years-inr">1</p>
            <p class="years-inr">10+K</p>
          </div>
        </div>
      </div>
      <div class="five">
        <h1 class="featured">Featured Job</h1>
        <p class="featured-desc">If you want to featured this job, Select yes to proceed for payment.</p>
        <div class="main-check">
          <label class="main-lable active">Yes
            <input class="radio" type="radio" checked="checked" name="radio">
            <span class="checkmark"></span>
          </label>
          <label class="main-lable left">No
            <input class="radio" type="radio" name="radio">
            <span class="checkmark"></span>
          </label>
        </div>
      </div>
      <div class="action">
        <a class="action-btn cancel-btn" href="">Reset</a>
        <a class="action-btn approve-btn" href="">Post Job</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "posting_4"
}
</script>

<style scoped>

.action{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 32px 0 80px 0;
}
.cancel-btn{
  padding: 12px 0;
  width: 235px;
  background: #FAFAFA;
  text-align: center;
  border-radius: 4px;
  color: #8B90A0;
}
.approve-btn{
  padding: 12px 0;
  width: 235px;
  background: #0385F3;
  text-align: center;
  border-radius: 4px;
  color: white;
  margin-left: 10px;
}

.five{
  padding: 32px 0;
  border-bottom: 1px solid #F0F1F3;
}
.featured{
  font-size: 32px;
  line-height: 48px;
  color: #0385F3;
}
.main-check{
  font-size: 14px;
  line-height: 16px;
  color: #505565;
}
.main-lable{
  border: 1px solid #A1A4B1;
  border-radius: 4px;
  padding: 16px 32px;
  width: 235px;
}
.active{
  border: 1px solid #5AAADF;
}
.left{
  margin-left: 11px;
}
.radio{
  position: relative;
  top: 2px;
}
.checkmark{

}


.container-fluid{

}
.wrapper{
  margin: 0 auto;
  width: 990px;
}
.job-heading{

}
.job-heading-inr{
  font-size: 32px;
  line-height: 48px;
  color: #505565;
}
.first{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.pad-bottom{
  padding: 0 0 32px 0;
}
.select-otr{
  position: relative;
  border: 1px solid #A1A4B1;
  border-radius: 4px;
  width: 100%;
}
select{
  width: 100%;
  border-radius: 4px;
  color: #8B90A0;
  background: #FFFFFF;
  padding: 12px 16px;
  border: none;
  appearance: none;
}
select:focus{
  outline: none;
}
.arrow{
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translate(0, -50%);
}
.input-outer{
  width: 100%;
  padding-left: 30px;
}
.input{
  width: 100%;
  padding: 12px 16px;
  color: #8B90A0;
  border-radius: 4px;
  border: 1px solid #8B90A0;
  outline: none;
  box-shadow: none;
}
.second{
  display: flex;
  align-items: center;
  padding: 32px 0;
}
.experience-otr{
  width: 100%;
}
.experience-otr-second{
  padding-left: 30px;
}
.experience{
  font-size: 14px;
  line-height: 16px;
  color: #505565;
  margin: 0;
}
.progress{
  background: #F0F1F3 !important;
  border-radius: 10px !important;
  width: 100% !important;
  position: relative;
  height: 4px !important;
  margin: 26px 0 10px 0;
  overflow: visible !important;
}
.fifty{
  width: 49% !important;
}
.progress-custom{

}
.span{
  border: 2px solid #0385F3;
  border-radius: 4px;
  padding: 4px 8px;
  font-size: 14px;
  color: #0385F3;
  line-height: 24px;
  position: absolute;
  top: 50%;
  left: 30%;
  transform: translate(-30%, -50%);
  text-align: center;
}
.years{
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.wid-50{
  width: 49%;
}
.years-inr{
  font-size: 12px;
  line-height: 16px;
  color: #8B90A0;
  margin: 0;
}
.third{
  padding-bottom: 32px;
}
.job-descrpton{
  font-size: 14px;
  line-height: 16px;
  color: #505565;
  margin: 0 0 20px 0;
}
.textarea{
  border: 1px solid #A1A4B1;
  border-radius: 4px;
  color: #A1A4B1;
  font-size: 14px;
  line-height: 24px;
  padding: 16px;
  width: 100%;
}
.textarea:focus{
  outline: none;
}
.four{
  padding: 32px 0;
  border-top: 1px solid #F0F1F3;
  border-bottom: 1px solid #F0F1F3;
}


</style>

