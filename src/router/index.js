import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NextPage from '@/components/NextPage'
import NextPageChild1 from '@/components/NextPageChild1'
import NextPageChild2 from '@/components/NextPageChild2'
import Left from '@/components/Left'
import Right from '@/components/Right'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Left,
        right: Right
      }
    },
    {
      path: '/next',
      name: 'NextPage',
      component: NextPage,
      children: [
        { path: '/child1', name: 'child1', component: NextPageChild1 },

        // age(\d+) 给参数设置正则表达式，只能为数字
        { path: '/child2/:sex/:age(\\d+)', name: 'child2', component: NextPageChild2 }
      ]
    },
    {
      path: '/goHome',
      redirect: '/'
    },
    {
      path: '/goChild/:sex/:age(\\d+)',
      redirect: '/child2/:sex/:age(\\d+)'
    }
  ]
})
