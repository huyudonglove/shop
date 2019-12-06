import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/components/login/login'
import lineComponent from '@/components/table/lineComponent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      children:[
        {
          path:'/lineComponent',
          name:'lineComponent',
          component:lineComponent
        }
      ]
    },
    {
      path:'/login',
      name:'login',
      component:login
    }
  ]
})
