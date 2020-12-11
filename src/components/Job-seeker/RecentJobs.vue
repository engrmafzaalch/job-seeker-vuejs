<template>
  <div class="mt-100">
    <!-- <input type="checkbox" id="switch" class="checkbox" />
    <label for="switch" class="toggle">
      <p>Recent Jobs Featured Jobs</p>
    </label> -->
    <!-- <div class="display-flex border-ligth-grey justify-content-center">
      <div><span>Recent jobs</span></div>
      <div><span> Featured jobs</span></div>
    </div> -->

    <div class="mb-50">
      <job-cards />
      <job-cards />
      <job-cards />
    </div>
  </div>
</template>

<script>
import JobCards from "./JobCards.vue";
export default {
  components: { JobCards },
};
</script>

<style scoped>
.pading-top-20px-right-80px {
  padding-top: 20px;
  padding-right: 80px;
}
.posted-ago-date-text {
  font-family: SF UI Display;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  color: #8b90a0;
}
.border-browser-job {
  display: table-cell;
  vertical-align: middle;
  border: 1px solid #0385f3;
  box-sizing: border-box;
  border-radius: 4px;
  width: 160px;
  height: 48px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #505565;
}
.mt-10px {
  margin-top: 10px;
}
.ml-10px {
  margin-left: 10px;
}
.mb-50 {
  margin-bottom: 50px;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  margin-left: 10px;
  width: 96%;
  border-top: 1px solid #f0f1f3;
  margin: 1em 0;
  padding: 0;
}
.align-item-center {
  align-items: center;
}
.category-box {
  background: #fafafc;
  border-radius: 2px;
  padding: 10px;
  color: #8b90a0;
}
.justify-content-space-around {
  justify-content: space-around;
}
.job-title {
  font-family: Larsseit;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  color: #000000;
}
.display-flex {
  display: flex;
}
.mt-60px {
  margin-top: 60px;
}
.jobs-cards {
  border: 1px solid #f0f1f3;
  height: 189px;
  border-radius: 10px;
}
.justify-content-center {
  justify-content: center;
}
.border-ligth-grey {
  border: 1px solid grey;
  padding: 10px;
}
.toggle {
  position: relative;
  display: inline-block;
  width: 400px;
  height: 52px;
  background-color: #ffffff;
  border-radius: 30px;
  border: 2px solid #e5e5e5;
}

/* After slide changes */
.toggle:after {
  content: "";
  position: absolute;
  width: 200px;
  height: 50px;
  border-radius: 5%;
  background-color: #0385f3;
  top: 1px;
  left: 1px;
  transition: all 0.5s;
}
.mt-100 {
  margin-top: 100px;
}
/* Toggle text */
p {
  font-family: Arial, Helvetica, sans-serif;
  font-weight: bold;
}

/* Checkbox cheked effect */
.checkbox:checked + .toggle::after {
  left: 192px;
}

/* Checkbox cheked toggle label bg color */
.checkbox:checked + .toggle {
  background-color: #ffffff;
}

/* Checkbox vanished */
.checkbox {
  display: none;
}
</style>