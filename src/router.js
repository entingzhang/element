import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue'
import Container from './views/Container.vue'
import Color from './views/Color.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [{
      path: '/layout',
      name: 'layout',
      component: Layout
    }, {
      path: '/container',
      name: 'container',
      component: Container
    }, {
      path: '/color',
      name: 'color',
      component: Color
    }
  ]
})
