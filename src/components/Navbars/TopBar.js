/* eslint-disable */
/*!

=========================================================
* Paper Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Licensed under MIT (https://github.com/creativetimofficial/paper-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import { NavLink as ReactLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Container
} from "reactstrap";


import logo from "../../assets/img/hostseq_logo.png"

import routes from "routes.js";

import DatasetsDropdown from "../Dropdowns/DatasetsDropdown.js";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent"
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
    this.sidebarToggle = React.createRef();
  }
    
  toggle() {
    if (this.state.isOpen) {
      this.setState({
        color: "transparent",
      });
    } else {
      this.setState({
        color: "dark",
      });
    }
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  dropdownToggle(e) {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  openSidebar() {
    document.documentElement.classList.toggle("nav-open");
    this.sidebarToggle.current.classList.toggle("toggled");
  }
  // function that adds color dark/transparent to the navbar on resize (this is for the collapse)
  updateColor() {
    if (window.innerWidth < 993 && this.state.isOpen) {
      this.setState({
        color: "dark",
      });
    } else {
      this.setState({
        color: "transparent",
      });
    }
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateColor.bind(this));
  }
  componentDidUpdate(e) {
    if (
      window.innerWidth < 993 &&
      e.history.location.pathname !== e.location.pathname &&
      document.documentElement.className.indexOf("nav-open") !== -1
    ) {
      document.documentElement.classList.toggle("nav-open");
      this.sidebarToggle.current.classList.toggle("toggled");
    }
  }
  
  render() {
    const session_id = document.cookie != null ? document.cookie.split("session_id=")[1] : undefined;
    const payload = session_id ? session_id.split('.')[1]: undefined;
    const username = payload ? (JSON.parse(atob(payload))).preferred_username : undefined;
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar
        color={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "dark"
            : this.state.color
        }
        expand="lg"
        className={
          this.props.location.pathname.indexOf("full-screen-maps") !== -1
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top " +
              (this.state.color === "transparent" ? "navbar-transparent " : "")
        }
      >
        <Container fluid className="d-flex justify-content-between">
          <div className="navbar-wrapper">
            <div className="navbar-toggle">
              <button
                type="button"
                ref={this.sidebarToggle}
                className="navbar-toggler"
                onClick={() => this.openSidebar()}
              >
              </button>
            </div>
   
          </div>
        
          <NavbarToggler onClick={this.toggle}/>
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="justify-content-between"
          >
            <Nav className="d-flex">
              <div className="d-flex">
                <a href="/dashboard/beacon-search">
                  <img
                      src={logo}
                      alt="react-logo"
                      width='100px'
                    />
                </a>
                <NavItem>
                  <NavLink
                    tag={ReactLink} 
                    to="/dashboard/beacon-search" 
                    className="nav-link nav-item d-flex"
                    activeStyle={{
                      color: "navy"
                    }}
                    >
                      <p>Beacon Search</p>
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    tag={ReactLink} 
                    to="/dashboard/help" 
                    className="nav-link nav-item d-flex"
                    activeStyle={{
                      color: "navy"
                    }}
                    >
                      <p>Help</p>
                  </NavLink>
                </NavItem>
              </div>
              </Nav>
              <Nav className="d-flex">
              <div className="d-flex">
                {this.props.datasetVisible === true ? 
                  (<div className="d-none">
                    <DatasetsDropdown updateState={this.props.updateState} />
                  </div>) :
                  <></> }
                {/* Leaving this commented out for now */}
                <Dropdown
                  nav
                  isOpen={this.state.dropdownOpen}
                  toggle={(e) => this.dropdownToggle(e)}
                >
                  <DropdownToggle caret nav>
                    { username &&
                      <p className="pr-2">
                        {username}
                      </p>
                    }
                    <i className="nc-icon nc-settings-gear-65" style={{fontSize: '18px'}} />
                  </DropdownToggle>              
                  <DropdownMenu right>
                    <DropdownItem href="/">Return to HostSeq website</DropdownItem>
                    <DropdownItem href="/auth/logout">Logout</DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </div>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
