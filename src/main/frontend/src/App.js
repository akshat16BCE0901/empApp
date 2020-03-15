import React, { Component } from 'react';
import './App.css';

import AllEmployees from './components/Employee/AllEmployees';
import AddEmployeeForm from './components/Employee/AddEmployeeForm';
import AddJiraForm from './components/Jira/AddJiraForm';
import AllJiras from './components/Jira/AllJiras';
import AllProjects from './components/Project/AllProjects';
import AddProjectForm from './components/Project/AddProjectForm';
import JiraView from './components/Jira/JiraView';
import LiveText from './components/Personal/LiveText';
import IndividualJiraPage from './components/Jira/IndividualJiraPage';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';

var components = {
  employees : <AllEmployees />,
  jiras : <AllJiras />,
  addEmployeeForm : <AddEmployeeForm />,
  addJiraForm : <AddJiraForm />,
  projects : <AllProjects />,
  addProjectForm : <AddProjectForm />,
  yourJiras : <JiraView />,
  liveText : <LiveText />,
  individualJira : <IndividualJiraPage />

}


class App extends Component
{

  state = {
    selectedComponent : components.employees
  }


  changeComponent = (comp) =>{
    this.setState(
      {
        selectedComponent : comp
      }
    )
  }

  render(){
    return (
      <Router>
        <Navbar bg="primary" variant="dark" expand="lg">
          <Navbar.Brand href="#home">Akshat Singhal App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" className="mr-auto">
              <NavDropdown title="Employee" id="basic-nav-dropdown">
                <NavDropdown.Item href="/employees">View All</NavDropdown.Item>
                <NavDropdown.Item href="/addnewemployee">Add New</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Jira" id="basic-nav-dropdown">
                <NavDropdown.Item href="/jiras">View All</NavDropdown.Item>
                <NavDropdown.Item href="/addnewjira">Add New</NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Project" id="basic-nav-dropdown">
                <NavDropdown.Item href="/projects" >View All</NavDropdown.Item>
                <NavDropdown.Item href="/addnewproject">Add New</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav className="mr-auto">
              <Nav.Link href="/yourjiras" style={{color : "white"}}>Your Jiras</Nav.Link>
              <NavDropdown  style={{color : "white", backgroundColor : "green", borderRadius : "10px"}} title="Under Construction" id="basic-nav-dropdown">
                <NavDropdown.Item href="/liveedit">Live Edit</NavDropdown.Item>
                <NavDropdown.Item href="/individualjira">Individual Jiras</NavDropdown.Item>
              </NavDropdown>
              
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
        <div className="container" style={{marginTop:"10px"}}>
          <Switch>
              <Route path="/yourjiras">
                {components.yourJiras}
              </Route>
              <Route path="/employees">
                {components.employees}
              </Route>
              <Route path="/jiras">
                {components.jiras}
              </Route>
              <Route path="/projects">
                {components.projects}
              </Route>
              <Route path="/addnewproject">
                {components.addProjectForm}
              </Route>
              <Route path="/addnewjira">
                {components.addJiraForm}
              </Route>
              <Route path="/addnewemployee">
                {components.addEmployeeForm}
              </Route>
              <Route path="/liveedit">
                {components.liveText}
              </Route>
              <Route path="/individualjira" >
                {components.individualJira}
              </Route>
          </Switch>
        </div>
      </Router>
      
    );
  }
}

export default App;
