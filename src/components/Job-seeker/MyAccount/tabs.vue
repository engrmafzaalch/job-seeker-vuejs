<template>
<div class="container vh-100">
  <index_myAccount/>
  <div class="tab_bar py-4">
     <a-tabs v-bind:default-active-key="[$store.state.tab]" @change="callback">
      <a-tab-pane  key="1" tab="Profile Summery"/>
      <a-tab-pane key="2" tab="Education"/>
      <a-tab-pane key="3" tab="Experience and Skills"/>
      <a-tab-pane key="4" tab="Projects"/>
      <a-tab-pane key="5" tab="Resume/CV"/>
    </a-tabs>
  </div>
  <div class="row">
    <div class="progression-content">
      <section v-if="$store.state.tab == 1">
        <ProfileSummary/>
      </section>
      <section v-if="$store.state.tab == 2">
        <Education/>
      </section>
      <section v-if="$store.state.tab == 3">
        <Experience/>
      </section>
      <section v-if="$store.state.tab == 4">
        <Project/>
      </section>
      <section v-if="$store.state.tab == 5">
        <Documents/>
      </section>
      <section v-if="$store.state.tab == 6">
        <Skills/>
      </section>
      <section v-if="$store.state.tab == 7">
        <MyProfile/>
      </section>
    </div>
  </div>
</div>
</template>

<script>
import index_myAccount from "./index_myAccount";
import ProfileSummery from "./ProfileSummery";
import Education_in_MyAccount from "./Education_in_MyAccount";
import Experience_and_Skills from "./Experience_and_Skills";
import Projects from "./Projects";
import Resume_CV from "./Resume_CV";

export default {
  name: "tabs",

  components:{
    index_myAccount : index_myAccount,
    ProfileSummery : ProfileSummery,
    Education_in_MyAccount : Education_in_MyAccount,
    Experience_and_Skills : Experience_and_Skills,
    Projects : Projects,
    Resume_CV : Resume_CV


  }
}

</script>

<style scoped>

</style>
