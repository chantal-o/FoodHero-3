import axios from "axios";
import setAuthToken from "../utils/setAuthToken";
import jwt_decode from "jwt-decode";
import {
  GET_ERRORS,
  SET_CURRENT_USER,
  USER_LOADING
} from "./types";
// import { decode } from "punycode";
// Register User
export const registerUser = (userData, history) => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => history.push("/login")) // re-direct to login on successful register
    .catch(err =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data
      })
    );
};
// Login - get user token
export const loginUser = userData => dispatch => {
  axios
    .post("/api/users/login", userData)
    .then(res => {
      // Save to localStorage
// Set token to localStorage
console.log(res.data)
      const { token } = res.data;
      localStorage.setItem("jwtToken", token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      console.log(decoded)
      // Set current user
      dispatch(setCurrentUser(decoded));
      redirectUser(decoded);
    })
    .catch(err =>
      console.log(err)
    );
};

export const redirectUser = (user) => {
  console.log("Rerouting user " + user)
  switch(user.usertype){
            case "Donor":
                console.log("to donor page")
                window.location.href = "./donor";
                break;
      
            case "Recipient":
                console.log("to recipient page")

                window.location.href = "./recipient";

            
              break;
      
            case "Volunteer":
                console.log("to volunteer page")
                window.location.href = "./volunteer";

              break; 

            default:
                console.log("to login page")
                window.location.href = "./login";
                
  }

}
// Set logged in user
export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
// User loading
export const setUserLoading = () => {
  return {
    type: USER_LOADING
  };
};
// Log user out
export const logoutUser = () => dispatch => {
  // Remove token from local storage
  localStorage.removeItem("jwtToken");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
};