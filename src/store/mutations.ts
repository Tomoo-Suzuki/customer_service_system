import { InterfaceAccount } from "../types/InterfaceAccount";
import { InterfaceUser } from "../types/InterfaceUser";
import { InterfacePost } from "../types/InterfacePost";
import { InterfaceStory } from "../types/InterfaceStory";
import { InterfaceState } from "../types/InterfaceState";

export default {
  updateAccount(state: InterfaceState, newAccount: InterfaceAccount) {
    state.account = newAccount;
  },
  updateFormAccount(
    state: InterfaceState,
    hash: { key: string | number; val: string | number }
  ) {
    const key = hash.key;
    const val = hash.val;
    state.account[key] = val;
  },
  updateLogin(state: InterfaceState, newLogin: InterfaceUser) {
    state.login = newLogin;
  },
  updateStory(state: InterfaceState, newStory: InterfaceStory) {
    state.story = newStory;
  },
  updatePost(state: InterfaceState, newPost: InterfacePost) {
    state.post = newPost;
  },
  memoryForm(state: InterfaceState, fromData: any) {
    state.formData = fromData;
  },
  initErrorAndFlag(state: InterfaceState, initErrorAndFlag: any) {
    console.log(initErrorAndFlag);
    state.error = initErrorAndFlag.error;
    state.flagValidate = initErrorAndFlag.flagValidate;
  },
  updateErrorMsg(
    state: InterfaceState,
    hash: { key: string | number; val: string | number }
  ) {
    const key = hash.key;
    const val = hash.val;
    state.error[key] = val;
    if (val === "") {
      state.flagValidate[key] = true;
    } else {
      state.flagValidate[key] = false;
    }
  },
};
