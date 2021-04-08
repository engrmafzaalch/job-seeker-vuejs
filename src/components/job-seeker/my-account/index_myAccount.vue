<template>
  <div class="container ">
    <div class="row py-4">
      <div class="col-sm-6">
        <h2>My Account</h2>
      </div>
      <div class="col-sm-6">
        <a-button type="primary" class="float-right">
          Update Profile
        </a-button>
      </div>
    </div>
    <div class="row">
      <div class="col-12 card">
        <div class="card-body">
          <div class="row">
            <div class="col-md-1">
              <div>
                <img src="../../../assets/Ellipse-5.png" height="60" width="auto"/>
              </div>
            </div>
            <div class="col-md-3">
              <span class="name_head">Jaydon Lipshutz</span><br>
              <span><a href="#">UI/UX Designer</a></span>
            </div>
            <div class="col-md-2">
              <div class="text-black-50">
                <span>Experience</span>
              </div>
              <div>
                <span class="years">5 Years</span>
              </div>
            </div>
            <div class="col-md-2">
              <div>
                <span class="text-black-50">Email Address</span>
              </div>
              <div>
                <span class="years">user@gmail.com</span>
              </div>
            </div>
            <div class="col-md-2">
              <div>
                <span class="text-black-50">Contact Information</span>
              </div>
              <div>
                <span class="number">+9988776655</span>
              </div>
            </div>
            <div class="col-md-2">
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
@media screen and (max-width: 300px) {
  button {
    width: 100%;
  }

  h2 {
    width: 100%;
    font-size: 24px;
    text-align: center;
  }
}

.name_head {
  font-weight: bold;
  font-size: 20px;
}

.years {
  font-size: 13px;
  font-weight: bold;
}

.number {
  font-size: 12px;
  font-weight: bold;
}
</style>
