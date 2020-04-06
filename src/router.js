import Vue from 'vue'
import Router from 'vue-router'

import Home from './components/Home.vue'
import FormUser from './components/FormUser.vue'
import FormStory from './components/FormStoryDetail.vue'
import FormPost from './components/FormPost.vue'
import FormAccount from './components/FormAccount.vue'

//use プラグインを使用する
//プラグイン 全体に影響を与えるもの
Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    component: Home
  }, {
    path: '/form-user',
    component: FormUser
  }, {
    path: '/form-story',
    component: FormStory
  }, {
    path: '/form-post',
    component: FormPost
  }, {
    path: '/form-account',
    component: FormAccount
  }]
})