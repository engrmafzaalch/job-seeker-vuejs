<template>
  <div class="container-fluid mt-5 mb-5">
<div class="row">
  <div class="col-md-8 card">
    <div card-body>
      <div class="row">
        <div class="col-md-2">
          <img src="./google-icon.png" height="80" width="78"/>
        </div>
        <div class="col-10">
          <div class="row">
            <div class="col-8">
              <h2 class="float-left">Business Analyst</h2>
            </div>
            <div class="col-4">
              <button class="btn btn-primary">Part Time</button>
            </div>
          </div>
          <div class="row">
            <div class="col-1">
              <img src="./map-pin.svg" alt="map pin">
            </div>
            <div class="col-4">
              <h5 class="text-black-50">Abuja , Nigeria</h5>
            </div>
          </div>
        </div>
      </div>

    <hr class="mt-4"/>
    <div class="display-flex mt-4">
      <p class="sub_title">Opening:<span style="color: #0385F3; font-size: 16px"> 12 </span></p>
      <p class="sub_title pl-5">Job Applicants:<span style="color: #0385F3; font-size: 16px">1258 </span></p>
      <p class="sub_title" style="margin-left: auto">Posted 20 days ago</p>
    </div>
    <hr/>
    <div class="text-align-initial">
      <h3 class="description_heading py-2 ml-3">Description</h3>
      <h4 class="description_sub_text ml-3">The roles and responsibilities for Business Analyst :</h4>
      <ul class="text">
        <li>Review, analyse, evaluate and prioritize business requirements</li>
        <li>Document requirements, define scope, create impactful presentations as well as insightful spreadsheets</li>
        <li>Design workflow charts/diagrams, evaluate system capabilities, write specifications</li>
        <li>End to end project management: Define project tasks, actively track project progress, and milestones, publish periodic progress reports, recommend actions</li>
        <li>Prepare technical reports by collecting, analysing and summarizing information</li>
        <li>Conduct cost/benefit analysis </li>
        <li>Act as a Finance process SME, and suggest process improvements based on experience in applying industry best practices at scale</li>
      </ul>
    </div>
    <div>
      <h4 class="description_sub_text mt-4 ml-3 text-align-initial">
        Should have knowledge of :
      </h4>
      <ul class="text text-align-initial">
        <li>Knowledge of Agile development</li>
        <li>Knowledge of Finance processes and financial enterprise systems</li>
        <li>Well versed with tools such as JIRA</li>
        <li>Excellent written and verbal communication, including technical writing skills</li>
        <li>Mastery in documentation using MS Office suite (Excel/PPT/Word)</li>
        <li>Business case development</li>
        <li>Data analysis, reporting</li>
        <li>Stakeholder management</li>
      </ul>
    </div>

    <hr/>

    <div  style="text-align: left">
      <h3 class="description_heading">
        Education
      </h3>
      <h4 class="description_sub_text">UD: <span style="color: #8B90A0">B.Tech</span></h4>
      <h4 class="description_sub_text">PG: <span style="color: #8B90A0">Post Graduation Not Required</span></h4>
    </div>

    <hr/>

    <div style="text-align: left">
      <h3 class="description_heading">Requirement</h3>
      <p class="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
      <ul class="vector text">
        <li>Laboris laboris nostrud consect etur magna.</li>
        <li>Laboris laboris nostrud consect etur magna. Aliqua sint dolore esse ut occaecat do.</li>
        <li>Laboris laboris nostrud consect etur magna.</li>
      </ul>
    </div>

<hr/>

    <div class="row text-align-initial">
      <h3 class="col-12 description_heading">
        Skills
      </h3>
    </div>
      <div>
      <div class="row">
        <div class="col-lg-1 skill border border-light rounded mr-2 ml-3">C</div>
        <div class="col-lg-2 skill border border-light rounded mr-2">C++</div>
        <div class="col-lg-2 skill border border-light rounded mr-2">Jave</div>
        <div class="col-lg-2 skill border border-light rounded mr-2">SQL</div>
        <div class="col-lg-4 skill window_server border border-light rounded mr-2">
          Windows server-2008
        </div>
      </div>
    </div>

    <hr/>

<div style="text-align: left">
  <h3 class="description_heading">About Company</h3>
  <p class="text">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
</div>

    <hr/>

    <div style="text-align: left">
      <h3 class="description_heading">Perks and Benefits</h3>
      <ul class="vector2 description_sub_text" style="padding-left: 28px">
        <li>Lunch</li>
        <li class="ml-5">Healthcare</li>
        <li class="ml-5">Vacation/PaidTime Off</li>
      </ul>
      <ul class="vector2 description_sub_text" style="padding-left: 28px">
        <li>Gym Membership</li>
      </ul>

    </div>
  </div>
  </div>

    <div class="col-md-4 mt-4" style="text-align: left">

      <a-button @click="showModal" class="button_ my-5">Apply For This Position Now</a-button>
      <a-modal v-model="visible" @ok="handleOk" :footer="null">
        <div class="row pl-4">
          <div class="col-12">
            <input type="checkbox" class="form-check-input" value=""/>
            <h5>Continue with my CV</h5>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-12">
            <h3>Apply with new CV</h3>
          </div>
        </div>
        <div class="jumbotron justify-content-center text-center">
          <div class="row">
            <div class="col-12">
              <img src="../../Login/upload.png" height="40" width="42"/>
            </div>
          </div>
          <div class="row">
            <div class="col-12">
              <div>
                <span>Drop your CV here , or <a href="#">browse</a></span>
              </div>
              <div>
                <span>Support: PDF, JPGS, DOCS</span>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-6">
            <button class="btn btn-light btn-block">
              Cancel
            </button>
          </div>
          <div class="col-6">

            <button class="btn btn-primary btn-block">
              Apply
            </button>

          </div>
        </div>
      </a-modal>

    <p class="mt-4">or apply via Email</p>
    <a style="color: #00C87A" href="Career@gmail.com">Career@gmail.com</a>

      <div class=" mt-4" style="display: flex">
        <div class="btn_menu"><img src="./share.svg"/>Share</div>
        <div class="btn_menu ml-3"><img src="./tweeter.svg"/> Tweet</div>
        <div class="btn_menu ml-3"><img src="./save.svg"/> Save</div>
      </div>
      <h3 class="description_heading mt-5" style="font-size: 24px">Jobs you might be interested in</h3>

<div class="card mt-4">

  <h5 class="card_heading"> <img src="./globe.svg" alt="Image"/> Front-end Developer </h5>
  <div class="mt-3" style="display: flex; margin: auto">
  <p class="card_text"><img src="./map-pin-light.svg" class="mr-2"/> Abuja , Nigeria</p>
  <p class="card_text" style="margin-left: 40px "><img src="./dollar-sign-light.svg" class="mr-2"/> 2000 - 6000</p>

  </div>
</div>

      <div class="card mt-4">

  <h5 class="card_heading"> <img src="./globe.svg" alt="Image"/> Front-end Developer </h5>
  <div class="mt-3" style="display: flex; margin: auto">
  <p class="card_text"><img src="./map-pin-light.svg" class="mr-2"/> Abuja , Nigeria</p>
  <p class="card_text" style="margin-left: 40px "><img src="./dollar-sign-light.svg" class="mr-2"/> 2000 - 6000</p>

  </div>
</div>
      <div class="card mt-4">

  <h5 class="card_heading"> <img src="./globe.svg" alt="Image"/> Front-end Developer </h5>
  <div class="mt-3" style="display: flex; margin: auto">
  <p class="card_text"><img src="./map-pin-light.svg" class="mr-2"/> Abuja , Nigeria</p>
  <p class="card_text" style="margin-left: 40px "><img src="./dollar-sign-light.svg" class="mr-2"/> 2000 - 6000</p>

  </div>
</div>

      <div class="card mt-4">

        <h5 class="card_heading" > <img src="./globe.svg" alt="Image"/> Front-end Developer </h5>
        <div class="mt-3" style="display: flex; margin: auto">
          <p class="card_text"><img src="./map-pin-light.svg" class="mr-2"/> Abuja , Nigeria</p>
          <p class="card_text" style="margin-left: 40px "><img src="./dollar-sign-light.svg" class="mr-2"/> 2000 - 6000</p>

        </div>
      </div>

      <div class="card mt-4">

        <h5 class="card_heading"> <img src="./globe.svg" alt="Image"/> Front-end Developer </h5>
        <div class="mt-3" style="display: flex; margin: auto">
          <p class="card_text"><img src="./map-pin-light.svg" class="mr-2"/> Abuja , Nigeria</p>
          <p class="card_text" style="margin-left: 40px "><img src="./dollar-sign-light.svg" class="mr-2"/> 2000 - 6000</p>

        </div>
      </div>
      <div class="card mt-4">

        <h5 class="card_heading"> <img src="./globe.svg" alt="Image"/> Front-end Developer </h5>
        <div class="mt-3" style="display: flex; margin: auto">
          <p class="card_text"><img src="./map-pin-light.svg" class="mr-2"/> Abuja , Nigeria</p>
          <p class="card_text" style="margin-left: 40px "><img src="./dollar-sign-light.svg" class="mr-2"/> 2000 - 6000</p>

        </div>
      </div>
      <div class="card mt-4">

        <h5 class="card_heading"> <img src="./globe.svg" alt="Image"/> Front-end Developer </h5>
        <div class="mt-3" style="display: flex; margin: auto">
          <p class="card_text"><img src="./map-pin-light.svg" class="mr-2"/> Abuja , Nigeria</p>
          <p class="card_text" style="margin-left: 40px "><img src="./dollar-sign-light.svg" class="mr-2"/> 2000 - 6000</p>

        </div>
      </div>
      <div class="card mt-4">

        <h5 class="card_heading"> <img src="./globe.svg" alt="Image"/> Front-end Developer </h5>
        <div class="mt-3" style="display: flex; margin: auto">
          <p class="card_text"><img src="./map-pin-light.svg" class="mr-2"/> Abuja , Nigeria</p>
          <p class="card_text" style="margin-left: 40px "><img src="./dollar-sign-light.svg" class="mr-2"/> 2000 - 6000</p>

        </div>
      </div>

  </div>




</div>
    <!-- The Modal -->
    <div class="modal" id="myModal">
      <div class="modal-dialog">
        <div class="modal-content">

          <!-- Modal Header -->
          <div class="modal-header">
            <h4 class="modal-title">Continue with my CV</h4>
          </div>

          <!-- Modal body -->
          <div class="modal-body">
            <div class="row">
              <div class="col-12">
                <span>Apply with new CV</span>
              </div>
            </div>
            <div class="jumbotron">
              <div class="row">
                <div class="col-12">
                  <img src="../../Login/upload.png" height="40" width="42"/>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <h5>Drop your CV here , or <a href="#">browse</a></h5>
                </div>
              </div>
              <div class="row">
                <div class="col-12">
                  <h6>Support: PDF, JPGS, DOCS</h6>
                </div>
              </div>
            </div>
          </div>

          <!-- Modal footer -->
          <div class="modal-footer">
            <button type="button" class="btn btn-light" data-dismiss="modal">Cancel</button>
            <button type="button" class="btn btn-primary">Apply</button>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import Footer from "../Footer";
// import Header from "../Header.vue";

export default {
  name: "JobDetail",
  // components: {
  //   Footer,
  //   Header,
  // },
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
.container-fluid {
  font-family: Open Sans;
}
.wrapper{
  border-radius: 8px;
  border: 1px solid #F0F1F3;;
}
.buisness_heading{
  padding-top: 25px;
  text-align: left;
  font-width: bold;
  font-size: 32px;
  color: #505565;
}
.title_text{
  font-size: 16px;
  color: #8B90A0;
}
.sub_title{
  font-size: 14px;
  color: #8B90A0;
}
.description_heading{
  font-size: 24px;
  color: #505565;
}
.description_sub_text{
  font-size: 18px;
  color: #505565;
}
.text{
  font-size: 16px;
  color: #505565;
}

.vector{
  list-style-image: url('Vector.svg');
}
.skill{
  /*line-height: 44px;*/
  /*text-align: center;*/
  /*min-width: 73px;*/
  /*min-height: 44px;*/
  /*background: #FAFAFC;*/
  /*border: 1px solid #F0F1F3;*/
  border-radius: 24px;
  background: #FAFAFC;
}
.window_server{
  padding-left: 30px;
  padding-right: 30px;
}
.vector2{
  list-style-image: url('Vector2.svg');
  display: flex;
}
.btn_menu{
  background: #FAFAFC;
  border-radius: 4px;
  padding: 8px 20px;
}
.card{
  text-align: center;
  background: #FFFFFF;
  border: 1px solid #F0F1F3;
  box-sizing: border-box;
  border-radius: 10px;
}
.card_text{

  font-family: Open Sans;
  font-size: 14px;
  display: flex;
  color: #8B90A0;
}
.card_heading{
  font-size: 16px;
}
.button_ {
  background-color: #00C87A;
  color: white;
}
</style>
