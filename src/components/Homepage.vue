<template>
  <div class="main-div">
    <div :style="cssProps">
      <left-side-back />
      <recent-jobs />
      <top-hiring-companies />
    </div>
  </div>
</template>

<script>
import LeftSideBack from "./Job-seeker/LeftSide-Back.vue";
import RecentJobs from "./Job-seeker/RecentJobs.vue";
import TopHiringCompanies from "./Job-seeker/TopHiringCompanies.vue";
export default {
  components: { LeftSideBack, RecentJobs, TopHiringCompanies },
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
</style>
