import React, { Component } from "react";
import { Link } from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div style={{ height: "75vh" }} className="container valign-wrapper">
        <div className="row">
          <div className="col s12 center-align">
            
            <p className="flow-text grey-text text-darken-1">
            <img src={"https://drive.google.com/uc?id=1hDTVxF7179YjSl_T5tdSTjxEvuyYY2Ub"} alt="Food Hero Logo" width="300px" />
            <div className="section">
            <Link
                to="/roptions"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
                Register
            </Link>

            <Link
                to="/login"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >
                Log In
            </Link>
          </div>
            </p>
            <br />
           
          </div>
        </div>
      </div>
    );
  }
}
export default Landing;