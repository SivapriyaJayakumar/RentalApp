import React from 'react';
import './App.css';
import {Card,CardText,CardBody,CardTitle} from 'reactstrap';
class Add extends React.Component{
    constructor(props){
    super(props);
   
    }
    render(){
    return(
        <>
        <div className="postpropertyinfo">
            <div className="postheader">Post Your Property in Simple Steps</div>
            <div className="stepcards">
                <Card className="propstepcards">
              
                    <img className="homepic" src="./assets/homepic.png" alt="homepic"/>
                    <CardBody>
                        <CardText>
                            <CardTitle><b>1. Add details of your property</b></CardTitle>
                            <p>Begin by telling us the few basic details about your property like your property type, location, No.of rooms,etc..</p>
                        </CardText>
                    </CardBody>
                </Card>
                <Card className="propstepcards">
              
              <img className="homepic" src="./assets/imagepic.png" alt="imagepic"/>
              <CardBody>
                  <CardText>
                      <CardTitle><b>2. Upload Photos of your Property</b></CardTitle>
                      <p>Upload Photos of your property either via desktop device or mobile phone</p>
                  </CardText>
              </CardBody>
          </Card>
          <Card className="propstepcards">
              
              <img className="homepic" src="./assets/price.png" alt="pricepic"/>
              <CardBody>
                  <CardText>
                      <CardTitle><b>3. Add Pricing and Ownership</b></CardTitle>
                      <p>Update your property's ownership details and ypur expected price and your property is ready for posting.</p>
                  </CardText>
              </CardBody>
          </Card>
            </div>
            <div className="beginpostbutton">
               <a href="/addprop" ><button className=" beginpostbut applyfilter">Begin to Post Your Property</button></a> 
            </div>
        </div>
       
        </>
    )
        }
    }
    
export default Add;