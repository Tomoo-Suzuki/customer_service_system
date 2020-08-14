import Vue from "vue";
import Vuex from "vuex";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";

import { InterfaceAccount } from "../types/InterfaceAccount";
import { InterfaceUser } from "../types/InterfaceUser";
import { InterfacePost } from "../types/InterfacePost";
import { InterfaceStory } from "../types/InterfaceStory";
import { InterfaceState } from "../types/InterfaceState";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    login: InterfaceUser,
    account: InterfaceAccount,
    story: InterfaceStory,
    post: InterfacePost,
    formData: {},
    flagValidate: {},
    error: {},
    // login: {},
    // account: {},
    // story: {},
    // post: {},
    // formData: {},
    // flagValidate: {},
    // error: {},
  },
  getters,
  mutations,
  actions,
});
