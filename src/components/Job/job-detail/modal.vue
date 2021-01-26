<template>
  <div class="container justify-content-center">
    <a-button type="primary" @click="showModal" class="button_ my-5 px-5">
      Apply
    </a-button>
    <a-modal v-model="visible" @ok="handleOk" :footer="null">
      <div class="row my-2">
        <div class="col-12 text-center">
          <img src="./tick mark.png" height="64" width="65"/>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-12 text-center">
          <p>You have successfully applied for <br>
            "Business Analyst Position" at Google India Private Limited
          </p>
        </div>
      </div>
      <div class="row my-3">
        <div class="col-12 text-center">
          <button type="button" class="btn btn-primary px-5">Go to Your Applications</button>
        </div>
      </div>
    </a-modal>
  </div>
</template>

<script>
export default {
  name: "model",
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk(e) {
      console.log(e);
      this.visible = false;
    },
  },
};
</script>

<style scoped>
.button_ {
  /*background-color: #73d13d;*/
  /*color: white;*/
}
</style>
