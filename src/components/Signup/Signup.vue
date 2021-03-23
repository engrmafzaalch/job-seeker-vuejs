<template>
  <div class="height-login-card">
    <div class="login-card pb-30">
  <a-form :form="form" @submit="handleSubmit">

    <a-form-item
      :label-col="formItemLayout.labelCol"
      :wrapper-col="formItemLayout.wrapperCol"
    >
      <a-input
        v-decorator="[
          'firstName',
          { rules: [{ required: true, message: 'Please input your name' }] },
        ]"
        placeholder="User Name"
        class="name"
      />
    </a-form-item>

    <a-form-item v-bind="formItemLayout">
      <a-input
        v-decorator="[
          'emailAddress',
          {
            rules: [
              {
                type: 'email',
                message: 'The input is not valid E-mail!',

              },
              {
                required: true,
                message: 'Please input your E-mail!',
              },
            ],
          },
        ]"
        placeholder=" Email address *"
        class="name"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout" has-feedback>
      <a-input
        v-decorator="[
          'password',
          {
            rules: [
              {
                required: true,
                message: 'Please input your password!',
              },
              {
                validator: validateToNextPassword,
              },
            ],
          },
        ]"
        type="password"
        placeholder=" Password *"
        class="name"
      />
    </a-form-item>
    <a-form-item v-bind="formItemLayout"  has-feedback>
      <a-input
        v-decorator="[
          'confirm',
          {
            rules: [
              {
                required: true,
                message: 'Please confirm your password!',
              },
              {
                validator: compareToFirstPassword,
              },
            ],
          },
        ]"
        type="password"
        @blur="handleConfirmBlur"
        placeholder=" Confirm Password *"
        class="name"
      />
    </a-form-item>
    <a-form-item  class="agreement">
      <a-checkbox v-decorator="['agreement', { valuePropName: 'checked' }]">
        I have read the
        <a href="">
          agreement
        </a>
      </a-checkbox>
    </a-form-item>
    <a-form-item  class="btn">
      <a-button type="primary" html-type="submit" class="go-back-button-style" @click="openNotification">
        Register
      </a-button>
    </a-form-item>
  </a-form>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const residences = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
export default {
  data() {

    return {
      confirmDirty: false,
      residences,
      autoCompleteResult: [],
      formItemLayout: {
        labelCol: {
          xs: { span: 24 },
          sm: { span: 8 },
        },
        wrapperCol: {
          xs: { span: 24 },
          sm: { span: 16 },
        },
      },
      tailFormItemLayout: {
        wrapperCol: {
          xs: {
            span: 24,
            offset: 0,
          },
          sm: {
            span: 16,
            offset: 8,
          },
        },
      },
    };
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
  },
  methods: {
    handleSubmit(e) {
      console.log('consoledata',process.env)
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
          const that=this;
          this.$router.push({path: '/job-seeker/login'});
          var data = values
          var config = {
            method: 'post',
            url: `${process.env.VUE_ROOT_URL}/user/signup`,
            headers: {
              'Authorization':  `Bearer ${localStorage.getItem('token')}`,
              'Content-Type': 'application/json'
            },
            data : data
          };
          axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
              localStorage.setItem('user_id',response.data.userData.id);
              that.$router.push({path: '/job-seeker/login'});
            }
            )
            .catch(function (error) {
              console.log(error);
            });
        }
      });
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is not matched!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },

    gotologin: function (e) {
      if (this.form) { return true; }

      this.errors = [];

      if (!this.email) {
        this.errors.push({path: '/job-seeker/login'});
      }
      e.preventDefault();
    },

    // gotologin: function (step) {
    //   this.$router.push({path: '/job-seeker/login'});
    // },
    openNotification() {
      this.$notification.open({
        message: 'Success',
        description:
          'You have SignUp Successfully.',
        onClick: () => {
          console.log('Notification Clicked!');
        },
      });
    },
  },

};

</script>
<style>

.height-login-card {
  height: calc(100vh + 10px);
}
.login-card {
  position: absolute;
  padding: 32px;
  background: #ffffff;
  /* Elevation / 02 */
  top: 30%;
  left: 30%;
  right: 30%;
  box-shadow: 0px 4px 20px rgba(115, 115, 115, 0.2);
  border-radius: 10px;
}
.go-back-button-style {
  background: #fafafa;
  border-radius: 4px;
  width: 100%;
  font-fami: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  color: #8b90a0;
  height: 48px;
  border: 1px solid #fafafa;
}
.btn{
  margin-top: 10px;
}
.agreement{
  margin-top: 10px;
}
.name{
  width: 150%;
}
</style>
