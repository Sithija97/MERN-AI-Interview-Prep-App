import { USER_ROLES } from "../enums";

export type LoginUserPayload = {
  email: string;
  password: string;
};

export type RegisterUserPayload = {
  username: string;
  email: string;
  password: string;
};

export type ChangePasswordPayload = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export type IUser = {
  _id: string;
  username: string;
  email: string;
  role: USER_ROLES;
  avatar?: string;
  createdAt: string;
  updatedAt: string;
};

export type IAuthState = {
  loggedInUser: IUser | undefined;
  isAuthenticated: boolean;
  loginUserStatus: string;
  loginUserSuccess: boolean;
  loginUserError: boolean;
  logoutUserStatus: string;
  logoutUserSuccess: boolean;
  logoutUserError: boolean;
  registerUserStatus: string;
  registerUserSuccess: boolean;
  registerUserError: boolean;
  changeUserPasswordStatus: string;
  changeUserPasswordSuccess: boolean;
  changeUserPasswordError: boolean;
  changeUserAvatarStatus: string;
  changeUserAvatarSuccess: boolean;
  changeUserAvatarError: boolean;
};

export type IPost = {
  _id: string;
  title: string;
  content: string;
  image: string;
  createdAt: string; // ISO timestamp format
  updatedAt: string; // ISO timestamp format
};

export type IPostState = {
  posts: IPost[];
  createPostStatus: string;
  createPostSuccess: boolean;
  createPostError: boolean;
  getPostStatus: string;
  getPostSuccess: boolean;
  getPostError: boolean;
};
