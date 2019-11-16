import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
import Nav from "./components/Nav";
import Landing from "./components/layout/Landing";
import rOptions from "./components/layout/rOptions";
import RegisterD from "./components/auth/RegisterD";
import RegisterR from "./components/auth/RegisterR";
import RegisterV from "./components/auth/RegisterV";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Donor from "./pages/Donor";
import Recipient from "./pages/Recipient";
import Volunteer from "./pages/Volunteer";
import Mission from "./pages/Mission";
import Profile from "./pages/Profile";
// import Sms from "./components/SMSForm/index";


//twillio
//import SMSForm from './SMSForm';

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./login";
  }
}

class App extends Component {
  render() {
    const AuthenticatedRoutes = () => {
      return (
        <div id="container">
          <Nav />
            <Switch>
              <PrivateRoute exact path="/donor" component={Donor} />
              <PrivateRoute exact path="/recipient" component={Recipient} />
              <PrivateRoute exact path="/volunteer" component={Volunteer} />
              <PrivateRoute exact path="/mission" component={Mission} />
              <PrivateRoute exact path="/profile" component={Profile} />


            </Switch>
        </div>
      )
    }

    return (
      <Provider store={store}>
        <Router className="App">
            <Switch>
            {/* <Route exact path="/" component={Sms} /> */}

              <Route exact path="/" component={Landing} />
              <Route exact path="/roptions" component={rOptions} />
              <Route exact path="/registerd" component={RegisterD} />
              <Route exact path="/registerr" component={RegisterR} />
              <Route exact path="/registerv" component={RegisterV} />
              <Route exact path="/login" component={Login} />
              <Route component={AuthenticatedRoutes} />
            </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;