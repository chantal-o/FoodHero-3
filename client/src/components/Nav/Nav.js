import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-materialize";
import NavItem from "react-materialize/lib/NavItem";
import { redirectUser, logoutUser } from "../../actions/authActions";

const img = <img src={"https://drive.google.com/uc?id=1hDTVxF7179YjSl_T5tdSTjxEvuyYY2Ub"} alt="Food Hero Logo" width="100px" />

const Nav = props => (
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
                to="/"
                className="btn btn-med waves-effect waves-light hoverable blue accent-3"
            >
                Action Page
            </Link>
            <Link
                // PLEASE NOTE: NOT DONE
                to="/Profile"
                className="btn btn-med waves-effect waves-light hoverable blue accent-3"
            >
                Profile
            </Link>
            <Link
                to={logoutUser}
                className="btn btn-med waves-effect waves-light hoverable blue accent-3"
            >
                Log Out
            </Link>
        </Navbar>
    </div>
)

export default Nav;