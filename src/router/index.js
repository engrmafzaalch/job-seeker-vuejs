import Vue from 'vue'
import Router from 'vue-router'
import HomePageContainer from '@/components/HomePageContainer'
import RegistrationIndex from '@/components/Job-seeker/registration'
import JobsIndex from '@/components/Job-seeker/Jobs'
import LoginIndex from '@/components/Job-seeker/login'
import ForgotPasswordIndex from '@/components/Job-seeker/forgot-password'
import AdminJobSeeker from '@/components/admin-job-seeker'
import MyAccount from '../components/My-Account/account-details/index'
import support_messages from '../components/My-Account/support-messages/support-messages'
import profile_summery from "../components/Login/profile_summery";
import education from "../components/Login/education";
import experience from "../components/Login/experience";
import Project from "../components/Login/project";
import documents from "../components/Login/documents";
import Skills from "../components/Login/skills";
import myProfile from "../components/Login/myProfile";
import project from "../components/Login/project";
import Steps from "../components/Login/steps";
import index_myAccount from "../components/My-Account/MyAccount/index_myAccount";
import tabs from "../components/My-Account/MyAccount/tabs";
import ProfileSummery from "../components/My-Account/MyAccount/ProfileSummery";
import Experience_and_Skills from "../components/My-Account/MyAccount/Experience_and_Skills";
import Education_in_MyAccount from "../components/My-Account/MyAccount/Education_in_MyAccount";
import AdminJobSeekerDetailedPage from '@/components/admin-job-seeker/job-seeker-detailed-view'
import store from '../store/store.js'
import index_myAccount_2 from "../components/My-Account/MyAccount/index_myAccount_2";
import index_payment_1 from "../components/payment/index_payment_1";
import myAccount_4 from "../components/My-Account/MyAccount/myAccount_4";
import posting_1 from "../components/posting/posting_1";
import recruiter_1 from "../components/recruiter/recruiter_1";
import recruiter_3 from "../components/recruiter/recruiter_3";
import index_payment_3 from "../components/payment/index_payment_3";
import posting_4 from "../components/posting/posting_4";
Vue.use(Router)

let router = new Router({
  routes: [
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
      path: '/admin/job-seeker/:id',
      name: 'AdminJobSeekerDetailedPage',
      component: AdminJobSeekerDetailedPage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/',
      name: 'HomePageContainer',
      component: HomePageContainer,
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
      component: support_messages,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/profile_summery',
      name: 'profile_summery',
      component: profile_summery,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/education',
      name: 'education',
      component: education,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/experience',
      name: 'experience',
      component: experience,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/project',
      name: 'project',
      component: project,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Documents',
      name: 'Documents',
      component: documents,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Skills',
      name: 'Skills',
      component: Skills,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/myProfile',
      name: 'myProfile',
      component: myProfile,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/Steps',
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
      path: '/index_myAccount_2',
      name: 'index_myAccount_2',
      component: index_myAccount_2,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/myAccount_4',
      name: 'myAccount_4',
      component: myAccount_4,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/index_payment_1',
      name: 'index_payment_1',
      component: index_payment_1,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/index_payment_3',
      name: 'index_payment_3',
      component: index_payment_3,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/posting_1',
      name: 'posting_1',
      component: posting_1,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/posting_4',
      name: 'posting_4',
      component: posting_4,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/recruiter_1',
      name: 'recruiter_1',
      component: recruiter_1,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/recruiter_3',
      name: 'recruiter_3',
      component: recruiter_3,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/tabs',
      name: 'tabs',
      component: tabs,
      meta: {
        requiresAuth: true
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
  ]
})
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next()
      return
    }
    next('/job-seeker/login')
  } else {
    next()
  }
})
export default router
