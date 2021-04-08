<template>
  <div class="container mt-3">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="Details">
        <Recruiter/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Postings" force-render>
        <Recruiter_4/>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Payments">
        <Recruiter_5/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Recruiter from "./Recruiter";
import Recruiter_4 from "./Recruiter_4";
import Recruiter_5 from "./Recruiter_5";
export default {
  name: "tab_Recruiter",
  components: {
    Recruiter : Recruiter,
    Recruiter_4 : Recruiter_4,
    Recruiter_5 : Recruiter_5,
  },
  data() {
    return {};
  },
  methods: {
    callback(key) {
    },
  },
}
</script>

<style scoped>

</style>
