import Vue from 'vue'
import Router from 'vue-router'
import Layout from './views/Layout.vue'
import Container from './views/Container.vue'
import Color from './views/Color.vue'
import Icon from './views/Icon.vue'
import Radio from './views/Radio.vue'
import CheckBox from './views/CheckBox.vue'
import Input from './views/Input.vue'
import Number from './views/Number.vue'
import Button from './views/Button.vue'
import Select from './views/Select.vue'
import Cascader from './views/Cascader.vue'
import Switch from './views/Switch.vue'
import Score from './views/Score.vue'

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
    }, {
      path: '/icon',
      name: 'icon',
      component: Icon
    }, {
      path: '/radio',
      name: 'radio',
      component: Radio
    }, {
      path: '/checkBox',
      name: 'checkBox',
      component: CheckBox
    }, {
      path: '/input',
      name: 'input',
      component: Input
    }, {
      path: '/number',
      name: 'number',
      component: Number
    }, {
      path: '/button',
      name: 'button',
      component: Button
    }, {
      path: '/select',
      name: 'select',
      component: Select
    }, {
      path: '/cascader',
      name: 'cascader',
      component: Cascader
    }, {
      path: '/score',
      name: 'score',
      component: Score
    }]
})
