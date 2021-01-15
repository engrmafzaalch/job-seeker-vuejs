<template>
  <div class="container vh-100">
    <ul class="progressbar">
      <li class="active">Profile Summery</li>
      <li>Education</li>
      <li>Experience</li>
      <li>Projects</li>
      <li>Documents</li>
      <li>Key Skills</li>
      <li>My Profile</li>
    </ul>
  </div>
</template>

<script>
export default {
name: "Steps"
}
</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Roboto:700);

body {
  background-color: #2979FF;

}

.container {
  width: 100%;
  color: #0385F3;
  /*background: #2979FF;*/
  font-family: 'Roboto', sans-serif;
  margin-top: 20%;
}

.progressbar {
  counter-reset: step;
}

.progressbar li {
  position: relative;
  list-style: none;
  float: left;
  width: 14.2%;
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
