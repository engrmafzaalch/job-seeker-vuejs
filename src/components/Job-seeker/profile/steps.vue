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
import axios from "axios";

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
  },

  beforeCreate() {
    axios.get('http://167.99.198.38:32001/list/countries', {
      headers: {
        'Authorization': `Bearer eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJFZ0NPRTB3ZDVEMjZfX0ZUZURmSmhNejlucndZYXM2czFGaE5EcHo2djFJIn0.eyJleHAiOjE2MTEyMzAwMTksImlhdCI6MTYxMTIyNjQxOSwianRpIjoiMTU2YWM2OTktZjNiNS00MDQ1LWIwYWEtMzJlZTNmNTQ0Mjc0IiwiaXNzIjoiaHR0cDovLzE3OC42Mi44Ny4xNjI6ODA4MC9hdXRoL3JlYWxtcy9tYXN0ZXIiLCJzdWIiOiI3ZDVhOTc2NC1kN2RiLTQ2ZTktYTdjMi01ZTdmNWZlOGUwMDYiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJhZG1pbi1jbGkiLCJzZXNzaW9uX3N0YXRlIjoiNDM3MmU1ZmUtOTA5Zi00YTQwLWE4MzYtMzk0NzMxYjBmM2RiIiwiYWNyIjoiMSIsInJlYWxtX2FjY2VzcyI6eyJyb2xlcyI6WyJvZmZsaW5lX2FjY2VzcyIsInVtYV9hdXRob3JpemF0aW9uIiwiSk9CU0VFS0VSIl19LCJzY29wZSI6InByb2ZpbGUgZW1haWwiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwibmFtZSI6IlRvbnkgQXlhYmFtIiwicHJlZmVycmVkX3VzZXJuYW1lIjoidG9ueUBnbWFpbC5jb20iLCJnaXZlbl9uYW1lIjoiVG9ueSIsImZhbWlseV9uYW1lIjoiQXlhYmFtIiwiZW1haWwiOiJ0b255QGdtYWlsLmNvbSJ9.oriQrwqrbp8R94vQJcl2XuY4wlRYcCzelIAaZiSfz78B-ryUGQU3p4lpkRGZpdU_lrBRgUTB4kteIp5uHfb2XQ9iUnghKuwIIMR46jOBmDptk8P1sNHIVEYq-61XMHmfQrwyPnkY2ufxRVCWv8wV0onKrHSD6jepwvp8Opkm-4xZY5ZaRpAVzGAJwj-WRNVI3NPg5wOsCUgTzhXyguBAHko_uMoXug-oHOKiMStoyjQ068McwaoHKiu93SWZ6fxNS0IQwmw6Q4MG2KuKMiyCGNd8fjxPjEOXNsF1TUifyGHXq2zRHU4hbP92QBDShRaANqONZEK6pQLnQeM3e0PQig`
      }
    })
      .then((res) => {
        this.countries = res.data
        console.log("data", res.data)
      })
      .catch((error) => {
        console.error(error)
      })
  },

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
  font-family: Open Sans;
}

.progressbar {
  counter-reset: step;
  display: flex;
  min-width: -webkit-fill-available;
  padding-top: 20px;
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
@media screen and (max-width: 462px){
  .progressbar li {
    position: relative;
    list-style: none;
    float: left;
    width:15%;
  font-size: 10px;
    text-align: center;
  }
}
@media screen and (max-width: 372px){
  .progressbar li {
    position: relative;
    list-style: none;
    float: left;
    width:15%;
    font-size: 9px;
    text-align: center;
  }
}
@media screen and (max-width: 340px){
  .progressbar li {
    position: relative;
    list-style: none;
    float: left;
    width:15%;
    font-size: 8px;
    text-align: center;
  }
  .progressbar li:before {
    content: counter(step);
    counter-increment: step;
    width: 30px;
    height: 30px;
    border: 1px solid ;
    display: block;
    text-align: center;
    margin: 0 auto 10px auto;
    border-radius: 50%;
    background-color: white;

    /* Center # in circle */
    line-height: 28px;
  }
  .progressbar li:after {
    content: "";
    position: absolute;
    width: 100%;
    height: 0px;
    /*   background: orange ; */
    top: 15px; /*half of height Parent (li) */
    left: -50%;
    z-index: -1;
    border: 1px dashed;
    border-color: grey;
  }
}
</style>
