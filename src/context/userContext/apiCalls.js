import axiosInstance from "../../axiosInstance"
import {
  createUserFailure,
  createUserStart,
  createUserSuccess,
  deleteUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  getusersFailure,
  getusersStart,
  getusersSuccess,
} from "./UserActions";

export const getUsers = async (dispatch) => {
  dispatch(getusersStart());
  try {
    const res = await axiosInstance.get("/users/", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getusersSuccess(res.data));
  } catch (err) {
    dispatch(getusersFailure());
  }
};

//create
export const createUser= async (user, dispatch) => {
  dispatch(createUserStart());
  try {
    const res = await axiosInstance.post("/users/", user, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createUserSuccess(res.data));
  } catch (err) {
    dispatch(createUserFailure());
  }
};

//delete
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    await axiosInstance.delete("/users/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteUserSuccess(id));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};