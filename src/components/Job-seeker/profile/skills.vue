<template>
<div class="container vh-100">
  <div class="row mt-5">
    <div class="col-12">
      <h4>Select Key Skills</h4>
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-md-6">
      <input
        type="text"
        class="form-control one"
        id="search"
        placeholder="Type in to Search or add new">
    </div>
  </div>
  <div class="row mt-2">
    <div class="col-sm-1">
      <div class="d-flex close_button">
      <div class="alert alert-secondary alert-dismissible fade show">
        <button class="close" type="button" data-dismiss="alert">&times;</button>
        C
      </div>
      <div class="col-md-1">
        <div class="alert alert-secondary alert-dismissible fade show">
          <button type="button" class="close" data-dismiss="alert">&times;</button>
        C++
        </div>
      </div>
    </div>
    </div>
  </div>
  <hr>
  <div class="row float-right buttonss">
    <div class="col-sm-12">
      <button class="btn btn-light px-5">Go Back</button>
      <button class="btn btn-primary px-5" @click="changed(7)">Proceed</button>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "Skills",
  methods:{
    changed: function(step) {
      this.$store.commit('change', step)
    }
  }
}
</script>

<style scoped>
h4 {
  font-size: 18px;
}
.container {
  font-family: Open Sans;
}
.buttonss {
  font-size: 14px;
}
.close_button {
  border-radius: 4px;
}
.one {
  border-radius: 4px;
}
</style>
