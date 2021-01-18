<template>
  <div class="">
    <!-- <input type="checkbox" id="switch" class="checkbox" />
    <label for="switch" class="toggle">
      <p>Recent Jobs Featured Jobs</p>
    </label> -->
    <div class="row m-0">
      <div class="col-12 p-0">
        <div class="row mt-30px mlr-10">
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div class="jobs-cards">
              <div
                class="display-flex pading-top-20px-right-80px align-item-center justify-content-space-around"
              >
                <div>
                  <img src="../../assets/Rectangle 11.png" />
                </div>
                <div>
                  <div><span class="job-title">Front-end Developer</span></div>
                  <div class="display-flex mt-10px">
                    <div class="category-box"><span>Web Development</span></div>
                    <div class="category-box ml-10px">
                      <span>Angular</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ml-10px">
                <hr />
              </div>
              <div
                class="display-flex mt-20px align-item-center justify-content-space-around"
              >
                <div>
                  <div class="border-browser-job">Browse Job</div>
                </div>
                <div>
                  <span class="posted-ago-date-text"> Posted 2 days ago </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div class="jobs-cards">
              <div
                class="display-flex pading-top-20px-right-80px align-item-center justify-content-space-around"
              >
                <div>
                  <img src="../../assets/Rectangle 11 (1).png" />
                </div>
                <div>
                  <div><span class="job-title">Front-end Developer</span></div>
                  <div class="display-flex mt-10px">
                    <div class="category-box"><span>Web Development</span></div>
                    <div class="category-box ml-10px">
                      <span>Angular</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ml-10px">
                <hr />
              </div>
              <div
                class="display-flex mt-20px align-item-center justify-content-space-around"
              >
                <div>
                  <div class="border-browser-job">Browse Job</div>
                </div>
                <div>
                  <span class="posted-ago-date-text"> Posted 2 days ago </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
            <div class="jobs-cards">
              <div
                class="display-flex pading-top-20px-right-80px align-item-center justify-content-space-around"
              >
                <div>
                  <img src="../../assets/Rectangle 11 (2).png" />
                </div>
                <div>
                  <div><span class="job-title">Front-end Developer</span></div>
                  <div class="display-flex mt-10px">
                    <div class="category-box"><span>Web Development</span></div>
                    <div class="category-box ml-10px">
                      <span>Angular</span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="ml-10px">
                <hr />
              </div>
              <div
                class="display-flex mt-20px align-item-center justify-content-space-around"
              >
                <div>
                  <div class="border-browser-job">Browse Job</div>
                </div>
                <div>
                  <span class="posted-ago-date-text"> Posted 2 days ago </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.pading-top-20px-right-80px {
  padding-top: 20px;
  padding-right: 5px;
}
.mlr-10 {
  margin-left: 10px;
  margin-right: 10px;
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
  text-align: center;
}
.mt-10px {
  margin-top: 10px;
}
.ml-10px {
  margin-left: 10px;
}
.mt-30px {
  margin-top: 30px;
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
  font-size: 14px;
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

@media only screen and (min-width: 320px) and (max-width: 479px) {
  
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .job-title {
    font-size: 12px;
  }
  .category-box {
    font-size: 10px;
    padding: 4px;
  }
  .border-browser-job {
    width: 80px;
    height: 35px;
    font-size: 10px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1025px) {
}
</style>