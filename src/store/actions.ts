export default {
  updateAccount(context:any, newAccount:any) {
    context.commit("updateAccount", newAccount);
  },
  updateFormAccount({ commit }:{commit:any}, eachForm:any) {
    commit("updateFormAccount", eachForm);
  },
  updateLogin(context:any, newLogin:any) {
    context.commit("updateLogin", newLogin);
  },
  updateStory({ commit }:{commit:any}, newStory:any) {
    commit("updateStory", newStory);
  },
  updatePost({ commit }:{commit:any}, newPost:any) {
    commit("updatePost", newPost);
  },
  memoryForm({ commit }:{commit:any}, fromData:any) {
    commit("memoryForm", fromData);
  },
  initErrorAndFlag({ commit }:{commit:any}, initErrorAndFlag:any) {
    commit("initErrorAndFlag", initErrorAndFlag);
  },
  // updateflagValidate({
  //   commit
  // }, flagValidate) {
  //   commit("updateflagValidate", flagValidate);
  // },
  updateErrorMsg({ commit }:{commit:any}, error:any) {
    commit("updateErrorMsg", error);
  }
};
