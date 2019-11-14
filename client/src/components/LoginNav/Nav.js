import React from "react";
import { Link } from "react-router-dom";
import { Navbar } from "react-materialize";

const img = <img src={"https://drive.google.com/uc?id=1hDTVxF7179YjSl_T5tdSTjxEvuyYY2Ub"} alt="Food Hero Logo" width="100px" />

const Nav = props => (
    <div className="section">
        <Navbar brand={img} className="blue accent-2" alignLinks="right" >
            <Link
                to="/"
            >
                Welcome to Food Hero!
            </Link>
            <Link
                to="/roptions"
                className="btn btn-med waves-effect waves-light hoverable blue accent-3"
            >
                Register
            </Link>
            <Link
                to="/login"
                className="btn btn-med waves-effect waves-light hoverable blue accent-3"
            >
                Log In
            </Link>
        </Navbar>
    </div>
)

export default Nav;