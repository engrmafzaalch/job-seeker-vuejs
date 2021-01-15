<template>
<div class="container vh-100">
  <div class="row justify-content-center mt-3">
    <div class="col-12">
      <h4>Enter Education Details</h4>
    </div>
  </div>
  <form action="#">
    <div class="form-group">
      <div class="row my-4">
        <div class="col-6">
          <input type="text" class="form-control" id="degree" placeholder="Degree/Certification">
        </div>
        <div class="col-6">
          <input type="text" class="form-control" id="college" placeholder="College/University/Academy">
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
          <input type="text" class="form-control" id="end_date" placeholder="End Date">
        </div>
        <div class="col-6">
          <input type="text" class="form-control" id="start_date" placeholder="Start_Date">
        </div>
      </div>
      <div class="row my-4">
        <div class="col-6">
        <textarea class="form-control" name="text" id="education_details" cols="" rows="6" placeholder="Education Details"></textarea>
        </div>
      </div>
      <div class="row justify-content-center text-center my-4">
        <div class="col-12">
          <button class="btn btn-light">
            Add More Education
          </button>
        </div>
      </div>
    </div>
  </form>
  <hr>
  <div class="row float-right">
    <div class="col-12">
      <button class="btn btn-light mr-3 px-5">Go Back</button>
      <button class="btn btn-primary px-5">Proceed</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "education"
}
</script>

<style scoped>

</style>
