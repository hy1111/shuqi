import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import shu from '@/components/shu'
import mian from '@/components/mian'
import yuan from '@/components/yuan'
import wo from '@/components/wo'
import qian from '@/components/qian'
import sou from '@/components/sou'
import xiang from '@/components/xiang'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
     {
      path: '/shu',
      name: 'shu',
      component:shu
    },
     {
      path: '/mian',
      name: 'mian',
      component:mian
    },
     {
      path: '/yuan',
      name: 'yuan',
      component:yuan
    },
     {
      path: '/wo',
      name: 'wo',
      component:wo
    },
     {
      path: '/qian',
      name: 'qian',
      component:qian
    },
     {
      path: '/sou',
      name: 'sou',
      component:sou
    },
     {
      path: '/xiang',
      name: 'xiang',
      component:xiang
    }
  ]
})
