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
  }
};