<template>
  <div class="container-fluid">
    <div class="main-height">
      <div class="row">
        <div class="col-lg-2 p-0 left-side-menu">
          <LeftSideMenu/>
        </div>
        <div class="col-lg-7 middle-jobs-section">
          <middle-jobs-section/>
        </div>
        <div class="col-lg-3 right-side-jobs">
          <right-side-featured-jobs/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Footer from "./Footer";
import Header from "../Header.vue";
import LeftSideMenu from "./LeftSideFilterMenu";
import RightSideFeaturedJobs from "./RightSideFeaturedJobs.vue";
import MiddleJobsSection from "./MiddleJobsSection.vue";

export default {
  name: "JobsIndex",
  components: {
    Footer,
    Header,
    LeftSideMenu,
    RightSideFeaturedJobs,
    MiddleJobsSection,
  },
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    next() {
      this.current++;
    },
    prev() {
      this.current--;
    },
  },
};
</script>

<style scoped>

@media screen and (max-width: 991px) and (min-width: 765px) {
  .left-side-menu {
    width: 40%;
  }

  .middle-jobs-section {
    width: 60%;
  }
}

@media screen and (max-width: 250px) {
  .left-side-menu {
    width: 100%;
  }
}
</style>
