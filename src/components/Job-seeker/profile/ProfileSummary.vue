<template>
<div class="container justify-content-center">
<!--<div>-->
<!--  <h3>Profile Summery</h3>-->
<!--</div>-->
  <div class="mt-3">
    <fom action="#">
      <div class="form-group">
        <label for="profile-summery" class="profile">Profile Summery</label>
        <textarea class="form-control" rows="6" id="profile-summery" name="text" placeholder="Enter Profile Summery here"></textarea>
      </div>
      <button type="button" class="btn btn-primary float-right mt-5 px-5">Proceed</button>
    </fom>
  </div>
</div>
</template>

<script>
export default {
name: "ProfileSummary",
  props: ['updateStep'],
}
</script>

<style scoped>
.form-control {
  border-radius: 4px;
}
.btn {
  border-radius: 4px;
}
.profile {
  font-size: 18px;
}
</style>
