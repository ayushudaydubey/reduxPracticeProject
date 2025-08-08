import axios from "../../api/axiosConfig";
import { loaduser } from "../reducers/userSlice";

// Load current user from localStorage into Redux state
export const asyncCurrentUser = () => async (dispatch) => {
  try {
    const storedUser = localStorage.getItem("user");  // singular key
    if (!storedUser) {
      console.log("user not found in localStorage");
      return;
    }
    const userObj = JSON.parse(storedUser);
    dispatch(loaduser(userObj));
  } catch (error) {
    console.error("Error loading user from localStorage:", error);
  }
};

// Logout: remove user from localStorage and clear Redux state
export const asyncLogoutUser = () => async (dispatch) => {
  try {
    localStorage.removeItem("user");  // Remove key completely
    dispatch(loaduser(null));          // Clear user state
    console.log("User logged out and localStorage cleared");
  } catch (error) {
    console.error("Logout error:", error);
  }
};

// Login: fetch user from API, save to localStorage and Redux if valid
export const asyncLoginUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `/users?username=${user.username}&password=${user.password}`
    );

    console.log("API response data:", data);

    if (data.length === 0) {
      console.log("Invalid username or password");
      return;
    }

    // Save the first matched user (if multiple)
    localStorage.setItem("user", JSON.stringify(data[0]));
    dispatch(loaduser(data[0]));
    console.log("User logged in and saved to localStorage");
  } catch (error) {
    console.error("Login error:", error);
  }
};

// Register: post user, save to localStorage and Redux
export const asyncRegisterUser = (user) => async (dispatch) => {
  try {
    const { data } = await axios.post("/users", user);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(loaduser(data));
    console.log("User registered and saved to localStorage");
  } catch (error) {
    console.error("Registration error:", error);
  }
};
