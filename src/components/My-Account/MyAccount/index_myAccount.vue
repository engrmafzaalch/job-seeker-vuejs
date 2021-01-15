<template>
<div class="container vh-100">
  <div class="row py-4">
    <div class="col-6">
      <h2>My Account</h2>
    </div>
    <div class="col-6">
      <button class="btn btn-primary float-right">
        Update Profile
      </button>
    </div>
  </div>
  <div class="row">
    <div class="col-12 card">
      <div class="card-body">
        <div class="row">
          <div class="col-1">
            <div>
              <img src="fake" alt="img">
            </div>
          </div>
          <div class="col-3">
            <span class="name_head">Jaydon Lipshutz</span><br>
            <span><a href="#">UI/UX Designer</a></span>
          </div>
          <div class="col-2">
            <div class="text-black-50">
              <span>Experience</span>
            </div>
            <div>
              <span class="years">5 Years</span>
            </div>
          </div>
          <div class="col-2">
            <div>
              <span class="text-black-50">Email Address</span>
            </div>
            <div>
              <span class="years">user@gmail.com</span>
            </div>
          </div>
          <div class="col-2">
            <div>
              <span class="text-black-50">Contact Information</span>
            </div>
            <div>
              <span class="years">+9988776655</span>
            </div>
          </div>
          <div class="col-2">
            <div>
              <span class="text-black-50">Address</span>
            </div>
            <div>
              <span class="years">Ibadan & Oyo State</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "index_myAccount"
}
</script>

<style scoped>
.name_head {
  font-weight: bold;
  font-size: 20px;
}
.years {
  font-size: 13px;
  font-weight: bold;
}
</style>
