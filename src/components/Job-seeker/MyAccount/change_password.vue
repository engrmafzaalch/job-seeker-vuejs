<template>
  <div class="container">
    <div class="wrapper">
      <div class="heading">
        <strong>Change Password</strong>
      </div>
      <div class="input-outer">
        <label for="old_password">Old Password</label>
        <input class="input" type="password" placeholder="Enter you old password here ...">
      </div>
      <div class="input-outer">
        <label for="new_password">New Password</label>
        <input class="input" type="password" placeholder="Enter you new password here ...">
      </div>
      <div class="input-outer">
        <input class="input" type="password" placeholder="Confirm your new password">
      </div>
      <div class="action">
        <a class="action-btn cancel-btn" href="">Reset</a>
        <a class="action-btn approve-btn" href="">Post Job</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "change_password"
}

</script>

<style scoped>
.container{
  margin-top: 48px;
}
.container .wrapper{
  width: 480px;
  margin: 0 auto;
}
.heading{
  margin-bottom: 32px;
}
.heading strong{
  font-size: 32px;
}

.input-outer{
  width: 100%;
}
.input-outer label{
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 9px;
}
.input-outer-tag{
  width: 100%;
  /*padding-left: 30px;*/
}
.input{
  width: 100%;
  padding: 12px 16px;
  color: #8B90A0;
  border-radius: 4px;
  border: 1px solid #8B90A0;
  outline: none;
  box-shadow: none;
  margin-bottom: 31px;
}

.container .wrapper .action{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 32px 0 80px 0;
}
.cancel-btn{
  padding: 12px 0;
  width: 235px;
  background: #FAFAFA;
  text-align: center;
  border-radius: 4px;
  color: #8B90A0;
}
.approve-btn{
  padding: 12px 0;
  width: 235px;
  background: #0385F3;
  text-align: center;
  border-radius: 4px;
  color: white;
  margin-left: 10px;
}

@media (min-width: 320px) and (max-width: 1024px) {
  .container .wrapper{
  width: 100% !important;
  margin: 0 auto;
}
}
</style>
