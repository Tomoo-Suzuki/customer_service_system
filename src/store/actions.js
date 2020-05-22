export default {
  updateAccount(context, newAccount) {
    context.commit("updateAccount", newAccount);
  },
  updateFormAccount({
    commit
  }, eachForm) {
    commit("updateFormAccount", eachForm);
  },
  updateLogin(context, newLogin) {
    context.commit("updateLogin", newLogin);
  },
  updateStory({
    commit
  }, newStory) {
    commit("updateStory", newStory);
  },
  updatePost({
    commit
  }, newPost) {
    commit("updatePost", newPost);
  },
  memoryForm({
    commit
  }, fromData) {
    commit("memoryForm", fromData);
  },
  initErrorAndFlag({
    commit
  }, initErrorAndFlag) {
    commit("initErrorAndFlag", initErrorAndFlag);
  },
  // updateflagValidate({
  //   commit
  // }, flagValidate) {
  //   commit("updateflagValidate", flagValidate);
  // },
  updateErrorMsg({
    commit
  }, error) {
    commit("updateErrorMsg", error);
  }

};