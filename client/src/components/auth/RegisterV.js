import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActionsv";
import classnames from "classnames";
class RegisterV extends Component {
  constructor() {
    super();
    this.state = {
      volunteer: "Volunteer",
      fname: "",
      lname: "",
      cname: "",
      otype: "",
      address:"",
      phone: "",
      email: "",
      password: "",
      password2: "",
      errors: {}
    };
  }

  componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/volunteer");
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
      volunteer: this.state.volunteer,
      fname: this.state.fname,
      lname: this.state.lname,
      cname: this.state.cname,
      otype: this.state.otype,
      address: this.state.address,
      phone: this.state.phone,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.password2
      
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
                <b>Volunteer Register</b>
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form noValidate onSubmit={this.onSubmit}>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.fname}
                  error={errors.fname}
                  id="fname"
                  type="text"
                  className={classnames("", {
                    invalid: errors.fname
                  })}
                />
                <label htmlFor="fname">First Name</label>
                <span className="red-text">{errors.fname}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.lname}
                  error={errors.lname}
                  id="lname"
                  type="text"
                  className={classnames("", {
                    invalid: errors.lname
                  })}
                />
                <label htmlFor="lname">Last Name</label>
                <span className="red-text">{errors.lname}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.cname}
                  error={errors.cname}
                  id="cname"
                  type="text"
                  className={classnames("", {
                    invalid: errors.cname
                  })}
                />
                <label htmlFor="cname">Company Name</label>
                <span className="red-text">{errors.cname}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.otype}
                  error={errors.otype}
                  id="otype"
                  type="text"
                  className={classnames("", {
                    invalid: errors.otype
                  })}
                />
                <label htmlFor="otype">Organization Type</label>
                <span className="red-text">{errors.otype}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.address}
                  error={errors.address}
                  id="address"
                  type="text"
                  className={classnames("", {
                    invalid: errors.address
                  })}
                />
                <label htmlFor="address">Address</label>
                <span className="red-text">{errors.address}</span>
              </div>
              <div className="input-field col s12">
                <input
                  onChange={this.onChange}
                  value={this.state.phone}
                  error={errors.phone}
                  id="phone"
                  type="text"
                  className={classnames("", {
                    invalid: errors.phone
                  })}
                />
                <label htmlFor="phone">Phone</label>
                <span className="red-text">{errors.phone}</span>
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
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  onChange={this.onChange}
                  value={this.state.volunteer}
                  error={errors.volunteer}
                  id="volunteer"
                  className={classnames("btn btn-large waves-effect waves-light hoverable blue accent-3", {
                    invalid: errors.volunteer
                  })}
                  type="submit"
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
RegisterV.propTypes = {
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
)(withRouter(RegisterV));