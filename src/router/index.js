import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RegistrationIndex from '@/components/Job-seeker/registration'
import JobsIndex from '@/components/Job-seeker/Jobs'
import LoginIndex from '@/components/Job-seeker/login'
import ForgotPasswordIndex from '@/components/Job-seeker/forgot-password'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/registration',
      name: 'RegistrationIndex',
      component: RegistrationIndex
    },
    {
      path: '/jobs',
      name: 'JobsIndex',
      component: JobsIndex
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
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
