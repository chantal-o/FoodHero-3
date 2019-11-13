import React from "react";
import "./Nav.css";

const Nav = props => (
    <Navbar brand={<a href="./images/foodHeroLogo.png" />} alignLinks="right">
        <NavItem class="actions" href="">
            {this.state.firstname}'s Actions
        </NavItem>
        <NavItem class="profile" href="">
            Profile
        </NavItem>
        <NavItem class="history" href="">
            History
        </NavItem>
    </Navbar>
);

export default Nav;