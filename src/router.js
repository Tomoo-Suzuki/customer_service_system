import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import FormLogin from './components/FormLogin.vue'
import FormRegistration from './components/FormRegistration.vue'
import FormStory from './components/FormStoryDetail.vue'
import FormPost from './components/FormPost.vue'
import FormAccount from './components/FormAccount.vue'
import WritingRoom from './components/WritingRoom.vue'
import Analysis from './components/Analysis.vue'
import BrowsingHistory from './components/BrowsingHistory.vue'
import Mypage from './components/Mypage.vue'
import StoryInfomation from './components/StoryInfomation.vue'
import Support from './components/Support.vue'
import Bookmark from './components/Bookmark.vue'

//use プラグインを使用する
//プラグイン 全体に影響を与えるもの
Vue.use(Router);


export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      component: Home
    }, {
      path: '/form-login',
      component: FormLogin
    }, {
      path: '/form-registration',
      component: FormRegistration
    }, {
      path: '/form-story',
      component: FormStory
    }, {
      path: '/form-post',
      component: FormPost
    }, {
      path: '/form-account',
      component: FormAccount
    }, {
      path: '/writing-room',
      component: WritingRoom
    }, {
      path: '/analysis',
      component: Analysis
    }, {
      path: '/history',
      component: BrowsingHistory
    }, {
      path: '/mypage',
      component: Mypage
    },
    {
      path: '/support',
      component: Support
    },
    {
      path: '/story-information',
      component: StoryInfomation
    },
    {
      path: '/bookmark',
      component: Bookmark
    }
  ]
})