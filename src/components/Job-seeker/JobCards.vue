<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-lg-4 col-md-6" v-for="n in 9 " :key="n">
        <JobCard/>
      </div>
    </div>
  </div>
</template>

<script>
import JobCard from './JobCard';
export default {
  components: {
    JobCard
  }
};
</script>

<style scoped>
.container-fluid {
  padding: 0 80px
}
@media only screen and  (max-width: 767px) {
  .col-md-4{
    padding: 0;
  }
  .container-fluid {
    padding: 0 20px
  }
}
</style>
