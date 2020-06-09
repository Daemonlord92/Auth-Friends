import React from "react";
import { Link } from 'react-router-dom'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';

const NavBarComponent = () => {
    return(
        <Navbar color="light" light expand="md">
            <NavbarBrand to="/login">
                Friends of React
            </NavbarBrand>
            <Nav className="mr-auto" navbar>
                <NavItem>
                        <Link to="/login" className="nav-link">
                            Login
                        </Link>
                </NavItem>
                <NavItem>
                        <Link to="/protected" className="nav-link">
                            Friends
                        </Link>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavBarComponent;
