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

import DatasetsDropdown from "../Dropdowns/DatasetsDropdown.js";

//import custom css
import '../../assets/css/style.css'

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      dropdownOpen: false,
      color: "transparent",
      mobile: 'd-flex'
    };
    this.toggle = this.toggle.bind(this);
    this.dropdownToggle = this.dropdownToggle.bind(this);
  }

  
    toggle() {
      if (this.state.isOpen) {
        this.setState({
          color: "transparent",
        });
      } else {
        this.setState({
          color: "topper",
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
  

    // function that adds color to the navbar on resize (this is for the collapse)
    updateColor() {
      if (window.innerWidth < 575 && this.state.isOpen) {
        this.setState({
          color: "topper",
        });
      } else {
        this.setState({
          color: "transparent",
        });
      }
    }

    componentDidMount() {
      window.addEventListener("resize", () =>{ 
        this.updateColor.bind(this);
        this.setState({
          isMobile: window.innerWidth < 575
        });
      }, false);

      this.setState({
        isMobile: window.innerWidth < 575
      });
    
    }

    componentDidUpdate(e) {
      if (
        window.innerWidth < 575 &&
        e.history.location.pathname !== e.location.pathname &&
        document.documentElement.className.indexOf("nav-open") !== -1
      ) {
        document.documentElement.classList.toggle("nav-open");
        this.sidebarToggle.current.classList.toggle("toggled");
      }
      
    }


  render() {
    const session_id = document.cookie != "" ? document.cookie.split("session_id=")[1] : undefined;
    const payload = session_id ? session_id.split('.')[1]: undefined;
    const username = payload ? (JSON.parse(atob(payload))).preferred_username : undefined;
    
    const mobile = this.state.isMobile ? 'd-flex flex-column' : 'd-flex';
    const desktopLogo = this.state.isMobile ? 'd-none': '';
    return (
      // add or remove classes depending if we are on full-screen-maps page or not
      <Navbar
        color={
          this.state.isMobile
            ? "topper"
            : this.state.color
        }
        expand="sm"
        className={
          this.state.isMobile
            ? "navbar-absolute fixed-top"
            : "navbar-absolute fixed-top " +
              (this.state.color === "transparent" ? "navbar-transparent " : "")
        }
      >
        <Container fluid className="d-flex">
          <div>       
            <NavbarToggler onClick={this.toggle} style={{padding: '0px', height: 'auto'}} className="navbar-light mr-1"/>
    
              <a href="/dashboard/variants-search" className="navbar-toggler">
                <img
                    src={logo}
                    alt="react-logo"
                    width='100px'
                  />
              </a> 
          </div>
          <Collapse
            isOpen={this.state.isOpen}
            navbar
            className="justify-content-between"
          >
            <Nav className="d-flex">
              <div className={mobile}>
                <a href="/dashboard/variants-search" className={desktopLogo}>
                  <img
                      src={logo}
                      alt="react-logo"
                      width='100px'
                    />
                </a>
                <NavItem>
                  <NavLink
                    tag={ReactLink} 
                    to="/dashboard/variants-search"
                    className="nav-link nav-item d-flex"
                    activeStyle={{
                      color: "navy"
                    }}
                    >
                      <p>Variants Search</p>
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