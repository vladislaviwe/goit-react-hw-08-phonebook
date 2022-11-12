export const selectLogin = ({ auth }) => auth.isLogin;

export const selectUser = ({ auth }) => auth.user;

export const selectLoadingUserStatus = ({ auth }) => auth.isLoadingCurrentUser;