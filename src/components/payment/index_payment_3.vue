<template>
  <div class="container-fluid">
    <div class="tab-content">
      <div class="tab-content-inner">
        <div class="row-custom">
          <div class="job-posting">
            <h2 class="job-heading">Job Posting</h2>
          </div>
          <div class="points-per-post">
            <div class="point-posts-inner">
              <p class="point-desc">
                Points per post :
              </p>
              <div class="main-box-outer">
                <div class="main-box-inner">
                  <img class="img-box" src="../../assets/minus-square.png" height="24" width="24"/>
                  <p class="text">200</p>
                  <img class="img-box plus" src="../../assets/plus-square.png" height="24" width="24"/></div>
              </div>
            </div>
          </div>
        </div>
        <div class="row-custom">
          <div class="job-posting">
            <h2 class="job-heading"> CV Search:</h2>
          </div>
          <div class="points-per-post">
            <div class="point-posts-inner">
              <p class="point-desc">
                Points per CV Search :
              </p>
              <div class="main-box-outer">
                <div class="main-box-inner">
                  <img class="img-box minus" src="../../assets/minus-square.png" alt="minus">
                  <p class="text">200</p>
                  <img class="img-box plus" src="../../assets/minus-square.png" alt="plus">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row-custom">
          <div class="job-posting">
            <h2 class="job-heading">Amount-Points Conversion</h2>
          </div>
          <div class="points-per-post">
            <div class="point-posts-inner">
              <p class="point-desc">
                Amount per point :
              </p>
              <div class="main-box-outer">
                <div class="main-box-inner">
                  <img class="img-box minus" src="../../assets/minus-square.png" alt="minus">
                  <div class="main-text">
                    <img src="../../assets/n-icon.png" alt="n-icon">
                    <p class="text">200</p>
                  </div>
                  <img class="img-box plus" src="../../assets/minus-square.png" alt="plus">
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row-custom">
          <div class="job-posting">
            <h2 class="job-heading">No. of extra points needed for featured job</h2>
          </div>
          <div class="points-per-post">
            <div class="point-posts-inner">
              <p class="point-desc">
                Points per post
              </p>
              <div class="main-box-outer">
                <div class="main-box-inner">
                  <img class="img-box minus" src="../../assets/minus-square.png" alt="minus">
                  <div class="main-text">
                    <img src="../../assets/n-icon.png" alt="n-icon">
                    <p class="text">200</p>
                  </div>
                  <img class="img-box plus" src="../../assets/minus-square.png" alt="plus">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index_payment-3"
}


</script>

<style scoped>
.container-fluid{
  padding: 0 80px !important;
}


.container-fluid{

}

.container-fluid .nav-tabs{
  margin: 48px 0 0 0;
  position:relative;
  border:none!important;
  width: 400px;
}

.container-fluid .nav-tabs .active{
  background-color:transparent!important;
  border:none!important;
  color:#0385F3!important;
}

.container-fluid .slider{
  display:inline-block;
  width:30px;
  height:4px;
  border-radius:3px;
  background-color:#0385F3;
  position:absolute;
  z-index:1200;
  bottom:0;
  transition: .1s;
}

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
  border: none !important;
  border-bottom: 1px solid #8B90A0 !important;
}

.container-fluid .nav-tabs .nav-link {
  border: none !important;
  border-bottom: 1px solid #8B90A0 !important;
}

.container-fluid .tab-content{

}

.container-fluid .tab-content .tab-content-inner{

}

.container-fluid .tab-content .tab-content-inner .row-custom{
  padding: 32px 0;
  border-bottom: 1px solid #F0F1F3;
  width: 480px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .job-posting{

}

.container-fluid .tab-content .tab-content-inner .row-custom .job-posting .job-heading{
  font-size: 16px;
  line-height: 24px;
  color: #505565;
  padding: 0 0 10px 0;
}

.container-fluid .tab-content .tab-content-inner .row-custom .points-per-post{

}

.container-fluid .tab-content .tab-content-inner .row-custom .points-per-post .point-posts-inner{
  display: flex;
  align-items: center;
}

.container-fluid .tab-content .tab-content-inner .row-custom .points-per-post .point-posts-inner .point-desc{
  margin-right: 20px;
  font-size: 14px;
  line-height: 24px;
  color: #505565;
}

.container-fluid .tab-content .tab-content-inner .row-custom .points-per-post .point-posts-inner .main-box-outer{

}

.container-fluid .tab-content .tab-content-inner .row-custom .points-per-post .point-posts-inner .main-box-outer .main-box-inner{
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 156px;
  padding: 8px;
  border: 1px solid #F0F1F3;
  border-radius: 4px;
}

.container-fluid .tab-content .tab-content-inner .row-custom .points-per-post .point-posts-inner .main-box-outer .main-box-inner .img-box{

}

.container-fluid .tab-content .tab-content-inner .row-custom .points-per-post .point-posts-inner .main-box-outer .main-box-inner .img-box:hover{
  cursor: pointer;
}

.container-fluid .tab-content .tab-content-inner .row-custom .points-per-post .point-posts-inner .main-box-outer .main-box-inner .main-text{
  display: flex;
  align-items: center;
}

.container-fluid .tab-content .tab-content-inner .row-custom .points-per-post .point-posts-inner .main-box-outer .main-box-inner .text{
  font-size: 16px;
  line-height: 24px;
  color: #505565;
}
</style>
