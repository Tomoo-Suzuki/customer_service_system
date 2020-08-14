import { InterfaceAccount } from "../types/InterfaceAccount";
import { InterfaceUser } from "../types/InterfaceUser";
import { InterfacePost } from "../types/InterfacePost";
import { InterfaceStory } from "../types/InterfaceStory";

import { ActionContext, Commit } from "/Use/node_modules/vuex/types/index";

export default {
  updateAccount(context: ActionContext, newAccount: InterfaceAccount) {
    context.commit("updateAccount", newAccount);
  },
  updateFormAccount(
    { commit }: { commit: Commit },
    eachForm: InterfaceAccount
  ) {
    commit("updateFormAccount", eachForm);
  },
  updateLogin(context: ActionContext, newLogin: InterfaceUser) {
    context.commit("updateLogin", newLogin);
  },
  updateStory({ commit }: { commit: Commit }, newStory: InterfaceStory) {
    commit("updateStory", newStory);
  },
  updatePost({ commit }: { commit: Commit }, newPost: InterfacePost) {
    commit("updatePost", newPost);
  },
  memoryForm({ commit }: { commit: Commit }, fromData: any) {
    commit("memoryForm", fromData);
  },
  initErrorAndFlag({ commit }: { commit: Commit }, initErrorAndFlag: any) {
    commit("initErrorAndFlag", initErrorAndFlag);
  },
  updateErrorMsg({ commit }: { commit: Commit }, error: any) {
    commit("updateErrorMsg", error);
  },
};
