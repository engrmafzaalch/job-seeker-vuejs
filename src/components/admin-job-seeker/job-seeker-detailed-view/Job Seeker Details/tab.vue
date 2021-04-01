<template>
<div class="container">
  <div class="row">
    <div class="col-12">
      <h6 class="mt-5">Job Seeker list / Job Seeker A /<a href="#">Details</a></h6>
    </div>
  </div>
  <div class="tab_bar py-4">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="Profile Summary">
        <Summery/>
      </a-tab-pane>

      <a-tab-pane key="2" tab="Education" force-render>
        <Education/>
      </a-tab-pane>

      <a-tab-pane key="3" tab="Experience and Skills">
        <Experience/>
      </a-tab-pane>

      <a-tab-pane key="4" tab="Projects">
        <Project/>
      </a-tab-pane>

      <a-tab-pane key="5" tab="Resume/CV">
        <Resume/>
      </a-tab-pane>
    </a-tabs>
  </div>
</div>
</template>

<script>
import {index} from "../../../../store/store";
import MyAccount from "./MyAccount";
import Summery from "./Summery";
import Education from "./Education";
import Experience from "./Experience";
import Project from "./Project";
import Resume from "./Resume";

export default {
  name: "tabs",
  store: index,
  components:{
    MyAccount : MyAccount,
    Summery : Summery,
    Education : Education,
    Experience : Experience,
    Project : Project,
    Resume : Resume,
  },
  data() {
    return {};
  },
  methods:{
    changetab: function(tab) {
      console.log("testtt", tabs)
    },
    callback(key) {
      console.log(key);
    },
  }
}

</script>

<style scoped>

</style>
