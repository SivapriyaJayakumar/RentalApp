import React from 'react';
import {Label,Input,Progress,Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';
import homedb from './homedb';
import RenderForm from './renderform1';
class Addpropform extends React.Component{
    constructor(props){
        super(props);
        this.state={
            progress:0,
            progresscolor:'success',
        }
    }
   
         
       
    

     
    render() {
        const callStepTwo=()=>{
             if(this.state.progress<99.99){
                this.setState(
                    {
                    progress:this.state.progress+=33.33,
                    }
                )
             }
             else{
                this.setState(
                    {
                    progress:this.state.progress=0,
                    }
                )
             }
            
       
        }
       
        if(this.state.progress<99.99){
            return(
               
            <div className="addproperty" id="add">      
             <Progress id="progress" color="success" value={this.state.progress} />      
                <div className="addpropform">                 
                  
                    <RenderForm progress={this.state.progress}/>
                    <div style={{textAlign:'right'}}>
                        <button  style={{marginTop:30+'px'}} onClick={callStepTwo}className="applyfilter">Next</button>
                    </div>
                </div>                 
             </div> 
        )
        }
        else{
            return(
                <RenderForm progress={this.state.progress}/>
            )
        }
    }
  
    
    
    
    }

export default Addpropform;