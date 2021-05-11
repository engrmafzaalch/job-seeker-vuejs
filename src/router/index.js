import Vue from 'vue'
import Router from 'vue-router'
import HomePageContainer from '../pages'
import RegistrationIndex from '../pages/registration'
import JobsIndex from '../pages/Jobs'
import LoginIndex from '../pages/Login'
import ForgotPasswordIndex from '../pages/forgot-password'
import AdminJobSeeker from '../pages/AdminJobSeeker'
import JobDetail from '../pages/JobDetail';
import modal from "../pages/components/modal";
import AdminJobSeekerDetailedPage from '../pages/AdminJobSeekerDetailedPage'
import MyAccount from '../pages/MyAccount'
import supportMessages from '../pages/supportMessages'
import Steps from "../pages/Profile";
import index_myAccount from "../pages/index_myAccount";
import tabs from "../pages/Tabs";
import ProfileSummery from "../pages/ProfileSummery";
import Experience_and_Skills from "../pages/Experience_and_Skills";
import Education_in_MyAccount from "../pages/Education_in_MyAccount";
import Projects from "../pages/Projects";
import Resume_CV from "../pages/Resume_CV";
import MyApplications from "../pages/MyApplications";
import Payments_2 from "../pages/Payments-2";


import {store} from '../store/store'
Vue.use(Router)
let router = new Router({
  mode: 'history',
  routes: [
    {
      path:"",
      component:()=>import("../layouts/noFooterLayout.vue"),
      children:[
        {
          path: '/',
          name: 'HomePageContainer',
          component: HomePageContainer,
          meta: {
            requiresAuth: true
          }
        },
      ]
    },
    {
      path:"",
      component:()=>import("../layouts/primaryFooterLayout.vue"),
      children:[
        {
          path: '/registration',
          name: 'RegistrationIndex',
          component: RegistrationIndex,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/jobs',
          name: 'JobsIndex',
          component: JobsIndex,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/job-seeker/login',
          name: 'LoginIndex',
          component: LoginIndex
        },
        {
          path: '/job-seeker/forgot-password',
          name: 'ForgotPasswordIndex',
          component: ForgotPasswordIndex
        },
        {
          path: '/admin/job-seeker',
          name: 'AdminJobSeeker',
          component: AdminJobSeeker,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/job-detail',
          name:'JobDetail',
          component: JobDetail,
          meta:{
            requiresAuth: true
          }
        },
        {
          path: '/admin/job-seeker/:id',
          name: 'AdminJobSeekerDetailedPage',
          component: AdminJobSeekerDetailedPage,
          meta: {
            requiresAuth: true
          }
        },
        
        {
          path: '/myAccount',
          name: 'myAccount',
          component: MyAccount,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/support_messages',
          name: 'support_messages',
          component: supportMessages,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/profile-data',
          name: 'Steps',
          component: Steps,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/index_myAccount',
          name: 'index_myAccount',
          component: index_myAccount,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/profile',
          name: 'tabs',
          component: tabs,
          meta: {
            requiresAuth: true,
            requiresProfileData: true
          }
        },
        {
          path: '/ProfileSummery',
          name: 'ProfileSummery',
          component: ProfileSummery,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/Education_in_MyAccount',
          name: 'Education_in_MyAccount',
          component: Education_in_MyAccount,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/Experience_and_Skills',
          name: 'Experience_and_Skills',
          component: Experience_and_Skills,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/Projects',
          name: 'Projects',
          component: Projects,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/Resume_CV',
          name: 'Resume_CV',
          component: Resume_CV,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/my-applications',
          name: 'MyApplications',
          component: MyApplications,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/modal',
          name: 'modal',
          component: modal,
          meta: {
            requiresAuth: true
          }
        },
        {
          path: '/Payemnts_2',
          name: 'Payments_2',
          component: Payments_2,
          meta: {
            requiresAuth: true
          }
        },
      ]
    }
    
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresProfileData)) {
    if (store.getters.isProfileCompleted) {
      next()
      return
    }
    next('/profile-data')
  } else {
    next()
  }

})
export default router
