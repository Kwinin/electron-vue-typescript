import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/summary',
      name: 'summary',
      component: require('../index').default,
      children: [
        {
          path: '/update-page',
          name: 'summary.update',
          alias: '',
          component: require('../pages/update.vue').default,
        },
        {
          path: '/add-page',
          name: 'summary.add',
          alias: '',
          component: require('../pages/add.vue').default,
        },
      ]
    },
    {
      path: '*',
      redirect: '/summary'
    }
  ]
})
