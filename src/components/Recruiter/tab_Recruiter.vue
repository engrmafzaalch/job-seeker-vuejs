<template>
  <div class="container mt-3">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="Details">
        <Recruiter/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Postings" force-render>
        <recruiter_4/>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Payments">
        <Recruiter_5/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Recruiter from "./Recruiter";
import recruiter_4 from "./recruiter_4";
import Recruiter_5 from "./Recruiter_5";
export default {
  name: "tab_Recruiter",
  components: {
    Recruiter : Recruiter,
    recruiter_4 : recruiter_4,
    Recruiter_5 : Recruiter_5,
  },
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
}
</script>

<style scoped>

</style>
