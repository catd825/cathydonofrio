import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarText,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (

      <Navbar color="light" light expand="md" fixed="top">
        <NavbarBrand href="/"></NavbarBrand>
        <div className="center-navbar">
        <NavbarToggler onClick={toggle} />
        <Collapse  isOpen={isOpen} navbar >
          <Nav className="mr-auto" navbar className="center-navbar">
            <NavItem>
            <NavLink to="/about" tag={Link}>about</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/projects" tag={Link}>projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1alTPcDWw-x98fs4dIYg19YekKp1Iu0bW/view?usp=sharing">resume</NavLink>
            </NavItem> 

          </Nav>
        </Collapse>
        </div>
      </Navbar>

  );
}

export default Example;