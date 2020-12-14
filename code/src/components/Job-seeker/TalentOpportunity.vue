<template>
  <div class="display-flex justtify-content-space-around mt-60 mb-100">
    <div>
      <div><span class="category-box">Companies</span></div>
      <div class="mt-40 need-talent-text">
        <span> need talent? </span>
      </div>
      <div class="mt-30">
        <button class="get-started-now">Get Started Now</button>
      </div>
    </div>
    <div class="vertical"></div>
    <div>
      <div><span class="category-box">Talent</span></div>
      <div class="mt-40 need-talent-text">
        <span> want opportunities? </span>
      </div>
      <div class="mt-30">
        <button class="get-started-now">Get Started Now</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.vertical {
  border-left: 1px solid #f0f1f3;
  height: 200px;
  position: absolute;
  left: 50%;
}
.get-started-now {
  height: 42px;
  width: 260px;
  vertical-align: text-top;
  background: #0385f3;
  border-radius: 4px;
  font-family: Larsseit;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  /* identical to box height, or 16px */

  align-items: center;
  text-align: center;

  color: #ffffff;
}
.mt-30 {
  margin-top: 30px;
}
.display-flex {
  display: flex;
}
.justtify-content-space-around {
  justify-content: space-around;
}
.mt-60 {
  margin-top: 97px;
}
.mb-100 {
  margin-bottom: 100px;
}
.mt-40 {
  margin-top: 40px;
}
.need-talent-text {
  font-family: Larsseit;
  font-style: normal;
  font-weight: bold;
  font-size: 48px;
  line-height: 120%;
  /* identical to box height, or 58px */

  letter-spacing: 1px;
  text-transform: capitalize;

  color: #222222;
}
.category-box {
  background: rgba(90, 170, 223, 0.1);
  border-radius: 2px;
  padding: 10px;
  color: #8b90a0;
  font-family: SF UI Display;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 100%;
  /* identical to box height, or 20px */

  letter-spacing: 0.04em;
  text-transform: capitalize;

  color: #0084f4;
}
</style>