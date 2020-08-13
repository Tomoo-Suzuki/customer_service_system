import { InterfaceState } from "../types/InterfaceState";

export default {
  login: (state: InterfaceState) => state.login,
  account: (state: InterfaceState) => state.account,
  story: (state: InterfaceState) => state.story,
  post: function(state: InterfaceState) {
    return state.post;
  },
  formData: function(state: InterfaceState) {
    return state.formData;
  },
  flagValidate: function(state: InterfaceState) {
    return state.flagValidate;
  },
  error: function(state: InterfaceState) {
    return state.error;
  },
};
