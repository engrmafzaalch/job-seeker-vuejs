import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import RegistrationIndex from '@/components/Job-seeker/registration'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/registration',
      name: 'RegistrationIndex',
      component: RegistrationIndex
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
  ]
})
