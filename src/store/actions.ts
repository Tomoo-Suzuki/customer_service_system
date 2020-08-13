import { InterfaceAccount } from "../types/InterfaceAccount";
import { InterfaceUser } from "../types/InterfaceUser";
import { InterfacePost } from "../types/InterfacePost";
import { InterfaceStory } from "../types/InterfaceStory";

export default {
  updateAccount(context: any, newAccount: InterfaceAccount) {
    context.commit("updateAccount", newAccount);
  },
  updateFormAccount({ commit }: { commit: any }, eachForm: InterfaceAccount) {
    commit("updateFormAccount", eachForm);
  },
  updateLogin(context: any, newLogin: InterfaceUser) {
    context.commit("updateLogin", newLogin);
  },
  updateStory({ commit }: { commit: any }, newStory: InterfaceStory) {
    commit("updateStory", newStory);
  },
  updatePost({ commit }: { commit: any }, newPost: InterfacePost) {
    commit("updatePost", newPost);
  },
  memoryForm({ commit }: { commit: any }, fromData: any) {
    commit("memoryForm", fromData);
  },
  initErrorAndFlag({ commit }: { commit: any }, initErrorAndFlag: any) {
    commit("initErrorAndFlag", initErrorAndFlag);
  },
  updateErrorMsg({ commit }: { commit: any }, error: any) {
    commit("updateErrorMsg", error);
  },
};
