export default {
  login: state => state.login,
  account: state => state.account,
  story: state => state.story,
  post: function (state) {
    return state.post;
  }
};