import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import './custom.scss'
// app.js
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

import Vuetify from 'vuetify'

Vue.use(Vuetify, {
  iconfont: 'mdi'
})
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
