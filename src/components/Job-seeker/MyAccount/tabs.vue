<template>
<div class="container">
  <index_myAccount/>
  <div class="tab_bar py-4">
     <a-tabs v-bind:default-active-key="[$store.state.tab]" @changetab="callback">
      <a-tab-pane  key="1" tab="Profile Summery" v-on:click="changetab(1)"/>
      <a-tab-pane key="2" tab="Education" />
      <a-tab-pane key="3" tab="Experience and Skills" />
      <a-tab-pane key="4" tab="Projects" />
      <a-tab-pane key="5" tab="Resume/CV" />
       <div class="tabs-component">
         <ul class="tabs-component-tabs">
           <li class="tabs-component-tab">
             <a class="tabs-component-tab-a">…</a>
           </li>
         </ul>
         <div class="tabs-component-panels">
           <section class="tabs-component-panel">
             …
           </section>
         </div>
       </div>
    </a-tabs>
  </div>
  <div class="row">
    <div class="progression-content">
      <section v-if="$store.state.tab == 1">
        <index_myAccount/>
      </section>
      <section v-if="$store.state.tab == 2">
        <ProfileSummery/>
      </section>
      <section v-if="$store.state.tab == 3">
        <Education_in_MyAccount/>
      </section>
      <section v-if="$store.state.tab == 4">
        <Experience_and_Skills/>
      </section>
      <section v-if="$store.state.tab == 5">
        <Projects/>
      </section>
      <section v-if="$store.state.tab == 6">
        <Resume_CV/>
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
  methods:{
    changetab: function(tab) {
      console.log("testtt", tab)
    }
  }
}

</script>

<style scoped>

</style>
