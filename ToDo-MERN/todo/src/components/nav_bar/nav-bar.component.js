import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
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
    DropdownItem } from 'reactstrap';

// Components.
import AddToDoComponent  from './../add-todo/add-todo.component';
import ListToDoComponent  from './../list-todo/list-todo.component'; 

// Navigation Component.
class NavbarComponent extends React.Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      
    toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }

    render() {
        return (
          <Router>  
          <div>
            <Navbar color="faded" light expand="md">
              <NavbarBrand href="/" style={navStyle.navBandText}>To-Do</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    {/* <NavLink href="/components/">Components</NavLink> */}
                    <NavLink ><Link to="/">List</Link></NavLink>
                  </NavItem>
                  <NavItem>
                    {/* <NavLink href="javascript:void(0)">Github</NavLink> */}
                    <NavLink><Link to="/add">Add</Link></NavLink>
                  </NavItem>
                </Nav>
              </Collapse>
            </Navbar>
                <Route exact path="/" component={ListToDoComponent} />
                <Route path="/add" component={AddToDoComponent} />
          </div>
          </Router>
        );
      }
}

const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
  );
  
const About = () => (
<div>
    <h2>About</h2>
</div>
);

const Topics = () => (
<div>
    <h2>Your topics</h2>
</div>
);

let navStyle = {
    navBandText : {
        fontWeight : "bolder",
        color : "grey"
    }
};

export default NavbarComponent; // Now our component is exportable.