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

    <a-tabs default-active-key="1" size="large">
      <a-tab-pane key="1" tab="Job Seeker List">
        <div class="display-flex mt-30 mb-40">
          <div class="box-job-seeker-admin inner-div-css">
            <div>
              <span class="no-of-total-category">1202</span>
            </div>
            <div>
              <span>Total Job Seekers</span>
            </div>
          </div>
          <div class="box-job-seeker-admin inner-div-css ml-10">
            <div>
              <span class="no-of-total-category">250</span>
            </div>
            <div>
              <span>Newly Joined In July</span>
            </div>
          </div>
          <div class="box-job-seeker-admin inner-div-css ml-10">
            <div>
              <span class="no-of-total-category">125</span>
            </div>
            <div>
              <span>Male Job Seekers</span>
            </div>
          </div>
          <div class="box-job-seeker-admin inner-div-css ml-10">
            <div>
              <span class="no-of-total-category">150</span>
            </div>
            <div>
              <span>Female Job Seekers</span>
            </div>
          </div>
          <div class="box-job-seeker-admin inner-div-css ml-10">
            <div>
              <span class="no-of-total-category">90</span>
            </div>
            <div>
              <span>Active this Month</span>
            </div>
          </div>
          <div class="box-job-seeker-admin inner-div-css ml-10">
            <div>
              <span class="no-of-total-category">120</span>
            </div>
            <div>
              <span>Active this Month</span>
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
        <a-table :columns="columns" :data-source="data">
          <a slot="name" slot-scope="text">{{ text }}</a>
          <span slot="customTitle">Name</span>
          <span slot="tags" slot-scope="tags">
            <a-tag
              v-for="tag in tags"
              :key="tag"
              :color="
                tag === 'loser'
                  ? 'volcano'
                  : tag.length > 5
                  ? 'geekblue'
                  : 'green'
              "
            >
              {{ tag.toUpperCase() }}
            </a-tag>
          </span>
          <span slot="action" slot-scope="text, record">
            <a>Invite 一 {{ record.name }}</a>
            <a-divider type="vertical" />
            <a>Delete</a>
            <a-divider type="vertical" />
            <a class="ant-dropdown-link">
              More actions <a-icon type="down" />
            </a>
          </span>
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
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Tags",
    key: "tags",
    dataIndex: "tags",
    scopedSlots: { customRender: "tags" },
  },
  {
    title: "Action",
    key: "action",
    scopedSlots: { customRender: "action" },
  },
];

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    address: "New York No. 1 Lake Park",
    tags: ["nice", "developer"],
  },
  {
    key: "2",
    name: "Jim Green",
    age: 42,
    address: "London No. 1 Lake Park",
    tags: ["loser"],
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    address: "Sidney No. 1 Lake Park",
    tags: ["cool", "teacher"],
  },
];

export default {
  name: "AdminJobSeeker",
  data() {
    return {
      data,
      columns,
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
.no-of-total-category {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: #505565;
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
