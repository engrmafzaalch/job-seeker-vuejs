<template>
  <div class="mt-5">
    <a-button @click="showModal" type="primary" class="float-right">
        <span>
          <a-icon class="vertical-align-middle" type="plus" /> Add New Job Seeker
        </span>
    </a-button>

    <a-modal v-model="visible" @ok="handleOk" :footer="null">
      <div class="row">
        <div class="col-12">
          <h2>Add New Job Seeker</h2>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <input type="text" class="form-control my-2" id="Name" placeholder="Job Seeker Name *" required>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <input type="text" class="form-control mt-3" id="Email" placeholder="Email Address *" required>
        </div>
      </div>
      <div class="row">
        <div class="col-sm-6">
          <button @click="hideModal" class="btn btn-light btn-block my-4">
            Cancel
          </button>
        </div>
        <div class="col-sm-6">
          <button class="btn btn-primary btn-block my-4">
            Send Invite
          </button>
        </div>
      </div>
    </a-modal>

  </div>
</template>

<script>
export default {
name: "Add_New_Job_Seeker_Button",
  data() {
  return {
    visible: false,
  }
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  }
}
</script>

<style scoped>

</style>
