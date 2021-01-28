<template>
<div class="container-fluid">
  <div class="row">

    <div class="col-sm-4">

      <div class="row">
        <div class="col-12">
          <h2 class="my-3">Add New Support User</h2>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <input type="text" class="form-control mt-2" placeholder="Name">
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <input type="text" class="form-control mt-3" placeholder="Email Address">
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <input type="text" class="form-control mt-3" placeholder="Mobile Number">
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <button class="btn btn-light btn-block mt-3">Cancel</button>
        </div>
        <div class="col-md-6">
          <button class="btn btn-primary btn-block my-3">Add User</button>
        </div>
      </div>

    </div>

    <div class="col-sm-8">

      <div class="row">
        <div class="col-12">
          <h4 class="my-4">Old Support User Details</h4>
        </div>
      </div>

      <div class="row">
        <div class="col-12">
          <div class="card mb-3">
            <div class="card-body">
              <div class="row">
                <div class="col-md-1">
                  <div>
                    <img src="../../../assets/Ellipse 5 (3).png" height="80" width="auto"/>
                  </div>
                </div>
                <div class="col-md-4">
                  <div class="name">
                    <span class="name_head line-height">Jaydon Dorwart</span><br>
                    <span><a href="#">Executive</a></span>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="info">
                    <span class="text-black-50 line-height">Email Address</span><br>
                    <span class="years">Support@infohob.com</span>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="info">
                    <span class="text-black-50 line-height">Mobile Number</span><br>
                    <span class="years">+234-805-5557-1</span>
                  </div>
              </div>
              </div>
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
  name: "MyAccount_3"
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
.card {
  background: #FAFDFF;
}
@media screen and (min-width: 986px){
  .name {
    margin-left: 30px;
    margin-top: 10px;
  }
  .info {
    margin-top: 10px;
  }
}
@media screen and (max-width: 985px) and (min-width: 768px){
  .name {
    margin-left: 40px;
  }
}
</style>
