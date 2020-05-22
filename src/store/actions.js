export default {
  updateAccount(context, newAccount) {
    context.commit("updateAccount", newAccount);
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
  initErrorMsg({
    commit
  }, initErrorMsg) {
    commit("initErrorMsg", initErrorMsg);
  },
  updateflagValidate({
    commit
  }, flagValidate) {

    commit("updateflagValidate", flagValidate);
  },
  updateErrorMsg({
    commit
  }, error) {
    commit("updateErrorMsg", error);
  }
};