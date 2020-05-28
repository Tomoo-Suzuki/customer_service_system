import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

// import Home from "../views/Home.vue";
// import Home from "../views/Home.vue";
// import FormLogin from "../views/FormLogin.vue";
// import FormRegistration from "../views/FormRegistration.vue";
// import FormStory from "../views/FormStory.vue";
// import FormPost from "../views/FormPost.vue";
// import FormAccount from "../views/FormAccount.vue";
// import Analysis from "../views/Analysis.vue";
// import BrowsingHistory from "../views/BrowsingHistory.vue";
// import Mypage from "../views/Mypage.vue";
// import Support from "../views/Support.vue";
// import Bookmark from "../views/Bookmark.vue";

import WritingRoom from "../views/WritingRoom.vue";
import StoryInfomation from "../views/StoryInfomation.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  //   {
  //     path: "/",
  //     name: "Home",
  //     component: Home
  //   },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/",
    name: "Home",
    component: () => import("../views/Home.vue")
  },
  {
    path: "/form-login",
    name: "FormLogin",
    component: () => import("../views/FormLogin.vue")
  },
  {
    path: "/form-registration",
    name: "FormRegistration",
    component: () => import("../views/FormRegistration.vue")
  },
  {
    path: "/form-story/:id_story",
    name: "FormStory",
    component: () => import("../views/FormStory.vue")
  },
  {
    path: "/form-post/",
    name: "post-view",
    component: () => import("../views/FormPost.vue")
  },
  {
    path: "/form-account",
    name: "FormAccount",
    component: () => import("../views/FormAccount.vue")
  },
  {
    path: "/writing-room",
    name: "writing-room-view",
    component: WritingRoom
  },
  {
    path: "/analysis",
    name: "Analysis",
    component: () => import("../views/Analysis.vue")
  },
  {
    path: "/history",
    name: "BrowsingHistory",
    component: () => import("../views/BrowsingHistory.vue")
  },
  {
    path: "/mypage",
    name: "Mypage",
    component: () => import("../views/Mypage.vue")
  },
  {
    path: "/support",
    name: "Support",
    component: () => import("../views/Support.vue")
  },
  {
    path: "/story-information/",
    name: "view-story-information",
    component: StoryInfomation
  },
  {
    path: "/bookmark",
    name: "Bookmark",
    component: () => import("../views/Bookmark.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
