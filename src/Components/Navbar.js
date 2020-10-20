import React, { useState } from 'react';
import { Link } from 'react-router-dom'

import {
  Collapse,
  Navbar,
  NavbarToggler,
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
        <NavbarBrand href="/">CATHY D'ONOFRIO</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/work" tag={Link}>Work</NavLink>
            </NavItem>
            <NavItem>
              <NavLink target="_blank" href="https://drive.google.com/file/d/1alTPcDWw-x98fs4dIYg19YekKp1Iu0bW/view?usp=sharing">Resume</NavLink>
            </NavItem>  
          </Nav>
        </Collapse>
      </Navbar>

  );
}

export default Example;