import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Navbar } from "react-materialize";
import NavItem from "react-materialize/lib/NavItem";
import { logoutUser } from "../../actions/authActions";

const img = <img src={"https://drive.google.com/uc?id=1hDTVxF7179YjSl_T5tdSTjxEvuyYY2Ub"} alt="Food Hero Logo" width="100px" />

class Nav extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
      };
      render() {
        return (

    <div className="section">
        <Navbar brand={img} className="blue accent-2" alignLinks="right" >
            <NavItem
                className="disabled"
            >
                Welcome to Food Hero!
            </NavItem>
            <Link
                // PLEASE NOTE: NOT DONE
                // to={redirectUser}
                to="/Mission"
                className="btn btn-med waves-effect waves-light hoverable blue accent-3"
            >
                Missions Page
            </Link>
            <Link
                // PLEASE NOTE: NOT DONE
                to="/Profile"
                className="btn btn-med waves-effect waves-light hoverable blue accent-3"
            >
                Profile
            </Link>
            <Link
            onClick={this.onLogoutClick}
                className="btn btn-med waves-effect waves-light hoverable blue accent-3"
            >
                Log Out
            </Link>
        </Navbar>
    </div>
  )}
};
Nav.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
  };
  const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
  });
  export default connect(
    mapStateToProps,
    { logoutUser }
  )(Nav);