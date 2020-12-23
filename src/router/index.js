import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RegistrationIndex from '@/components/Job-seeker/registration'
import JobsIndex from '@/components/Job-seeker/Jobs'
import LoginIndex from '@/components/Job-seeker/login'
import ForgotPasswordIndex from '@/components/Job-seeker/forgot-password'
import AdminJobSeeker from '@/components/admin-job-seeker'
import store from '../store/store.js'
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
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
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
