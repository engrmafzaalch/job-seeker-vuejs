<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12 float-right ">
        <Add_New_Job_Seeker_Button/>
      </div>
    </div>

    <a-tabs class="job-seeker-listing-tabs" default-active-key="1" size="large">
      <a-tab-pane key="1" tab="Job Seeker List">
        <div class="display-flex mt-30 mb-40">
          <div class="box-job-seeker-admin inner-div-css">
            <div>
              <span class="no-of-total-category">1202</span>
            </div>
            <div>
              <span class="total-number-title-text-job-seeker-admin"
                >Total Job Seekers</span
              >
            </div>
          </div>
          <div class="box-job-seeker-admin inner-div-css ml-10">
            <div>
              <span class="no-of-total-category">250</span>
            </div>
            <div>
              <span class="total-number-title-text-job-seeker-admin"
                >Newly Joined In July
              </span>
            </div>
          </div>
          <div class="box-job-seeker-admin inner-div-css ml-10">
            <div>
              <span class="no-of-total-category">125</span>
            </div>
            <div>
              <span class="total-number-title-text-job-seeker-admin"
                >Male Job Seekers</span
              >
            </div>
          </div>
          <div class="box-job-seeker-admin inner-div-css ml-10">
            <div>
              <span class="no-of-total-category">150</span>
            </div>
            <div>
              <span class="total-number-title-text-job-seeker-admin"
                >Female Job Seekers</span
              >
            </div>
          </div>
          <div class="box-job-seeker-admin inner-div-css ml-10">
            <div>
              <span class="no-of-total-category">90</span>
            </div>
            <div>
              <span class="total-number-title-text-job-seeker-admin"
                >Active this Month</span
              >
            </div>
          </div>
          <div class="box-job-seeker-admin inner-div-css ml-10">
            <div>
              <span class="no-of-total-category">120</span>
            </div>
            <div>
              <span class="total-number-title-text-job-seeker-admin"
                >Active this Month</span
              >
            </div>
          </div>
        </div>
        <div class="text-align-initial">
          <a-form-item>
            <a-input
              class="searchbox-style"
              v-decorator="[
                'userName',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ],
                },
              ]"
              placeholder="Search Job Seekers"
            >
              <a-icon
                slot="prefix"
                type="search"
                style="color: rgba(0, 0, 0, 0.25)"
              />
            </a-input>
          </a-form-item>
        </div>
        <a-table
          :columns="columns"
          :data-source=this.users
          :pagination="pagination"
        >
          <span slot="name" @click="displayDetailed" slot-scope="text">{{
            text
          }}</span>
          <span class="table-header-title" slot="customTitle">Name</span>
          <span class="table-header-title" slot="customTitleEmail"
            >EMAIL ADDRESS</span
          >
          <span class="table-header-title" slot="customTitleRegisteredData"
            >REGISTERED ON</span
          >
          <span class="table-header-title" slot="customTitleLastLoginDate"
            >LAST LOGIN</span
          >
          <span slot="status" slot-scope="status">
            <a-tag
              :key="status"
              class="tags-class-job-listing"
              :color="status === 'active' ? 'green' : 'volcano'"
            >
              {{ status.toUpperCase() }}
            </a-tag>
          </span>
          <div
            class="table-header-title display-flex"
            slot="action"
            slot-scope="text, record"
          >
            <div class="action-box-job-seeker ml-10">
              <router-link to= '/admin/job-seeker/tabs'>
              <i class="fa fa-eye" aria-hidden="true" ></i>
              </router-link>
            </div>
            <div class="action-box-job-seeker ml-10">
              <i
                class="fa fa-pencil-square-o"
                key="pencil"
                aria-hidden="true"
              ></i>
            </div>
            <div class="action-box-job-seeker ml-10">
              <i
                class="fa fa-pencil-square-o"
                key="pencil"
                aria-hidden="true"
              ></i>
            </div>
            <div class="action-box-job-seeker ml-10">
              <i class="fa fa-trash" key="pencil" aria-hidden="true"></i>
            </div>
          </div>
        </a-table>
      </a-tab-pane>
      <a-tab-pane key="2" tab="Settings">
        <div class="row">
          <div class="col-12">
            <h5>Do we need administrator approval for Jobseeker account ?</h5>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <div class="radio-button my-3">
              <a-radio-group v-model="value" @change="onChange">
                <a-radio :value="1" class="border border-secondary rounded radio1">
                  Yes
                </a-radio>
                <a-radio :value="2" class="border border-secondary rounded radio2">
                  No
                </a-radio>
              </a-radio-group>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-12">
            <button class="btn btn-light">Cancel</button>
            <button class="btn btn-primary">Submit</button>
          </div>
        </div>
      </a-tab-pane>
    </a-tabs>
  </div>
</template>

<script>
import Add_New_Job_Seeker_Button from "./Add_New_Job_Seeker_Button";
import axios from "axios";
console.log('userdata',this.users)
const columns = [
  {
    dataIndex: "firstName",
    key: "name",
    slots: { title: "customTitle" },
    scopedSlots: { customRender: "name" },
  },

  {
    dataIndex: "email",
    key: "email",
    slots: { title: "customTitleEmail" },
    scopedSlots: { customRender: "email" },
  },
  {
    dataIndex: "createdAt",
    key: "registered_on",
    slots: { title: "customTitleRegisteredData" },
    scopedSlots: { customRender: "registered_on" },
  },
  {
    dataIndex: "updatedAt",
    key: "last_login",
    slots: { title: "customTitleLastLoginDate" },
    scopedSlots: { customRender: "last_login" },
  },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    scopedSlots: { customRender: "status" },
  },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",

    scopedSlots: { customRender: "action" },
  },
];

const data = [
];

export default {
  name: "AdminJobSeeker",
  components:{
    Add_New_Job_Seeker_Button: Add_New_Job_Seeker_Button,
  },

  data() {
    return {
      value: 1,
      data,
      columns,
      pagination: {
        pageSize: 10, // default number of pages per page
        showSizeChanger: true, // display can change the number of pages per page
        pageSizeOptions: ["10", "20", "30", "40"], // number of pages per option
        showTotal: (total) => `Total ${total} items`, // show total
        showSizeChange: (current, pageSize) => (this.pageSize = pageSize), // update display when changing the number of pages per page
      },
      users:[],

    };
  },
    beforeCreate() {
      axios.get('http://192.241.137.124:8000/api/v1/users', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
        .then((res) => {
          this.users = res.data
          console.log("data", res.data)
        })
        .catch((error) => {
          console.error(error)
        })
    },
  methods: {
    // viewButton(){
    //   // this.users="";
    //   path: '/admin/job-seeker/tabs';
    // },
    displayDetailed() {
      this.$router.push("/admin/job-seeker/10");
    },
    onChange(e) {
      console.log('radio checked', e.target.value);
    },
  },
};
</script>

<style scoped>
.main-div-height-job-seeker-list {
min-height: calc(100vh - 240px);
}
.add-more-text-admin-job-seeker {
background: #0385f3;
border-radius: 4px;
align-items: center;
color: #ffffff;
}
.table-header-title {
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
color: #8b90a0;
}
.action-box-job-seeker {
background: #fafafc;
/* UI / 03 */

border: 1px solid #f0f1f3;
border-radius: 2px;
width: 40px;
padding-left: 10px;
height: 40px;
border-radius: 4px;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
/* text-align: center; */
display: inline-flex;
align-items: center;
/* align-items: unset; */
vertical-align: middle;
}
.tags-class-job-listing {
width: 152px;
height: 44px;
border-radius: 4px;
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
text-align: center;
display: inline-flex;
align-items: center;
/* align-items: unset; */
vertical-align: middle;
}
.no-of-total-category {
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 24px;
color: #505565;
}
.total-number-title-text-job-seeker-admin {
font-family: Open Sans;
font-style: normal;
font-weight: normal;
font-size: 12px;
color: #8b90a0;
}
.box-job-seeker-admin {
background: #fafdff;
/* Primary/blue */

border: 1px solid #f0f1f3;
box-sizing: border-box;
border-radius: 8px;
width: 180px;
height: 96px;
}
.inner-div-css {
padding: 19px 0px 20px 20px;
text-align: initial;
display: inline-block;
}
.searchbox-style {
width: 420px;
/* height: 48px; */
border-radius: 4px;
background: #ffffff;
color: #8b90a0;
font-family: SF UI Display;
font-style: normal;
font-weight: 500;
font-size: 14px;
}
.text-align-initial {
text-align: initial;
}
.border {
  width: 270px;
  padding: 20px 30px;
}
.radio1 {
  background: rgba(90, 170, 223, 0.04);
}
.btn {
  padding: 10px 108px;
}
@media screen and (min-width: 768px){
  .btn-primary {
    margin-left: 9px;
  }
  .btn {
    margin-top: 20px;
  }
}
@media screen and (max-width: 767px) {
  .border {
    margin-bottom: 10px;
  }
  .btn-primary {
    margin: 10px 0px;
  }
}
</style>
