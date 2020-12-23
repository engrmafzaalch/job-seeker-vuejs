<template>
  <div>
    <div class="main-height">
      <div class="row m-0">
        <div class="col-3 p-0"><LeftSideMenu /></div>
        <div class="col-6">
          <middle-jobs-section />
        </div>
        <div class="col-3">
          <right-side-featured-jobs />
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
.ant-steps-item-finish
  > .ant-steps-item-container
  > .ant-steps-item-tail::after {
  background-color: red !important;
}
.ant-steps-item-finish .ant-steps-item-icon > .ant-steps-icon {
  color: #ffffff;
}
.p-0 {
  padding: 0;
}
.steps-content {
  /* margin-top: 16px; */
  /* border: 1px dashed #e9e9e9; */
  border-radius: 6px;
  /* background-color: #fafafa; */
  min-height: 200px;
  display: flex;
  text-align: center;
  padding-top: 80px;
}

.steps-action {
  margin-top: 24px;
}
.display-flex {
  display: flex;
}
.main-height {
  min-height: calc(100vh - 110px);
}
</style>