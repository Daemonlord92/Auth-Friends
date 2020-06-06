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
                    <NavLink to="/login">
                        <Link to="/login">
                            Login
                        </Link>
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/protected">
                        <Link to="/protected">
                            Friends
                        </Link>
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavBarComponent;
