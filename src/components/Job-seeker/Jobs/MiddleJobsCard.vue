<template>
  <div class="box-main-jobs-feature mtb-25 position-relative">
    <div v-if="isFeatured" class="position-absolute new-featured-box-main-jobs">
      <div><span class="color-new-featured-job-text">Featured</span></div>
    </div>
    <div class="part-time-label-box text-center">
      <span class="part-time-text">Part TIme</span>
    </div>
    <div class="display-flex text-align-center justify-content-space-between">
      <div>
        <img :src="require('@/assets/' + image + '')" alt="" />
      </div>
      <div>
        <div
          class="display-flex allign-item-center justify-content-space-between"
        >
          <div>
            <span class="featured-job-title-text">Front-end Developer</span>
          </div>
          <div>
            <span class="featured-job-company-title ml-16"
              >Google India Private Limited</span
            >
          </div>
          <div>
            <span class="featured-job-last-days-ago-title ml-16"
              ><i class="fa fa-clock-o" aria-hidden="true"></i
              ><span class="ml-16">2 days Ago</span>
            </span>
          </div>
        </div>
        <div
          class="display-flex allign-item-center justify-content-space-between mt-27"
        >
          <div class="job-category-featured-job-box">
            <span class="category-featured-job-box-text">Web Development</span>
          </div>
          <div
            class="display-flex text-align-center justify-content-space-between"
          >
            <div class="ml-18px">
              <span class="total-years-required"
                ><img src="../../../assets/Vector (5).png" alt="" /><span
                  class="ml-10"
                >
                  2-5 Years</span
                >
              </span>
            </div>
            <div class="ml-18px">
              <span class="total-employees"
                ><img src="../../../assets/Vector (6).png" alt="" /><span
                  class="ml-10"
                  >2000 - 6000</span
                ></span
              >
            </div>
            <div class="ml-18px">
              <span class="location-featured-jobs-card-text"
                ><img src="../../../assets/Vector (4).png" alt="" /><span
                  class="ml-10"
                  >Ibadan & Oyo State</span
                ></span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["isFeatured", "image", "isPartTime"],
};
</script>

<style scoped>
.mtb-25 {
  margin-top: 25px;
  margin-bottom: 25px;
}
.part-time-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #fafafa;
}
.part-time-label-box {
  margin-left: auto;
  margin-bottom: 10px;
  background: #0084f4;
  border-radius: 2px;
  width: 88px;
  height: 24px;
  align-items: center;
}
.position-relative {
  position: relative;
}
.position-absolute {
  position: absolute;
}
.new-featured-box-main-jobs {
  text-align: center;
  padding: 0px 8px;
  top: -12px;
  right: 12px;
  height: 22px;
  background: #ff4c68;
  border-radius: 2px;
}
.color-new-featured-job-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  color: #fafafa;
}
.mt-50 {
  margin-top: 50px;
}
.allign-item-center {
  align-items: center;
}
.ml-10 {
  margin-left: 10px;
}
.ml-18px {
  margin-left: 18px;
}
.location-featured-jobs-card-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #8b90a0;
}
.total-employees {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  display: flex;
  align-items: center;

  /* Text / 03 */

  color: #8b90a0;
}
.total-years-required {
  ont-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  display: flex;
  align-items: center;

  /* Text / 03 */

  color: #8b90a0;
}
.mt-27 {
  margin-top: 27px;
}
.category-featured-job-box-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  display: flex;
  align-items: center;

  /* Text / 03 */

  color: #8b90a0;
}
.job-category-featured-job-box {
  background: #fafafa;
  border-radius: 2px;
  padding: 5px;
}
.ml-16 {
  margin-left: 16px;
}
.featured-job-last-days-ago-title {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  display: flex;
  align-items: center;

  /* Text / 03 */

  color: #8b90a0;
}
.featured-job-company-title {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  display: flex;
  align-items: center;

  /* Text / 03 */

  color: #8b90a0;
}
.featured-job-title-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;

  /* Text / 01 */

  color: #000000;
}
.box-main-jobs-feature {
  background: #ffffff;
  /* UI / 03 */

  border: 1px solid #f0f1f3;
  box-sizing: border-box;
  border-radius: 4px;
  padding: 20px 12px 20px 20px;
}
.display-flex {
  display: flex;
}
.justify-content-space-between {
  justify-content: space-between;
}
.text-align-center {
  text-align: center;
}
</style>