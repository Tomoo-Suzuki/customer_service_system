export default {
  updateAccount(state, newAccount) {
    state.account = newAccount;
  },
  updateFormAccount(state, hash) {
    const key = hash.key;
    const val = hash.val;
    state.account[key] = val;
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
  initErrorAndFlag(
    state, initErrorAndFlag) {
    console.log(initErrorAndFlag)
    state.error = initErrorAndFlag.error;
    state.flagValidate = initErrorAndFlag.flagValidate;
  },
  // updateflagValidate(state, newflagValidate) {
  //   state.flagValidate = newflagValidate;
  // },
  updateErrorMsg(state, hash) {
    const key = hash.key;
    const val = hash.val;
    state.error[key] = val;
    if (val === '') {
      state.flagValidate[key] = true;
    } else {
      state.flagValidate[key] = false;
    }
  }
};