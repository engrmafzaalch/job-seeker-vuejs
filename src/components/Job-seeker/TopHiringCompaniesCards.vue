<template>
  <div class="">
    <!-- <input type="checkbox" id="switch" class="checkbox" />
    <label for="switch" class="toggle">
      <p>Recent Jobs Featured Jobs</p>
    </label> -->
    <div class="row">
      <div class="col-12">
        <div class="row mt-30px mlr-10">
          <div class="col-3">
            <div class="jobs-cards">
              <div
                class="pading-top-20px-right-80px align-item-center justify-content-space-around"
              >
                <div class="text-align-left padding-right-20px">
                  <img src="../../assets/Vector.png" />
                </div>
                <div class="row justify-content-center text-center">
                  <img
                    class="image-tablet-height"
                    src="../../assets/Rectangle 11 (4).png"
                  />
                </div>
                <div class="pb-15 row justify-content-center text-center">
                  <span class="companies-name-logo"> Google Inc. </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="jobs-cards">
              <div
                class="pading-top-20px-right-80px align-item-center justify-content-space-around"
              >
                <div class="text-align-left padding-right-20px">
                  <img src="../../assets/Vector.png" />
                </div>
                <div class="row justify-content-center text-center">
                  <img
                    class="image-tablet-height"
                    src="../../assets/Rectangle 11 (5).png"
                  />
                </div>
                <div class="pb-15 row justify-content-center text-center">
                  <span class="companies-name-logo"> AT&T Inc. </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="jobs-cards">
              <div
                class="pading-top-20px-right-80px align-item-center justify-content-space-around"
              >
                <div class="text-align-left padding-right-20px">
                  <img src="../../assets/Vector.png" />
                </div>
                <div class="row justify-content-center text-center">
                  <img src="../../assets/Rectangle 11 (6).png" />
                </div>
                <div class="pb-15 row justify-content-center text-center">
                  <span class="companies-name-logo"> Dell </span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="jobs-cards">
              <div
                class="pading-top-20px-right-80px align-item-center justify-content-space-around"
              >
                <div class="text-align-left padding-right-20px">
                  <img src="../../assets/Vector.png" />
                </div>
                <div class="row justify-content-center text-center">
                  <img
                    class="image-tablet-height"
                    src="../../assets/Rectangle 11 (4).png"
                  />
                </div>
                <div class="pb-15 row justify-content-center text-center">
                  <span class="companies-name-logo"> Google Inc. </span>
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
.text-align-left {
  text-align: end;
}
.pading-top-20px-right-80px {
  padding-top: 20px;
}
.padding-right-20px {
  padding-right: 20px;
}
.mlr-10 {
  margin-left: 10px;
  margin-right: 10px;
}
.pb-15 {
  padding-bottom: 15px;
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

.align-item-center {
  align-items: center;
}

.justify-content-space-around {
  justify-content: space-around;
}
.companies-name-logo {
  font-family: Larsseit;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  color: #505565;
}
.display-flex {
  display: flex;
}
.mt-60px {
  margin-top: 60px;
}
.jobs-cards {
  background-color: #ffffff;
  border: 1px solid #f0f1f3;
  box-sizing: border-box;
  box-shadow: 0px 4px 60px rgba(53, 66, 85, 0.04);
  border-radius: 10px;
}
@media only screen and (min-width: 320px) and (max-width: 479px) {
}

@media only screen and (min-width: 480px) and (max-width: 767px) {
}

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .tablet-margin-10 {
    margin-top: 10px;
  }
  .companies-name-logo {
    font-size: 22px;
  }
  .image-tablet-height {
    height: 90px;
  }
}
@media only screen and (min-width: 992px) and (max-width: 1025px) {
  .tablet-margin-10 {
    margin-top: 10px;
  }
}
</style>