<template>
  <div
    class="min-height-admin-job-seeker-detailed padding-job-seeker-detailed-page"
  >
    <div class="container-fluid text-align-initial">
      <a-breadcrumb>
        <a-breadcrumb-item class="job-seeker-detailed-page-breadcumb-link">
          JOB SEEKER LIST</a-breadcrumb-item>
        <a-breadcrumb-item class="job-seeker-detailed-page-breadcumb-link">
          <a>JOB SEEKER A</a>
        </a-breadcrumb-item>
        <a-breadcrumb-item
          class="job-seeker-detailed-page-breadcumb-link active-color"><a href="">DETAILS</a></a-breadcrumb-item>
      </a-breadcrumb>
    </div>
    <div class="text-align-initial mt-30">
      <a-tabs default-active-key="1">
        <a-tab-pane key="1" tab="Profile">
          <profile-information-tab />
        </a-tab-pane>
        <a-tab-pane key="2" tab="Education" force-render>
          Content of Tab Pane 2
        </a-tab-pane>
        <a-tab-pane key="3" tab="Experience and Skills">
          Content of Tab Pane 3
        </a-tab-pane>
        <a-tab-pane key="4" tab="Projects"> Content of Tab Pane 3 </a-tab-pane>
        <a-tab-pane key="5" tab="Resume / CV">
          Content of Tab Pane 3
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import ProfileInformationTab from "./ProfileInformationTab.vue";
export default {
  components: { ProfileInformationTab },
};
</script>

<style scoped>
.min-height-admin-job-seeker-detailed {
  min-height: calc(100vh - 100px);
}
.padding-job-seeker-detailed-page {
  padding: 50px 21px 50px 50px;
}
</style>
