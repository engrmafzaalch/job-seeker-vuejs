// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
import './assets/css/main.css';
import '../node_modules/jquery/dist/jquery.js';
import '../node_modules/datatables.net-dt/css/jquery.dataTables.css';
import '../node_modules/datatables.net/js/jquery.dataTables.min.js';
import '../node_modules/datatables.net-dt/js/dataTables.dataTables.js';
import jwt_decode from "jwt-decode";


import Vuelidate from 'vuelidate';
Vue.use(Vuelidate)

// Import component
import Loading from 'vue-loading-overlay';
// Import stylesheet
import 'vue-loading-overlay/dist/vue-loading.css';
// Init plugin
Vue.use(Loading);

let mySelected = ''

Vue.use(Antd);
Vue.config.productionTip = false

import 'bootstrap/dist/css/bootstrap.css'
/* eslint-disable no-new */
new Vue({

  el: '#app',
  router,
  components: { App },
  template: '<App/>',

})
var token = "eyJhbGciOiJSUzI1NiIsInR5cCIgOiAiSldUIiwia2lkIiA6ICJqbEF3TmNscTFhVWpPcmM2bldoTzlVR3J4TC1TeWNaa21Qdkg3c2xmck93In0.eyJqdGkiOiJiYWE1ZmYwMC05ZTJiLTQyZTYtODczYS05OWYzMTM2M2U3MjMiLCJleHAiOjE2MTc0Njg3NzcsIm5iZiI6MCwiaWF0IjoxNjE3NDMyNzc3LCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXV0aC9yZWFsbXMvRGVtby1SZWFsbSIsImF1ZCI6ImFjY291bnQiLCJzdWIiOiI3ZGI5NjQwZC03ZTYyLTRhZjgtOTU3NC1hYmQ1YjM5M2RiZWIiLCJ0eXAiOiJCZWFyZXIiLCJhenAiOiJqb2Jwb3J0YWwta2V5Y2xvYWstbWljcm9zZXJ2aWNlIiwiYXV0aF90aW1lIjowLCJzZXNzaW9uX3N0YXRlIjoiMjBlMThkMTMtMjg1YS00Mjg5LTkzMTItYjdjMjA5ZmM3ZjJiIiwiYWNyIjoiMSIsImFsbG93ZWQtb3JpZ2lucyI6WyJodHRwOi8vMTkyLjI0MS4xMzcuMTI0OjgwODAiXSwicmVhbG1fYWNjZXNzIjp7InJvbGVzIjpbIm9mZmxpbmVfYWNjZXNzIiwiYXBwLWFkbWluIiwiYXBwLWpvYnNlZWtlciIsInVtYV9hdXRob3JpemF0aW9uIl19LCJyZXNvdXJjZV9hY2Nlc3MiOnsiam9icG9ydGFsLWtleWNsb2FrLW1pY3Jvc2VydmljZSI6eyJyb2xlcyI6WyJqb2JzZWVrZXIiLCJhZG1pbiJdfSwiYWNjb3VudCI6eyJyb2xlcyI6WyJtYW5hZ2UtYWNjb3VudCIsIm1hbmFnZS1hY2NvdW50LWxpbmtzIiwidmlldy1wcm9maWxlIl19fSwic2NvcGUiOiJlbWFpbCBwcm9maWxlIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsInByZWZlcnJlZF91c2VybmFtZSI6ImFoc2FuIiwiZW1haWwiOiJhaHNhbkBnbWFpbC5jb20ifQ.Q6osHXd0gMWGJir6vhGz0UihJCnu4aKRdZLDRnAQ5dg0xrIJ3Jty3aSdivbVYc_JLg8DZgm-Rb80zEQOajvjotmOIsyDeG5Qd0dUPcXa1dSMIPmqdNMFRPOlH2zOpFQY4k6EiS5AhdW3sCt8F5CZqZfRmmJNuyIXlhXgKcdOhERatZhs_-y4nU9tEevYBA8Mvwqx_PBH9BxaCduAStPXOOF_gItCs9ehdJ8CDGVkn43jRtGvPqwK-9NAUoayUtgM24Tu6ad5iEPjuHZ6KHuCZ8Dqd5Ht3ToPJM5ozy0cjcA3b3zh2506O3FlUa55My6OU4-Y8mBhHFQtTnRhp-6-1w";
var decoded = jwt_decode(token);
var roles = docoded && decoded.realm_access ? decoded.realm_access.roles :[];
console.log('decode-token',roles);


