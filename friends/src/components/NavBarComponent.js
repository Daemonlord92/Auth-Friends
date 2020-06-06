import React from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
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
                        Login
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink to="/protected">
                        Friends
                    </NavLink>
                </NavItem>
            </Nav>
        </Navbar>
    )
}

export default NavBarComponent;
