import React from 'react';
import {Label,Input,Progress,Card,CardImg,CardText,CardBody,CardTitle} from 'reactstrap';
import Addpropform from './addpropformcomp';
import homedb from './homedb';
    class  RenderForm extends React.Component{
        constructor(props){
            super(props);
            this.state={
                name:'',
                address:'',
                contact:'',
                noofbedroom:'',
                availability:'',
                typeofprop:'',
                furnishingstatus:'',
                age:'',
                owner:'',
                price:''
            }
        }
        render(){
            if(this.props.progress==0){

                return(
             
                    <>
                    <h4 style={{marginBottom:32+"px"}}>Enter the following details to register your property</h4>
                    <Label> Name </Label>
                    <Input type="text" id="name" name="name" onChange={(e)=>{this.setState({name:e.target.value})}}>

                    </Input>
                    <Label> Address </Label>
                    <Input type="text" id="address" name="address" onChange={(e)=>{this.setState({address:e.target.value})}}>

                    </Input>
                    <Label> Contact </Label>
                    <Input type="tel" id="contact" name="contact" onChange={(e)=>{this.setState({contact:e.target.value})}}>

                    </Input>
                    
                    <Label> No of Bedrooms </Label>
                    <Input type="text" id="BHK" name="BHK" onChange={(e)=>{this.setState({noofbedroom:e.target.value})}}>

                    </Input>
                    <Label> Availabilty </Label>
                    <Input type="text" id="possession" name="possession" onChange={(e)=>{this.setState({availability:e.target.value})}}>

                    </Input>
                    <Label> Type of property</Label>
                    <Input type="text" id="type" name="type" onChange={(e)=>{this.setState({typeofprop:e.target.value})}}>

                    </Input>
                    <Label> Furnishing Status </Label>
                    <Input type="text" id="furnishingstatus" name="furnishingstatus" onChange={(e)=>{this.setState({furnishingstatus:e.target.value})}}></Input>
                    <Label> Age of property</Label>
                    <Input type="text" id="age" name="age" onChange={(e)=>{this.setState({age:e.target.value})}}></Input>
                   
                    </>
                
                )
                
            }
            else if(this.props.progress==33.33){
          
                return(
                    <>
                    <h4 style={{marginBottom:32+"px"}}>Upload Photos of your property</h4>
                    <Label> Photos </Label>
                    <Input type="file" id="image" name="image"/>
                   
                    </>
                   
                )

            }
            else if(this.props.progress===66.66){
                return(
                   
                    <>
                    <h4 style={{marginBottom:32+"px"}}>Enter Price and Ownership Details</h4>
                    <Label> Ownership </Label>
                    <Input type="text" id="ownership" name="ownership" onChange={(e)=>{this.setState({owner:e.target.value})}}>

                    </Input>
                    <Label> Price </Label>
                    <Input type="text" id="price" name="price" onChange={(e)=>{this.setState({price:e.target.value})}}>

                    </Input>
                    
                    </>
                           
                )
                
            }

            else{
                    const obj={
                        category:"",
                        budget:this.state.price,
                        BHK:this.state.noofbedroom,
                        possession:'',
                        type:this.state.typeofprop,
                        postedby:this.state.owner,
                        furnishinfo:this.state.furnishingstatus,
                        availability:this.state.availability,
                        age:this.state.age,
                    }
                    console.log(homedb.length);
                    var l=homedb.length;
                    homedb.push(obj);
                    console.log(obj);
                    console.log("after psuhing"+homedb.length);
                    if(homedb.length==l+1){
                return(
                    
                    <div className="addproperty" id="add">
                         <Progress id="progress" color="success" value='100' />      
                    <div className="greeting">
                        Successfully Registered.
                    </div>
                    </div>
                  
                )
                    }
                    else{
                        return (
                            <div className="addproperty" id="add">
                            <Progress id="progress" color="danger" value='100'/>      
                            <div className="greeting">
                                Registeration Failed.
                            </div>
                            </div>
                        )
                    }
            }
        }
   
    }

    export default RenderForm;