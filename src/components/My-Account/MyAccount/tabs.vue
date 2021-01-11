<template>
<div class="container vh-100">
  <div class="tab_bar py-4">
    <a-tabs default-active-key="1" @change="callback">

      <a-tab-pane key="1" tab="Profile Summery">
      </a-tab-pane>

      <a-tab-pane key="2" tab="Education">
      </a-tab-pane>

      <a-tab-pane key="3" tab="Experience and Skills">
      </a-tab-pane>

      <a-tab-pane key="4" tab="Projects">
      </a-tab-pane>

      <a-tab-pane key="5" tab="Resume/CV">
      </a-tab-pane>

    </a-tabs>
  </div>
</div>
</template>

<script>
export default {
  name: "tabs"
}
</script>

<style scoped>

</style>
