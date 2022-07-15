import React from 'react';
import {Card,CardBody,CardImg,CardText}
 from 'reactstrap';
 class ReturnFromSearch extends React.Component {
constructor(props){
    super(props);
}

    render(){
        const renderBHKsearch=(bhk)=>{
            if(bhk=="1BHK"){
                return "1";
            }
            if(bhk=="1RK"){
                return "1RK";
            }
            if(bhk=="2BHK"){
                return "2";
            }
            if(bhk=="3BHK"){
                return "3";
            }
            if(bhk=="+3BHK"){
                return "+3";
            }
        }
      
    return(
        
        <Card className="proplistcard">
        <div className="imagewrap">
        <CardImg className="homedummy" src="./assets/homedummy.png" alt="pic"/>
        </div>
        <CardBody>
        <CardText>
        <div className="imagewrapchild">
        <span style={{color:"#404040"},{fontSize:"28px"}}>{this.props.typeofprop}   by {this.props.name}</span>
        <div className="iwchildcontents">Address   :   {this.props.address}</div>
        <div className="iwchildcontents">Property for   :   {this.props.category}</div>
        </div>
            <div className="propinfo">
           <span className="valuefortitle"> {this.props.possession}</span> 
            <div className="verticalseperator"/>
            <span className="valuefortitle">{this.props.postedby}</span> 
            <div className="verticalseperator"/>
            <span className="valuefortitle">{this.props.furnishinfo}</span> 
            <div className="verticalseperator"/>
            <span className="valuefortitle">{this.props.availability} </span>
            <div className="verticalseperator"/>
            <span className="valuefortitle">{this.props.age}</span> 
      
            </div>
            <div className="lastrowwrap">
            <img className="bedroomicon" src="./assets/double-bed.png"/>
            <div className="bhkbadge">
               <div className="badgetext">{renderBHKsearch(this.props.BHK)}</div>
            </div>
            <div className="price"> $ {this.props.budget} </div>
            </div>
        </CardText>
        </CardBody>
    </Card>
    
    )
    }
}

export default ReturnFromSearch;