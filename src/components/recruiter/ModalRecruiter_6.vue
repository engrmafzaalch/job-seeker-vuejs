<template>
  <div class="container justify-content-center">
    <a-button type="primary" @click="showModal" class="button_ my-5 px-5">
      Add New Recruiter
    </a-button>
    <a-modal v-model="visible" @ok="handleOk" :footer="null">
      <div class="row">
        <div class="col-12">
          <h2>Add New Recruiter</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <input type="text" class="form-control mt-2" placeholder="Recruiter Name *" required>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <input type="text" class="form-control mt-4" placeholder="Email Address *" required>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <h5 class="mt-3">Recruiter Type</h5>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="radio-button">
            <a-radio-group v-model="value" @change="onChange">
              <a-radio :value="1" class="border border-light rounded radio1">
                Company
              </a-radio>
              <a-radio :value="2" class="border border-light rounded radio2">
                Consultant
              </a-radio>
            </a-radio-group>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col-sm-6">
          <button @click="hideModal" class="btn btn-light btn-block mt-3">Cancel</button>
        </div>
        <div class="col-sm-6">
          <button class="btn btn-primary btn-block my-3">Send Invite</button>
        </div>
      </div>

    </a-modal>
  </div>
</template>

<script>
export default {
  name: "ModalRecruiter_6",
  data() {
    return {
      visible: false,
      value: 1,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    hideModal() {
      this.visible = false;
    },
    handleOk(e) {
      this.visible = false;
    },
    onChange(e) {
    },
  },
}
</script>

<style scoped>
.radio1 {
  background: rgba(90, 170, 223, 0.04);
}
.border {
  width: 228px;
  padding: 20px 30px;
}
@media screen and (max-width: 535px){
.border {
  width: 100%;
  margin-top: 10px;
}
}
</style>
