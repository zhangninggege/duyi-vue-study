import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

import Home from './views/Home';


const routes = [
    {
      path:'/',
      component:Home,
    },
    {
      path:'/Learn',
      component:() => import('./views/Learn'),
    },
    {
      path:'/Student',
      component:() => import('./views/Student'),
    },
    {
      path:'/About',
      component:() => import('./views/About'),
    },
    {
      path:'/Community',
      component:() => import('./views/Community'),
    },
  ];

 export default new VueRouter({
    routes,
    mode:'history',
  })