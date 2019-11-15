import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";
// @material-ui/core components
import GridItem from "../components/Grid/GridItem.js";
import GridContainer from "../components/Grid/GridContainer.js";
import Button from "../components/CustomButtons/Button";
import Card from "../components/Card/Card.js";
import CardBody from "../components/Card/CardBody.js";
import CardFooter from "../components/Card/CardFooter.js";

class Dashboard extends Component  {

    render() {

        const { user } = this.props.auth;
        
    return (
        
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardBody>
                <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                
                <div class="input-field col s6">
                    <p className="flow-text grey-text text-darken-3">{user.username}</p> 

                    <label class="active">User Name</label>
                </div>
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>
                  
                  <div class="input-field col s6">
                    <p className="flow-text grey-text text-darken-3">{user.usertype}</p> 

                    <label class="active">User</label>
                </div>
                  
                   
                  </GridItem>
                  <GridItem xs={12} sm={12} md={4}>

                  <div class="input-field col s6">
                    <p className="flow-text grey-text text-darken-3">{user.organization}</p> 

                    <label class="active">Company Name</label>
                </div>

                  
                    
                  </GridItem>
                 
                </GridContainer>
                <GridContainer>
                
                  <GridItem xs={12} sm={12} md={4}>
                  <div class="input-field col s6">
                    <p className="flow-text grey-text text-darken-3">{user.firstname}</p> 

                    <label class="active">Fist Name</label>
                </div>
                    
                  </GridItem>
                  <GridItem xs={12} sm={12} md={2}>
                  <div class="input-field col s6">
                    <p className="flow-text grey-text text-darken-3">{user.lastname}</p> 

                    <label class="active">Last Name</label>
                </div>
                    
                  </GridItem>

                  <GridItem xs={12} sm={12} md={3}>

                  <div class="input-field col s6">
                      <p className="flow-text grey-text text-darken-3">{user.email}</p> 

                      <label class="active">Email</label>
                  </div>



                  </GridItem>

                  <GridItem xs={12} sm={12} md={3}>
                  <div class="input-field col s6">
                    <p className="flow-text grey-text text-darken-3">{user.mobile}</p> 

                    <label class="active">Mobile</label>
                  </div>
                    
                    
                     
                  </GridItem>
                </GridContainer>
                <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                <div class="input-field col s6">
                    <p className="flow-text grey-text text-darken-3">{user.streetname}</p> 

                    <label class="active">Street Name</label>
                </div>
                    
                  </GridItem>
      
                  <GridItem xs={12} sm={12} md={2}>

                  <div class="input-field col s6">
                    <p className="flow-text grey-text text-darken-3">{user.cityname}</p> 

                    <label class="active">City</label>
                </div>
                    
                  </GridItem>
                
                 
                  <GridItem xs={12} sm={12} md={3}>

                  <div class="input-field col s6">
                    <p className="flow-text grey-text text-darken-3">{user.province}</p> 

                    <label class="active">Province</label>
                </div>
                    
                  </GridItem>
                  <GridItem xs={12} sm={12} md={3}>

                  <div class="input-field col s6">
                    <p className="flow-text grey-text text-darken-3">{user.postalcode}</p> 

                    <label class="active">Postal Code</label>
                </div>

                  
                    
                  </GridItem>

                  
                </GridContainer>
              </CardBody>
              <CardFooter>
                <Button color="primary">Update Profile</Button>
              </CardFooter>
            </Card>
          </GridItem>
         
        </GridContainer>
      </div>
    );
    }
  }
  
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);