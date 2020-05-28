export default {
  login: (state:any) => state.login,
  account: (state:any) => state.account,
  story: (state:any) => state.story,
  post: function (state:any) {
    return state.post;
  },
  formData: function (state:any) {
    return state.formData;
  },
  flagValidate: function (state:any) {
    return state.flagValidate;
  },
  error: function (state:any) {
    return state.error;
  }
};