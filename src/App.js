import React from 'react';
import './App.css';
import {Switch,Route,Redirect} from 'react-router-dom';
import Home from './Home';
import Add from './AddProperty';
import Main from './Maincomp';
import Addpropform from './addpropformcomp';
import homedb from './homedb';
  class App extends React.Component{
    
    render(){
      const HomePage=()=>{
        return(
          <Home />
        )
      }
      const AddPropPage=()=>{
        return(
          <Add/>
        )
      }
  return(
        <div>
      <Main/>
      <Switch>
      <Route  path="/RentalApp" component={HomePage}/>
      <Route  path="/add" component={AddPropPage}/>
      <Route  path="/addprop" component={()=>{return(<Addpropform/>)}}/>
      
      <Redirect to="/home" component={HomePage}/>
     </Switch>
     </div>
      
       
      )
    }

  }

export default App;

