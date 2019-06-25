import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import DynamicTable from '@/components/DynamicTable'
import DynamicTable2 from '@/components/DynamicTable2'
import DynamicTable3 from '@/components/DynamicTable3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dynamicTable',
      name: 'DynamicTable',
      component: DynamicTable
    },
    {
      path: '/dynamicTable2',
      name: 'DynamicTable2',
      component: DynamicTable2
    },
    {
      path: '/dynamicTable3',
      name: 'DynamicTable3',
      component: DynamicTable3
    }
  ]
})
