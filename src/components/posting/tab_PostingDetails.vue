<template>
  <div class="container mt-4">
    <h6> Postings / <a href="#">Posting details</a></h6>
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="Posting Details">
        <Posting_2/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Applicants" force-render>
        <Posting_3/>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Posting_2 from "./Posting_2";
import Posting_3 from "./Posting_3";

export default {
  name: "tab_PostingDetails",

  components:{
    Posting_2 : Posting_2,
    Posting_3 : Posting_3,
  },
  data() {
    return {};
  },
  methods: {
    callback(key) {
      console.log(key);
    },
  },
};
</script>

<style scoped>

</style>
