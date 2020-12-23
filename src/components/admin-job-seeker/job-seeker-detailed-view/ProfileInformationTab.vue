<template>
  <div class="border-box-profile-information">
    <div class="display-flex align-item-center">
      <div>
        <img src="../../../assets/Ellipse 5 (1).png" alt="" />
      </div>
      <div class="ml-20">
        <span class="job-seeker-detailed-profile-text">Desirae Dias</span>
      </div>
      <div class="ml-80">
        <div>
          <span class="detailde-page-job-seeker-profile-info-header"
            >Email Address</span
          >
        </div>
        <div>
          <span class="detailde-page-job-seeker-profile-info-data-text"
            >user@gmail.com</span
          >
        </div>
      </div>
      <div class="ml-80">
        <div>
          <span class="detailde-page-job-seeker-profile-info-header"
            >Contact Information</span
          >
        </div>
        <div>
          <span class="detailde-page-job-seeker-profile-info-data-text"
            >+ 9988776655</span
          >
        </div>
      </div>
      <div class="ml-80">
        <div>
          <span class="detailde-page-job-seeker-profile-info-header"
            >Location</span
          >
        </div>
        <div>
          <span class="detailde-page-job-seeker-profile-info-data-text"
            >Buenos Aires, Agentina</span
          >
        </div>
      </div>
    </div>
    <hr />
    <div>
      <div>
        <span class="about-content-title">About</span>
      </div>
      <div class="about-description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
        bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
        justo commodo. Proin sodales pulvinar sic tempor. Sociis natoque
        penatibus et magnis dis parturient. Sed nascetur ridiculus mus. Nam
        fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci,
        sed rhoncus pronin sapien nunc accuan eget.
      </div>
    </div>
    <hr />
    <div>
      <div class="display-flex">
        <div>
          <span class="display-info-title-job-seeker-detailed"
            >N.Y.S.C Number</span
          >
        </div>
        <div>
          <span class="display-info-job-seeker-detailed-info ml-80"
            >A00 - 4672468</span
          >
        </div>
      </div>
    </div>
    <hr />
    <div>
      <div class="display-flex">
        <div>
          <span class="display-info-title-job-seeker-detailed"
            >Date of Birth</span
          >
        </div>
        <div>
          <span class="display-info-job-seeker-detailed-info ml-80"
            >02 Mar 1990</span
          >
        </div>
      </div>
    </div>
    <hr />
    <div>
      <div class="display-flex">
        <div>
          <span class="display-info-title-job-seeker-detailed"
            >LinkedIn Profile</span
          >
        </div>
        <div>
          <span class="display-info-job-seeker-detailed-info ml-80"
            >https://www.linkedin.com/in/jane-doe 7a5a1019</span
          >
        </div>
      </div>
    </div>
    <hr />
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
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