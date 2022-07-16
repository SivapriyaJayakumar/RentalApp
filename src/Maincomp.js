import React from 'react';

import {NavItem,Navbar,NavbarBrand,NavbarToggler,Collapse,Nav,UncontrolledDropdown,DropdownItem,DropdownMenu,NavLink,DropdownToggle} from 'reactstrap';
class Main extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
          callHome:false,
          isOpen:false,
          toggleText:"Select",
        }
    } 
    render(){
   
      const setIsOpen=()=>{
        this.setState(
          {
            isOpen:!(this.state.isOpen),
          }
        )
      }
      const toggle=()=>{
        setIsOpen();
      }
     
    
    
    return (
      <>  
       
      <div className="navbarpar">
      <Navbar  className="navig"  expand="md">
      <NavbarBrand className="navig" href="/home">Housify</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
              <NavItem>
                  <NavLink href="/add"> Add </NavLink>
              </NavItem>
          </Nav>
          </Collapse>
          </Navbar>
      </div>
      </>
    )
    }
}
export default Main;
      

