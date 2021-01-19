<template>
  <div>
  <div class="container-fluid">
    <div class="row">
    <ul class="col-12 progressbar text-primary">
      <li :class="{ 'active' : $store.state.step == 1}">Profile Summery</li>
      <li :class="{ 'active' : $store.state.step == 2}">Education</li>
      <li :class="{ 'active' : $store.state.step == 3}">Experience</li>
      <li :class="{ 'active' : $store.state.step == 4}">Projects</li>
      <li :class="{ 'active' : $store.state.step == 5}">Documents</li>
      <li :class="{ 'active' : $store.state.step == 6}">Key Skills</li>
      <li :class="{ 'active' : $store.state.step == 7}">My Profile</li>
    </ul>
    </div>
  </div>
    <div class="row">
    <div class="progression-content">
  <section v-if="$store.state.step == 1">
    <ProfileSummary/>
  </section>
  <section v-if="$store.state.step == 2">
    <Education/>
  </section>
  <section v-if="$store.state.step == 3">
    <Experience/>
  </section>
  <section v-if="$store.state.step == 4">
    <Project/>
  </section>
  <section v-if="$store.state.step == 5">
    <Documents/>
  </section>
  <section v-if="$store.state.step == 6">
    <Skills/>
  </section>
  <section v-if="$store.state.step == 7">
    <MyProfile/>
  </section>
    </div>
    </div>
  </div>
</template>

<script>
import ProfileSummary from "./ProfileSummary"
import Education from "./Education";
import Experience from "./experience";
import Project from "./project";
import Documents from "./documents";
import Skills from "./skills";
import MyProfile from "./myProfile";
import {store} from "../../../store/store";

export default {
  name : "Steps",
  store,
  components : {
    ProfileSummary : ProfileSummary,
    Education : Education,
    Experience : Experience,
    Project : Project,
    Documents : Documents,
    Skills : Skills,
    MyProfile : MyProfile
  }
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:700);

body {
  background-color: #2979FF;

}

.container {

  color: #0385F3;
  /*background: #2979FF;*/
  font-family: 'Roboto', sans-serif;
}

.progressbar {
  counter-reset: step;
  display: flex;
  min-width: -webkit-fill-available;
  padding-top: 40px;
}

.progressbar li {
  position: relative;
  list-style: none;
  float: left;
  width:15%;
  text-align: center;
}

/* Circles */
.progressbar li:before {
  content: counter(step);
  counter-increment: step;
  width: 40px;
  height: 40px;
  border: 1px solid ;
  display: block;
  text-align: center;
  margin: 0 auto 10px auto;
  border-radius: 50%;
  background-color: white;

  /* Center # in circle */
  line-height: 39px;
}
.progression-content{
  width: 100%;
  margin-top: 50px;
  padding-bottom: 50px;
}
.progressbar li:after {
  content: "";
  position: absolute;
  width: 100%;
  height: 0px;
  /*   background: orange ; */
  top: 20px; /*half of height Parent (li) */
  left: -50%;
  z-index: -1;
  border: 1px dashed;
  border-color: grey;
}

.progressbar li:first-child:after {
  content: none;
}

.progressbar li.active:before {
  background-color: #0084F4;
  color: #ffffff;
  content: "✔";
}

.progressbar li.active + li:after {
  /*   background:  #00E676; */
  /*   border-bottom: 1px dashed */
  /*border-color: #00E676;*/
}
</style>
