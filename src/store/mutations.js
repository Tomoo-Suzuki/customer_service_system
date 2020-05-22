export default {
  updateAccount(state, newAccount) {
    state.account = newAccount;
  },
  updateLogin(state, newLogin) {
    state.login = newLogin;
  },
  updateStory(state, newStory) {
    state.story = newStory;
  },
  updatePost(state, newPost) {
    state.post = newPost;
  },
  memoryForm(state, fromData) {
    state.formData = fromData;
  },
  initErrorMsg(
    state, initErrorMsg) {
    state.error = initErrorMsg;
  },

  updateflagValidate(state, newflagValidate) {
    state.flagValidate = newflagValidate;
  },
  updateErrorMsg(state, hash) {
    const key = hash.key;
    const val = hash.val;
    state.error[key] = val
  }
};