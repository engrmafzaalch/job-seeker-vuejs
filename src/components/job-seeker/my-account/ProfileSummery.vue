<template>
  <div class="container">
    <div class="row">
      <div class="col-12 card">
        <div class="card-body">
          <div class="row pt-3">
            <div class="col-12">
              <span class="text-black-50 about">About</span>
            </div>
          </div>
          <div class="row pt-4">
            <div class="col-lg-9">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Nunc a fermentum odio. Curabitur vulputate tellus tellus,
                id porta orci aliquet non. Nullam commodo neque sit amet augue posuere,
                sit amet ornare ligula suscipit. Integer volutpat, mi in rhoncus suscipit,
                urna felis blandit ex, sed tincidunt libero est et mi.
                Donec feugiat et ex eu aliquet. Morbi quis dui diam.
                Phasellus viverra enim pellentesque nibh suscipit, eu porttitor orci sagittis.
                Donec eleifend mauris elit, vitae ullamcorper felis pellentesque in.
                Nulla sed est ac nulla sodales luctus non et dui.
                Aliquam commodo vulputate lobortis. Cras mauris sem, blandit ut accumsan quis,
                posuere nec mauris. Curabitur vitae molestie est.
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Nullam et auctor metus, in iaculis purus.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas.
                Cras quis mauris id lacus ultricies rhoncus. <a href="#">READ MORE</a>
              </p>
            </div>
          </div>
          <hr>
          <div class="row py-4">
            <div class="col-md-2">
              <span class="text-black-50">N.Y.S.C Number</span>
            </div>
            <div class="col-md-10">
              <span class="ny">A00 - 4672468</span>
            </div>
          </div>
          <hr>
          <div class="row py-4">
            <div class="col-md-2">
              <span class="text-black-50">Date of Birth</span>
            </div>
            <div class="col-md-10">
              <span class="ny">02 March 1990</span>
            </div>
          </div>
          <hr>
          <div class="row pt-4 mb-5">
            <div class="col-md-2">
              <span class="text-black-50">LinkedIn Profile</span>
            </div>
            <div class="col-md-10">
              <a href="#" class="">https://www.linkedin.com/in/jane-doe 7a5a1019</a>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <button type="button" class="btn btn-primary float-right px-5">
                Edit Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProfileSummery"
}
</script>

<style scoped>
@media screen and (max-width: 350px) {
  button {
    width: 100%;
  }
}

.about {
  font-size: 14px;
}

.ny {
  font-weight: bold;
}
</style>
