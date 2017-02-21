import React, {Component} from 'react'

import logo from '../../assets/logo.png'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class MyNavbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="inverse" inverse toggleable>
        <NavbarToggler right onClick={this.toggle} />
        <NavbarBrand href="#">
          <img src={logo} height="30" alt=""/>
        </NavbarBrand>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="#">Features</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">How it works</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Faq</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#">Sign In</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="#" active>Sign Up</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default MyNavbar