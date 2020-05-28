export default {
  updateAccount(state:any ,newAccount:any) {
    state.account = newAccount;
  },
  updateFormAccount(state:any, hash:any) {
    const key = hash.key;
    const val = hash.val;
    state.account[key] = val;
  },
  updateLogin(state:any ,newLogin:any) {
    state.login = newLogin;
  },
  updateStory(state:any ,newStory:any) {
    state.story = newStory;
  },
  updatePost(state:any ,newPost:any) {
    state.post = newPost;
  },
  memoryForm(state:any, fromData:any) {
    state.formData = fromData;
  },
  initErrorAndFlag(
    state:any ,initErrorAndFlag:any) {
    console.log(initErrorAndFlag)
    state.error = initErrorAndFlag.error;
    state.flagValidate = initErrorAndFlag.flagValidate;
  },
  // updateflagValidate(state:any newflagValidate) {
  //   state.flagValidate = newflagValidate;
  // },
  updateErrorMsg(state:any ,hash:any) {
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