<template>
<div class="container vh-100">
  <div class="row pt-4">
    <div class="col-12 card">
      <div class="card-body">
          <div class="row">
            <div class="col-12 mt-2">
              <h3 class="text-primary">Skills</h3>
            </div>
          </div>
        <div class="row">
          <div class="col-12">
            <span>Key Skills</span>
            <span class="bg-light p-2 m-2 border_">C</span>
            <span class="bg-light p-2 m-2 border_">C++</span>
            <span class="bg-light p-2 m-2 border_">JAVA</span>
            <span class="bg-light p-2 m-2 border_">SQL</span>
            <span class="bg-light p-2 m-2 border_">Windows Server-2008</span>
          </div>
        </div>
        <hr>

        <div class="row">
          <div class="col-12 py-2">
            <h3 class="text-primary">Experience</h3>
          </div>
        </div>

        <div>
          <ul class="list_">
            <li class="pr-2">
              <span class="text-black-50 font_a">Employe Name</span><br>
              <span class="font_b">ABC Private Limited</span>
            </li>
            <li class="pr-2 pl-5">
              <span class="text-black-50 font_a">Job Title</span><br>
              <span class="font_b">Sr. Business Analyst</span>
            </li>
            <li class="pr-2 pl-2">
              <span class="text-black-50 font_a">Duration</span><br>
              <span class="font_b">Jun-2020 till now</span>
            </li>
            <li class="pr-2 pl-2">
              <span class="text-black-50 font_a">Location</span><br>
              <span class="font_b">Argentina, Buenos Aires</span>
            </li>
            <li class="pr-2 pl-2">
              <span class="text-black-50 font_a">Industry</span><br>
              <span class="font_b">Healthcare</span>
            </li>
            <li class="pr-1 pl-2">
              <span class="text-black-50 font_a">Work Type</span><br>
              <span class="font_b">Full Time</span>
            </li>
            <li class="pr-2 pl-1">
              <span class="text-black-50 font_a">Salary</span><br>
              <span class="font_b">75,000</span>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="col-12 pt-4 pb-2">
            <h6 class="text-black-50">Job Responsibility</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-12 pb-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean euismod bibendum laoreet.
              Proin gravida dolor sit amet lacus <br>
              accumsan et viverra justo commodo.
              Proin sodales pulvinar sic tempor.
              Sociis natoque penatibus et magnis dis parturient.
            </p>
          </div>
        </div>

        <hr>

        <div class="pt-2">
          <ul class="list_">
            <li class="pr-2">
              <span class="text-black-50 font_a">Employe Name</span><br>
              <span class="font_b">ABC Private Limited</span>
            </li>
            <li class="pr-2 pl-5">
              <span class="text-black-50 font_a">Job Title</span><br>
              <span class="font_b">Sr. Business Analyst</span>
            </li>
            <li class="pr-2 pl-2">
              <span class="text-black-50 font_a">Duration</span><br>
              <span class="font_b">Jun-2020 till now</span>
            </li>
            <li class="pr-2 pl-2">
              <span class="text-black-50 font_a">Location</span><br>
              <span class="font_b">Argentina, Buenos Aires</span>
            </li>
            <li class="pr-2 pl-2">
              <span class="text-black-50 font_a">Industry</span><br>
              <span class="font_b">Healthcare</span>
            </li>
            <li class="pr-1 pl-2">
              <span class="text-black-50 font_a">Work Type</span><br>
              <span class="font_b">Full Time</span>
            </li>
            <li class="pr-2 pl-1">
              <span class="text-black-50 font_a">Salary</span><br>
              <span class="font_b">75,000</span>
            </li>
          </ul>
        </div>
        <div class="row">
          <div class="col-12 pt-4 pb-2">
            <h6 class="text-black-50">Job Responsibility</h6>
          </div>
        </div>
        <div class="row">
          <div class="col-12 pb-2">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Aenean euismod bibendum laoreet.
              Proin gravida dolor sit amet lacus <br>
              accumsan et viverra justo commodo.
              Proin sodales pulvinar sic tempor.
              Sociis natoque penatibus et magnis dis parturient.
            </p>
          </div>
        </div>
        <div class="row py-2">
          <div class="col-12">
            <button class="btn btn-primary float-right px-5">Edit Details</button>
          </div>
        </div>

      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Experience_and_Skills"
}
</script>

<style scoped>
.card {
  width: 1400px;
}
.border_ {
  border-radius: 24px;
}
.list_ {
  list-style: none;
  display: inline;
  margin-left: -38px;
}
.list_ li {
  display: inline-block;
}
.font_a {
  font-size: 12px;
}
.font_b {
  font-size: 14px;
  font-weight: bold;
}
</style>
