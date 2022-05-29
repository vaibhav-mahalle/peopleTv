import axios from "axios";
import { ToastMsg } from "../../components";

export const LoginHandler = async (
  loginForm,
  authDispatch,
  navigate,
  location
) => {
  try {
    const res = await axios.post("/api/auth/login", loginForm);
    if (res.status === 200 || res.status === 201) {
      localStorage.setItem("UserToken", res.data.encodedToken);
      authDispatch({
        type: "LOGIN",
        payload: {
          user: res.data.foundUser,
          token: res.data.encodedToken,
        },
      });
      ToastMsg("Log in successful", "success");
      navigate(location.state?.from?.pathname || "/");
    }
  } catch (error) {
    if (error.response.status == 401) {
      ToastMsg("Invalid email or password", "error");
    } else {
      ToastMsg("Something went wrong,Try again later!", "error");
    }
  }
};

export const handleSingup = async (signupDetails, authDispatch, navigate) => {
  try {
    const res = await axios.post("/api/auth/signup", signupDetails);
    if (res.status === 201) {
      authDispatch({
        type: "SIGNUP",
        payload: {
          user: res.data.foundUser,
          token: res.data.encodedToken,
        },
      });
      ToastMsg("Successfully Signed Up", "success");
      navigate("../login");
    }
  } catch (error) {
    if (error.response.status === 422) {
      ToastMsg("You are already registered,Please Login", "info");
    } else {
      ToastMsg("Something went wrong,Please Try again later", "error");
    }
  }
};

export const logoutHandler = (authDispatch, navigate) => {
  localStorage.clear();
  authDispatch({
    type: "LOGOUT",
    payload: {
      user: null,
    },
  });
  navigate("/");
  ToastMsg("Successfully Logged out ", "success");
};