<template>
  <div class="container-fluid">
    <div class="tab-content">
      <div class="tab-content-inner">
        <div class="row-custom">
          <ul class="row-inr">
            <li class="profile-recutier list">
              <div class="recurtier-main">
                <div class="img-otr">
                  <img class="img-inr" src="./user-img.png" alt="user">
                </div>
                <div class="recruiter-otr">
                  <h6 class="recruiter-head">Recruiter A</h6>
                  <p class="recruiter-desc">Consultant at Company A Pvt Ltd</p>
                </div>
              </div>
              <div class="email-otr same-otr">
                <p class="email-inr same-head">Email Address</p>
                <p class="email same-desc">user@gmail.com</p>
              </div>
              <div class="contact-num same-otr">
                <p class="contact same-head">Contact Information</p>
                <p class="num same-desc">+ 9988776655</p>
              </div>
              <div class="address-otr same-otr">
                <p class="address-inr same-head">Address</p>
                <p class="address same-desc">Plot 470, Abogo Lagerma Road Off Constitution <br> Avenue, Off Constitution Avenue</p>
              </div>
            </li>
            <li class="second1 list">
              <h4 class="company-det">
                Company Details
              </h4>
              <p class="company-desc-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.
                Proin gravida <br> dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar
                sic tempor. Sociis natoque <br> penatibus et magnis dis parturient.
              </p>
              <p class="company-desc-2">
                Sed nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate,
                felis tellus mollis orci, sed <br> rhoncus pronin sapien nunc accuan eget.
                <a class="read-more" href="">READ MORE</a>
              </p>
            </li>
            <li class="third list">
              <p class="Industry">Industry</p>
              <ul class="industry-inr">
                <li class="Industry-list">
                  Healthcare
                </li>
                <li class="Industry-list">
                  Telecom
                </li>
                <li class="Industry-list">
                  IT
                </li>
              </ul>
            </li>
            <li class="same list">
              <h4 class="first">Date of founding</h4>
              <p class="second">05 Jun 1985</p>
            </li>
            <li class="same list">
              <h4 class="first">Website</h4>
              <p class="second">www.companya.com</p>
            </li>
            <li class="same list">
              <h4 class="first">CAC Number</h4>
              <p class="second">www.companya.com</p>
            </li>
            <li class="same list">
              <h4 class="first">No. of Employees</h4>
              <p class="second">450</p>
            </li>
            <li class="flex-col list">
              <h4 class="address-last">Address</h4>
              <p class="second-col">Plot 470, Abogo Lagerma Road Off Constitution <br> Avenue, Off Constitution Avenue</p>
            </li>
            <li class="last-li list">
              <div class="action">
                <a class="action-btn cancel-btn" href="">Cancel</a>
                <a class="action-btn approve-btn" href="">Approve Account</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "recruiter_3"
}


</script>

<style scoped>
.container-fluid{
  padding: 0 80px !important;
}

.container-fluid .tile{

}

.container-fluid {

}

.container-fluid .nav-tabs{
  margin: 48px 0 32px 0;
  position:relative;
  border:none!important;
  width: 600px;
}

.container-fluid .nav-tabs .active{
  border-bottom: 3px solid #0385F3 !important;
  color:#0385F3!important;
  border-top: none;
  border-left: none;
  border-right: none;
}

/* #my-account .container-fluid #tile-1 .slider{
    display:inline-block;
    width:30px;
    height:4px;
    border-radius:3px;
    background-color:#0385F3;
    position:absolute;
    z-index:1200;
    bottom:0;
    transition: .1s;
} */

.container-fluid .nav-tabs .nav-item{
  margin:0px!important;
}

.container-fluid .nav-tabs .nav-item .nav-link{
  position:relative;
  margin-right:0px!important;
  padding: 12px 32px!important;
  font-size:16px;
  color:#8B90A0;
  border-bottom: 1px solid #8B90A0;
  font-size: 14px;
}

.container-fluid .nav-tabs .nav-item .nav-link:hover{
  border-bottom: 3px solid #0385F3 !important;
  border-top: none;
  border-left: none;
  border-right: none;
}

/* #my-account .container-fluid #tile-1 .nav-tabs .nav-link {
    border: none !important;
    border-bottom: 1px solid #8B90A0 !important;
} */

.container-fluid .tab-content{
  margin-top: 32px;
}

.container-fluid .tab-content .tab-content-inner{

}

.container-fluid .tab-content .tab-content-inner .row-custom{

}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr{
  border: 1px solid #F0F1F3;
  border-radius: 4px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .profile-recutier{
  flex-wrap: wrap;

}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list{
  padding: 32px 0;
  margin: 0 32px;
  border-bottom: 1px solid #F0F1F3;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .recurtier-main{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .recurtier-main .img-otr{

}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .recurtier-main .img-otr .img-inr{

}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .recurtier-main .recruiter-otr{
  padding-left: 20px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .recurtier-main .recruiter-otr .recruiter-head{
  font-size: 24px;
  line-height: 32px;
  padding-bottom: 4px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .recurtier-main .recruiter-otr .recruiter-desc{
  font-size: 16px;
  line-height: 24px;
  color: #0385F3;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .third{
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .third .Industry{
  font-size: 14px;
  line-height: 24px;
  color: #8B90A0;
  padding-right: 20px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .third .industry-inr{
  display: flex;
  align-items: center;
}
.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .third .industry-inr .Industry-list:not(:first-child){
  margin-right: 16px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .third .industry-inr .Industry-list{
  padding: 10px 32px;
  border-radius: 24px;
  background-color: #FAFAFC;
  color: #505565;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .same-otr{

}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .same-head{
  font-size: 14px;
  line-height: 24px;
  color: #8B90A0;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .list .same-desc{
  font-size: 16px;
  line-height: 24px;
  color: #505565;
}


.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .profile-recutier{
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .second1 .company-det{
  font-size: 18px;
  line-height: 24px;
  color: #8B90A0;
  padding-bottom: 20px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .second1 .company-desc-1{
  font-size: 16px;
  line-height: 32px;
  color: #8B90A0;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .second1 .company-desc-2{
  font-size: 16px;
  line-height: 32px;
  color: #8B90A0;
  padding-top: 16px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .second1 .company-desc-2 .read-more{
  font-size: 16px;
  line-height: 32px;
  text-decoration-line: underline;
  color: #0385F3;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .same{
  display: flex;
  align-items: center;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .first{
  font-size: 14px;
  line-height: 24px;
  color: #8B90A0;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .second{
  font-size: 14px;
  line-height: 24px;
  padding-left: 55px;
  color: #505565;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .flex-col{
  display: flex;
  flex-direction: column;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .flex-col .address-last{
  font-size: 14px;
  line-height: 24px;
  color: #8B90A0;
  padding-bottom: 4px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .flex-col .second-col{
  font-size: 14px;
  line-height: 24px;
  color: #505565;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .last-li{

}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .last-li .action{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .last-li .action .cancel-btn{
  padding: 12px 0;
  width: 235px;
  background: #FAFAFA;
  text-align: center;
  border-radius: 4px;
  color: #8B90A0;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .last-li .action .approve-btn{
  padding: 12px 0;
  width: 235px;
  background: #0385F3;
  text-align: center;
  border-radius: 4px;
  color: white;
  margin-left: 11px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .row-inr .last-li .action .action-btn{

}


@media (min-width: 320px) and (max-width: 1200px){
  .container-fluid{
    padding: 0 15px !important;
  }
}
</style>
