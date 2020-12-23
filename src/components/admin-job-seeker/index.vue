<template>
  <div class="container-fluid main-div-height-job-seeker-list">
    <div class="text-align-right mt-50">
      <a-button type="solid add-more-text-admin-job-seeker" @click="add">
        <span
          ><a-icon class="vertical-align-middle" type="plus" /> Add New Job
          Seeker</span
        >
      </a-button>
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
                >Newly Joined In July</span
              >
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
          :data-source="data"
          :pagination="pagination"
        >
          <a slot="name" slot-scope="text">{{ text }}</a>
          <span class="table-header-title" slot="customTitle">NAME</span>
          <span class="table-header-title" slot="customTitleEmail"
            >EMAIL ADDRESS</span
          >
          <span class="table-header-title" slot="customTitleRegisteredData"
            >REGISTERED ON</span
          >
          <span class="table-header-title" slot="customTitleLastLoginDate"
            >LAST LOGIN</span
          >
          <!-- <span class="table-header-title" slot="customTitleStatus"
            >STATUS</span
          > -->
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
              <i class="fa fa-eye" aria-hidden="true"></i>
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
      <a-tab-pane key="2" tab="Settings"> Content of tab 2 </a-tab-pane>
    </a-tabs>
  </div>
</template>
<script>
const columns = [
  {
    dataIndex: "name",
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
    dataIndex: "registered_on",
    key: "registered_on",
    slots: { title: "customTitleRegisteredData" },
    scopedSlots: { customRender: "registered_on" },
  },
  {
    dataIndex: "last_login",
    key: "last_login",
    slots: { title: "customTitleLastLoginDate" },
    scopedSlots: { customRender: "last_login" },
  },
  // {
  //   dataIndex: "status",
  //   key: "status",
  //   slots: { title: "customTitleStatus" },
  //   scopedSlots: { customRender: "status" },
  // },
  {
    title: "Status",
    key: "status",
    dataIndex: "status",
    scopedSlots: { customRender: "status" },
  },
  // {
  //   title: "Age",
  //   dataIndex: "age",
  //   key: "age",
  // },
  // {
  //   title: "Address",
  //   dataIndex: "address",
  //   key: "address",
  // },
  // {
  //   title: "Tags",
  //   key: "tags",
  //   dataIndex: "tags",
  //   scopedSlots: { customRender: "tags" },
  // },
  {
    title: "Action",
    key: "action",
    dataIndex: "action",

    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    key: "1",
    id: "1",
    name: "John Brown",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
    is_approved: "yes",
  },
  {
    key: "2",
    id: "2",
    name: "Jim Green",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "Inactive",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    is_approved: "yes",
    key: "3",
    id: "3",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "4",
    id: "4",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "Inactive",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "5",
    id: "5",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "6",
    id: "6",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "Inactive",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "7",
    id: "7",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "Inactive",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "8",
    id: "8",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "9",
    id: "9",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "10",
    id: "10",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "11",
    id: "11",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "12",
    id: "12",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "13",
    id: "13",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
  {
    key: "14",
    id: "14",
    name: "Joe Black",
    email: "rowg@gmail.com",
    registered_on: "31 Dec 2020",
    last_login: "24 jan 2019",
    status: "active",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
    is_approved: "yes",
  },
];

export default {
  name: "AdminJobSeeker",
  data() {
    return {
      data,
      columns,
      pagination: {
        pageSize: 10, // default number of pages per page
        showSizeChanger: true, // display can change the number of pages per page
        pageSizeOptions: ["10", "20", "30", "40"], // number of pages per option
        showTotal: (total) => `Total ${total} items`, // show total
        showSizeChange: (current, pageSize) => (this.pageSize = pageSize), // update display when changing the number of pages per page
      },
    };
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
  width: 200px;
  height: 96px;
}
.inner-div-css {
  padding: 19px 0px 20px 20px;
  text-align: initial;
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
</style>
