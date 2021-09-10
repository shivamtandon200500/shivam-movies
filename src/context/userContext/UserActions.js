export const getusersStart = () => ({
  type: "GET_USERS_START",
});

export const getusersSuccess = (lists) => ({
  type: "GET_USERS_SUCCESS",
  payload: lists,
});

export const getusersFailure = () => ({
  type: "GET_USERS_FAILURE",
});

export const createUserStart = () => ({
  type: "CREATE_USER_START",
});

export const createUserSuccess = (list) => ({
  type: "CREATE_USER_SUCCESS",
  payload: list,
});

export const createUserFailure = () => ({
  type: "CREATE_USER_FAILURE",
});

export const updateUserStart = () => ({
  type: "UPDATE_USER_START",
});

export const updateUserSuccess = (movie) => ({
  type: "UPDATE_USER_SUCCESS",
  payload: movie,
});

export const updateUserFailure = () => ({
  type: "UPDATE_USER_FAILURE",
});

export const deleteUserStart = () => ({
  type: "DELETE_USER_START",
});

export const deleteUserSuccess = (id) => ({
  type: "DELETE_USER_SUCCESS",
  payload: id,
});

export const deleteUserFailure = () => ({
  type: "DELETE_USER_FAILURE",
});