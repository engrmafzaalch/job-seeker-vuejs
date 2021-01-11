<template>
  <div class="container vh-100">
    <div class="row justify-content-center mt-3">
      <div class="col-12">
        <h4>Enter Personal Information</h4>
      </div>
    </div>
    <form action="#">
      <div class="form-group">
        <div class="row my-4">
          <div class="col-6">
            <input type="text" class="form-control" id="name" placeholder="Name">
          </div>
          <div class="col-6">
            <select type="text" class="form-control" id="email_address">
              <option value="0">Email Address</option>
            </select>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-6">
            <select type="text" class="form-control" id="city">
              <option value="0">City</option>
            </select>
          </div>
          <div class="col-6">
            <select type="text" class="form-control" id="country">
              <option value="0">Country</option>
            </select>
          </div>
        </div>
        <div class="row my-4">
          <div class="col-6">
            <input type="text" class="form-control" id="mobile_number" placeholder="Mobile Number">
          </div>
          <div class="col-6">
            <input type="text" class="form-control" id="linked_in" placeholder="Linked-In Profile URL">
          </div>
        </div>
        <div class="row">
          <div class="col-12">
            <h6>Date of Birth</h6>
          </div>
        </div>
        <div class="row my-2">
          <div class="col-4">
            <select class="form-control" id="day">
              <option value="0">Day</option>
            </select>
          </div>
          <div class="col-4">
            <select class="form-control" id="month">
              <option value="0">Month</option>
            </select>
          </div>
          <div class="col-4">
            <select type="text" class="form-control" id="year">
              <option value="0">Year</option>
            </select>
          </div>
        </div>
        <div class="row py-2">
          <div class="col-12">
            <h6>N. Y. S. C. Number</h6>
          </div>
        </div>
          <div class="row">
            <div class="col-md-6">
              <input type="text" class="form-control" id="nysc" placeholder="A00 - 0 - 0 - 0 - 0 - 0 - 0 - 0">
            </div>
          </div>
      </div>
    </form>
    <hr>
    <div class="row float-right">
      <div class="col-12">
        <button class="btn btn-light mr-3 px-5">Go Back</button>
        <button class="btn btn-primary px-5">Complete Profile</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyProfile"
}
</script>

<style scoped>

</style>
