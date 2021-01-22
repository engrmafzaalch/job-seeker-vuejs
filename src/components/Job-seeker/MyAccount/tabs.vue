<template>
<div class="container">
  <index_myAccount/>
  <div class="tab_bar py-4">
    <a-tabs default-active-key="1" @change="callback">
      <a-tab-pane key="1" tab="Profile Summary">
        <ProfileSummery/>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Education" force-render>
        <Education_in_MyAccount/>
      </a-tab-pane>
      <a-tab-pane key="3" tab="Experience and Skills">
        <Experience_and_Skills/>
      </a-tab-pane>
      <a-tab-pane key="4" tab="Projects">
        <Projects/>
      </a-tab-pane>
      <a-tab-pane key="5" tab="Resume/CV">
        <Resume_CV/>
      </a-tab-pane>
    </a-tabs>
  </div>
<!--  <div class="row">-->
<!--    <div class="progression-content">-->
<!--      <section v-if="$store.state.tab == 1">-->
<!--        <ProfileSummery/>-->
<!--      </section>-->
<!--      <section v-if="$store.state.tab == 2">-->
<!--        <Education_in_MyAccount/>-->
<!--      </section>-->
<!--      <section v-if="$store.state.tab == 3">-->
<!--        <Experience_and_Skills/>-->
<!--      </section>-->
<!--      <section v-if="$store.state.tab == 4">-->
<!--        <Projects/>-->
<!--      </section>-->
<!--      <section v-if="$store.state.tab == 5">-->
<!--        <Resume_CV/>-->
<!--      </section>-->
<!--    </div>-->
<!--  </div>-->
</div>
</template>

<script>
import index_myAccount from "./index_myAccount";
import ProfileSummery from "./ProfileSummery";
import Education_in_MyAccount from "./Education_in_MyAccount";
import Experience_and_Skills from "./Experience_and_Skills";
import Projects from "./Projects";
import Resume_CV from "./Resume_CV";
import {store} from "../../../store/store";

export default {
  name: "tabs",
  store,
  components:{
    index_myAccount : index_myAccount,
    ProfileSummery : ProfileSummery,
    Education_in_MyAccount : Education_in_MyAccount,
    Experience_and_Skills : Experience_and_Skills,
    Projects : Projects,
    Resume_CV : Resume_CV
  },
  data() {
    return {};
  },
  methods:{
    changetab: function(tab) {
      console.log("testtt", tab)
    },
    callback(key) {
      console.log(key);
    },
  }
}

</script>

<style scoped>

</style>
