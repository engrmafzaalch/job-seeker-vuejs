<template>
  <div class="border-box-profile-information">
    <project-cards-tab />
    <project-cards-tab />

    <div class="button-class display-flex justify-content-flex-end">
      <div>
        <a-button type="primary" class="go-back-button-style"> Cancle</a-button>
      </div>
      <div class="ml-10">
        <a-button type="primary" html-type="submit" class="login-button-style">
          Approve Account
        </a-button>
      </div>
    </div>
  </div>
</template>

<script>
import ProjectCardsTab from "./ProjectCardsTab.vue";
export default {
  components: { ProjectCardsTab },
};
</script>

<style scoped>
.key-skills-text-tab {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  /* Text / 02 */

  color: #505565;
}
.go-back-button-style {
  background: #fafafa;
  border-radius: 4px;
  width: 210px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #8b90a0;
  height: 48px;
  border: 1px solid #fafafa;
}
.key-skills-title {
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
.key-skills-rodund-circle-box {
  background: #fafafc;
  /* UI / 03 */

  border: 1px solid #f0f1f3;
  border-radius: 24px;
  align-items: center;
  padding: 10px 32px;

  position: static;
  /* width: 73px; */
  height: 44px;
}
.skills-title-tab {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;

  color: #0385f3;
}
.login-button-style {
  background: #0385f3;
  border-radius: 4px;
  width: 210px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  height: 48px;
  font-size: 14px;
  color: #ffffff;
}
.display-info-title-job-seeker-detailed {
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
.border-box-profile-information {
  border: 1px solid #f0f1f3;
  border-radius: 4px;
  padding: 20px;
}
hr {
  display: block;
  height: 1px;
  border: 0;
  margin-left: 0px;
  width: 100%;
  border-top: 1px solid #f0f1f3;
  margin-top: 32px;
  margin-bottom: 32px;
  padding: 0;
}
.job-seeker-detailed-profile-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 32px;
  /* identical to box height, or 133% */

  display: flex;
  align-items: center;

  /* Text / 01 */

  color: #273238;
}
.detailde-page-job-seeker-profile-info-header {
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
.display-info-job-seeker-detailed-info {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
  /* identical to box height, or 171% */

  /* Text / 02 */

  color: #505565;
}
.detailde-page-job-seeker-profile-info-data-text {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  display: flex;
  align-items: center;

  /* Text / 02 */

  color: #505565;
}
.about-content-title {
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
.about-description {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 32px;
  /* or 200% */

  display: flex;
  align-items: center;

  /* Text / 02 */

  color: #505565;
}
</style>