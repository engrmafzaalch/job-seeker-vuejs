<template>
  <div class="main-div">
    <div :style="cssProps">
      <div class="container-fluid">
        <div class="row">
          <div class="col-12">
<div class="">
        <left-side-back />
        </div>
        </div>
        </div>
        <div class="row justify-content-center mt-4 pt-5">
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 mt-5 py-3 ">
            <div class=" border borderRad  ">
            <div class="row justify-content-center text-center ">
             <div class="col-6 text-center">
               <div class="pt-3 pl-4">
               <span class="recent">Recent Jobs</span>
               </div>
               </div>
                  <div class="col-6 ">
                    <div class="feature1 text-center pt-3">
                      <span class="feature ">Featured Jobs</span>
                        </div>
               </div>
</div>
</div>

            </div>
        </div>
        <div class="row">
          <div class="col-12">
        <recent-jobs />
          </div>
        </div>
         <div class="row">
          <div class="col-12">
         <top-hiring-companies />
          </div>
        </div>
        <div class="row">
          <div class="col-12">
           <talent-opportunity />
          </div>
        </div>

      </div>
<!--      <footer-card />-->
    </div>
  </div>
</template>

<script>
import FooterCard from "./Job-seeker/FooterCard.vue";
import LeftSideBack from "./Job-seeker/LeftSide-Back.vue";
import RecentJobs from "./Job-seeker/RecentJobs.vue";
import TalentOpportunity from "./Job-seeker/TalentOpportunity.vue";
import TopHiringCompanies from "./Job-seeker/TopHiringCompanies.vue";
export default {
  components: {
    LeftSideBack,
    RecentJobs,
    TopHiringCompanies,
    TalentOpportunity,
    FooterCard,
  },
  data() {
    return {
      cssProps: {
        backgroundImage: `url(${require("@/assets/Header2x.jpg")})`,
        backgroundSize: "contain",
        height: "inherit",
        backgroundRepeatY: "no-repeat",
      },
    };
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-div {
  height: 640px;
}
.borderRad {
  border-radius: 50px;

}
.recent {

font-family: Larsseit;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 160%;
color: #8B90A0;
/* or 38px */
}
.feature {

font-family: Larsseit;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 160%;
color: #FFFFFF;


}
.feature1 {

max-width:260px;
height: 70px;
background: #0385F3;
border-radius: 50px;

}
</style>
