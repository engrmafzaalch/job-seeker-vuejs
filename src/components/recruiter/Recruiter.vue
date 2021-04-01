<template>
  <div class="container-fluid">

    <!--===================================

                 Nav tabs

     =================================== -->
<!--    <ul class="nav nav-tabs nav-justified" role="tablist">-->
<!--      <li class="nav-item">-->
<!--        <a class="nav-link active" id="details-tab" data-toggle="tab" href="#details" role="tab" aria-controls="details" aria-selected="true"> Details</a>-->
<!--      </li>-->
<!--      <li class="nav-item">-->
<!--        <a class="nav-link" id="postings-tab" data-toggle="tab" href="#postings" role="tab" aria-controls="postings" aria-selected="false"> Postings</a>-->
<!--      </li>-->
<!--      <li class="nav-item">-->
<!--        <a class="nav-link" id="payments-tab" data-toggle="tab" href="#payments" role="tab" aria-controls="payments" aria-selected="false"> Payments</a>-->
<!--      </li>-->
<!--    </ul>-->

    <!--===================================

                Tabs Content

     =================================== -->


    <div class="tab-content">
      <div class="tab-content-inner tab-pane fade show active" id="details" role="tabpanel" aria-labelledby="details-tab">
        <div class="row-custom">
          <ul class="row-inr">
            <li class="profile-recutier list">
              <div class="recurtier-main">
                <div class="img-otr">
                  <img class="img-inr" src="../../assets/user-img.png" alt="user">
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
      <div class="tab-content-inner tab-pane fade" id="postings" role="tabpanel" aria-labelledby="postings-tab">
        hello
      </div>
      <div class="tab-content-inner tab-pane fade" id="payments" role="tabpanel" aria-labelledby="payments-tab">
        hello1
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Recruiter"
}
</script>

<style scoped>



.container-fluid{
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

a:hover{
  text-decoration: none;
}

li{
  list-style: none;
  padding: 0;
  margin: 0;
}
ul{
  padding: 0;
  margin: 0;
}
p{
  padding: 0;
  margin: 0;
}

h1,h2,h3,h4,h5,h6{
  padding: 0;
  margin: 0;
}







.box{
  margin: 100px auto;
  width: 576px;
  background-color: white;
  border-radius: 8px;
  padding: 32px 48px;
  border: 1px solid #8B90A0;
}

.box .select-otr{
  position: relative;
  border: 1px solid #A1A4B1;
  border-radius: 4px;
  width: 100%;
}

.box .child:not(:last-child){
  margin-bottom: 20px;
}

.box .select-otr select{
  width: 100%;
  border-radius: 4px;
  color: #8B90A0;
  background: #FFFFFF;
  padding: 12px 16px;
  border: none;
  appearance: none;
}

.box select:focus{
  outline: none;
}

.box .select-otr .arrow{
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translate(0, -50%);
}


.input-outer{
  position: relative;
  width: 100%;
}

.box .input-outer .input{
  width: 100%;
  padding: 12px 16px;
  color: #8B90A0;
  border-radius: 4px;
  border: 1px solid #8B90A0;
  outline: none;
  box-shadow: none;
}

.box .input-outer .input::placeholder{
  color: #8B90A0;
}

.box .input-outer .search-icon{
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translate(0, -50%);
}

.box .input-outer .input{
  width: 100%;
  padding: 12px 16px;
  color: #8B90A0;
  border-radius: 4px;
  border: 1px solid #8B90A0;
  outline: none;
  box-shadow: none;
}

.box .last-li .action{
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.box .last-li .action .cancel-btn{
  padding: 12px 0;
  width: 100%;
  background: #FAFAFA;
  text-align: center;
  border-radius: 4px;
  color: #8B90A0;
  margin-right: 10px;
}

.box .last-li .action .approve-btn{
  padding: 12px 0;
  width: 100%;
  background: #0385F3;
  text-align: center;
  border-radius: 4px;
  color: white;
}

.box .last-li .action .action-btn{

}
</style>
