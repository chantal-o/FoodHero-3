import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import classnames from "classnames";
import Terms from "../termsandservices/term";

class RegisterD extends Component {
  constructor() {
    super();
    this.state = {
      usertype: "Donor",
      username: "",
      firstname: "",
      lastname: "",
      organization: "",
      streetname: "",
      cityname: "",
      province: "",
      postalcode: "",
      mobile: "",
      email: "",
      password: "",
      password2: "",
      accepttc: "accepttc",
      acceptem: "acceptem",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/donor");
    }
  }
componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }
onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };
onSubmit = e => {
    e.preventDefault();
    
const newUser = {

      usertype: this.state.usertype,
      username: this.state.username,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      organization: this.state.organization,
      streetname: this.state.streetname,
      cityname: this.state.cityname,
      province: this.state.province,
      postalcode: this.state.postalcode,
      mobile: this.state.mobile,
      email:this.state.email,
      password: this.state.password,
      password2:this.state.password2,
      accepttc: this.state.accepttc,
      acceptem: this.state.acceptem
    };
    this.props.registerUser(newUser, this.props.history); 

  };
render() {
    const { errors } = this.state;
return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/option" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              Options
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Donor Register</b>
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>

            <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.username}
                  error={errors.username}
                  id="username"
                  type="text"
                  className={classnames("", {
                    invalid: errors.username
                  })}
                />
                <label htmlFor="username">User Name</label>
                <span className="red-text">{errors.username}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.firstname}
                  error={errors.firstname}
                  id="firstname"
                  type="text"
                  className={classnames("", {
                    invalid: errors.firstname
                  })}
                />
                <label htmlFor="firstname">First Name</label>
                <span className="red-text">{errors.firstname}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.lastname}
                  error={errors.lastname}
                  id="lastname"
                  type="text"
                  className={classnames("", {
                    invalid: errors.lastname
                  })}
                />
                <label htmlFor="lastname">Last Name</label>
                <span className="red-text">{errors.lastname}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.organization}
                  error={errors.organization}
                  id="organization"
                  type="text"
                  className={classnames("", {
                    invalid: errors.organization
                  })}
                />
                <label htmlFor="organization">Organization Name</label>
                <span className="red-text">{errors.organization}</span>
              </div>
  
          
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.streetname}
                  error={errors.streetname}
                  id="streetname"
                  type="text"
                  className={classnames("", {
                    invalid: errors.streetname
                  })}
                />
                <label htmlFor="streetname">Street Name</label>
                <span className="red-text">{errors.streetname}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.cityname}
                  error={errors.cityname}
                  id="cityname"
                  type="text"
                  className={classnames("", {
                    invalid: errors.cityname
                  })}
                />
                <label htmlFor="cityname">City Name</label>
                <span className="red-text">{errors.cityname}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.province}
                  error={errors.province}
                  id="province"
                  type="text"
                  className={classnames("", {
                    invalid: errors.province
                  })}
                />
                <label htmlFor="province">Province</label>
                <span className="red-text">{errors.province}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.postalcode}
                  error={errors.postalcode}
                  id="postalcode"
                  type="text"
                  className={classnames("", {
                    invalid: errors.postalcode
                  })}
                />
                <label htmlFor="postalcode">Postal Code</label>
                <span className="red-text">{errors.postalcode}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.mobile}
                  error={errors.mobile}
                  id="mobile"
                  type="text"
                  className={classnames("", {
                    invalid: errors.mobile
                  })}
                />
                <label htmlFor="mobile">Phone</label>
                <span className="red-text">{errors.mobile}</span>
              </div>
              
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.email}
                  error={errors.email}
                  id="email"
                  type="email"
                  className={classnames("", {
                    invalid: errors.email
                  })}
                />
                <label htmlFor="email">Email</label>
                <span className="red-text">{errors.email}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password}
                  error={errors.password}
                  id="password"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <label htmlFor="password">Password</label>
                <span className="red-text">{errors.password}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.password2}
                  error={errors.password2}
                  id="password2"
                  type="password"
                  className={classnames("", {
                    invalid: errors.password2
                  })}
                />
                <label htmlFor="password2">Confirm Password</label>
                <span className="red-text">{errors.password2}</span>
              </div>
              
              
              <div>
              <label htmlFor="accepttc">
                <Terms></Terms>
                   <input 
                   onChange={this.onChange}
                  value={this.state.accepttc}
                  error={errors.accepttc}
                  id="accepttc"
                  type="checkbox" 
                  className={classnames("", {
                    invalid: errors.accepttc
                  })}
                  />
                   <span>Accept Terms</span>
                </label>

              </div>
              {/* <div>
              <label htmlFor="acceptem">
                   <input 
                   onChange={this.onChange}
                  value={this.state.acceptem}
                  error={errors.acceptem}
                  id="acceptem"
                  type="checkbox" 
                  className={classnames("", {
                    invalid: errors.acceptem
                  })}
                  />
                   <span>Accept To Rec</span>
                   </label>

              </div> */}
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  onChange={this.onChange}
                  value={this.state.usertype}
                  error={errors.usertype}
                  id="usertype"
                  type="submit"

                  className={classnames("btn btn-large waves-effect waves-light hoverable blue accent-3", {
                    invalid: errors.usertype
                  })}
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
RegisterD.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { registerUser }
)(withRouter(RegisterD));