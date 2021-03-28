import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import a from '@/components/views/a'
import mycomponent from '@/components/views/mycomponent'
import b from '@/components/views/b'
import c from '@/components/views/c'
import map from '@/components/views/map'
import cesium from '@/components/views/cesium'
Vue.use(Router)

var router = new Router({
  mode: 'history',//默认hash模式 路径会有#
  routes: [
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld,
      children: [{
        name: 'aaa',
        path: 'a',
        component: a
      },
      {
        name: 'bbb',
        path: 'b',
        component: b
      },
      {
        name: 'c',
        path: 'c',
        component: c
      },
      {
        path: 'mycomponent',
        component: mycomponent
      }, {
        path: 'b',
        component: b
      }, {
        path: 'map',
        component: map
      }, {
        path: 'cesium',
        component: cesium
      }, {
        path: '',
        redirect: '/HelloWorld/a'
      }]
    },
    {
      path: '/b/:myid',//动态路由写法
      name: 'b',
      component: b
    },
    {
      path: '*',
      redirect: '/HelloWorld'
    },
    {
      name: 'ccc',
      path: 'b',
      component: b
    }
  ],
})
//全局的路由守卫
router.beforeEach((to, from, next) => {
  // if(to.name==='aaa')next();//路由守卫满足条件后再跳转
  //else next('/login');
  // console.log(to,from)
  next();
})
export default router;
