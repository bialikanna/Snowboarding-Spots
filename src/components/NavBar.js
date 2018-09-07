import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import {
    HashRouter,
    Link
} from 'react-router-dom'

export default class NavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
            collapsed: true
        };
    }

    toggleNavbar() {
        this.setState({
            collapsed: !this.state.collapsed
        });
    }
    render() {
        return (
            <div className="container">
                <Navbar color="faded" light>
                    <NavbarBrand className="mr-auto user"></NavbarBrand>
                    <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!this.state.collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="ham_link" href="" to="/resorts" tag={Link}>Resorts</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="ham_link" href="" to="/snowparks" tag={Link}>Snowparks</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="ham_link" href="" to="/freeride" tag={Link}>Freeride</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="ham_link" href="" to="/street" tag={Link}>Street</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="ham_link" href="" to="/kontakt" tag={Link}>Kontakt</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
