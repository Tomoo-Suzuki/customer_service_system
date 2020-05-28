export default {
  login: state => state.login,
  account: state => state.account,
  story: state => state.story,
  post: function (state) {
    return state.post;
  },
  formData: function (state) {
    return state.formData;
  },
  flagValidate: function (state) {
    return state.flagValidate;
  },
  error: function (state) {
    return state.error;
  }
};