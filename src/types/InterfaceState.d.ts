import { InterfaceAccount } from "../types/InterfaceAccount";
import { InterfaceUser } from "../types/InterfaceUser";
import { InterfacePost } from "../types/InterfacePost";
import { InterfaceStory } from "../types/InterfaceStory";

export interface InterfaceState {
  login: InterfaceUser;
  account: InterfaceAccount;
  story: InterfaceStory;
  post: InterfacePost;
  user: InterfaceUser; //TODO
  formData: {};
  flagValidate: {};
  error: {};
}
