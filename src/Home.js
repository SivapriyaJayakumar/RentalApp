import React from 'react';
import {Label,CardImg,Input,Card,CardBody,CardText} from 'reactstrap';
import './App.css';
import BHKarr from './bhkarr';
import typeofprop from './Typeofproparr';
import postedby from './postedbyarr';
import availabilty from './availableforarr';
import furnish from './furnisharr';
import availability from './availableforarr';
import ageofprop from './ageofprop';
import homedb from './homedb';
import possession from './possessionarr';
import ReturnFromSearch from './returnsearchcard';

class Home extends React.Component{
  
    constructor(props){
        super(props);
       
        this.chosenBHK=this.chosenBHK.bind(this);
        this.recordPossession=this.recordPossession.bind(this);
        this.chosenAge=this.chosenAge.bind(this);
        this.chosenType=this.chosenType.bind(this);
        this.chosenPostingType=this.chosenPostingType.bind(this);
        this.state={
            isSearch:false,
            rentbuytext:'',
            minBudget:0,
            maxBudget:0,
            Bhk:BHKarr,
            possession:"",
            typeofprop:typeofprop,
            postedby:postedby,
            furnishInfo:furnish,
            availabiltyfor:availability,
            ageofproperty:ageofprop,
        }
       
    }
    recordPossession(text){
        console.log(text);
        this.setState(
            {
                possession:text,

            }
        );
    }
   
    chosenBHK(i,e) {
        
        BHKarr[i].isBadge=!(BHKarr[i].isBadge);
        console.log(BHKarr[i].isBadge);
        if(BHKarr[i].isBadge===true){
            this.setState(
                {
                   Bhk: this.state.Bhk.map((item)=>{
                       if(item.text==BHKarr[i].text){
                           return({
                               text:item.text,
                               isBadge:BHKarr[i].isBadge
                           });
                       }
                       else{
                           return item;
                       }
                   })
                   
                }
            );
            e.target.classList.add('chosenbhk');
            e.target.classList.remove('badgediv');
        }
        else{
            this.setState({
                Bhk:this.state.Bhk.map((item)=>{
                            
                    if(item.text===BHKarr[i].text){
                        return {
                            text:item.text,
                            isBadge:BHKarr[i].isBadge
                        }
                        
                    }
                    else{
                        return  item;  
                    }
                })
            })
            e.target.classList.remove('chosenbhk');
            e.target.classList.add('badgediv');
        }
    }
    chosenType(i,e) {
       
        typeofprop[i].isBadge=!(typeofprop[i].isBadge);
        if(typeofprop[i].isBadge===true){
            this.setState(
                {
                   typeofprop: this.state.typeofprop.map((item)=>{
                       if(item.text==typeofprop[i].text){
                           return({
                               text:item.text,
                               isBadge:typeofprop[i].isBadge,
                           });
                       }
                       else{
                           return item;
                       }
                   })
                   
                }
            )
            e.target.classList.add('chosenbhk');
            e.target.classList.remove('badgediv');
        }
        else{
            this.setState({
                typeofprop:this.state.typeofprop.map((item)=>{
                            
                    if(item.text===typeofprop[i].text){
                        return {
                            text:item.text,
                            isBadge:typeofprop[i].isBadge
                        }
                        
                    }
                    else{
                        return  item;  
                    }
                })
            })
            e.target.classList.remove('chosenbhk');
            e.target.classList.add('badgediv');
        }
    }
    chosenPostingType(i,e) {
        
        postedby[i].isBadge=!(postedby[i].isBadge);
        if(postedby[i].isBadge===true){
            this.setState(
                {
                   postedby: this.state.postedby.map((item)=>{
                       if(item.text==postedby[i].text){
                           return({
                               text:item.text,
                               isBadge:postedby[i].isBadge
                           });
                       }
                       else{
                           return item;
                       }
                   })
                   
                }
            )
            e.target.classList.add('chosenbhk');
            e.target.classList.remove('badgediv');
        }
        else{
            this.setState({
                postedby:this.state.postedby.map((item)=>{
                            
                    if(item.text===postedby[i].text){
                        return {
                            text:item.text,
                            isBadge:postedby[i].isBadge
                        }
                        
                    }
                    else{
                        return  item;  
                    }
                })
            })
            e.target.classList.remove('chosenbhk');
            e.target.classList.add('badgediv');
        }
       console.log(this.state.postedby);
    }
    chosenFurnish(i,e) {
        furnish[i].isBadge=!(furnish[i].isBadge);
        console.log(furnish[i].isBadge);
        if(furnish[i].isBadge===true){
            this.setState(
                {
                   furnishInfo: this.state.furnishInfo.map((item)=>{
                       if(item.text==furnish[i].text){
                           return({
                               text:item.text,
                               isBadge:furnish[i].isBadge
                           });
                       }
                       else{
                           return item;
                       }
                   })
                   
                }
            )
            e.target.classList.add('chosenbhk');
            e.target.classList.remove('badgediv');
        }
        if(furnish[i].isBadge===false){
            this.setState({
            furnishInfo:this.state.furnishInfo.map((item)=>{
                        
                if(item.text===furnish[i].text){
                    return {
                        text:item.text,
                        isBadge:furnish[i].isBadge
                    }
                    
                }
                else{
                    console.log("item in else info "+"badge is"+item.isBadge+"item text is"+item.text);
                    return  item;  
                }
            })
        })
            
            
            e.target.classList.remove('chosenbhk');
            e.target.classList.add('badgediv');
        }
    
    }
  
    chosenAge(i,e) {
        
        ageofprop[i].isBadge=!(ageofprop[i].isBadge);
        if(ageofprop[i].isBadge===true){
            this.setState(
                {
                   ageofproperty: this.state.ageofproperty.map((item)=>{
                       if(item.text==ageofprop[i].text){
                           return({
                               text:item.text,
                               isBadge:ageofprop[i].isBadge
                           });
                       }
                       else{
                           return item;
                       }
                   })
                   
                }
            )
            e.target.classList.add('chosenbhk');
            e.target.classList.remove('badgediv');
        }
        else{
            this.setState({
                ageofproperty:this.state.ageofproperty.map((item)=>{
                            
                    if(item.text===ageofprop[i].text){
                        return {
                            text:item.text,
                            isBadge:ageofprop[i].isBadge
                        }
                        
                    }
                    else{
                        return  item;  
                    }
                })
            })
            e.target.classList.remove('chosenbhk');
            e.target.classList.add('badgediv');
        }
     
       
    }
    chosenAvailabilty(i,e) {
        availability[i].isBadge=!(availability[i].isBadge);
        if(availability[i].isBadge===true){
            this.setState(
                {
                    availabiltyfor: this.state.availabiltyfor.map((item)=>{
                       if(item.text==availability[i].text){
                           return({
                               text:item.text,
                               isBadge:availability[i].isBadge
                           });
                       }
                       else{
                           return item;
                       }
                   })
                   
                }
            )
            e.target.classList.add('chosenbhk');
            e.target.classList.remove('badgediv');
        }
        else{
            this.setState({
                availabiltyfor:this.state.availabiltyfor.map((item)=>{
                            
                    if(item.text===availability[i].text){
                        return {
                            text:item.text,
                            isBadge:availability[i].isBadge
                        }
                        
                    }
                    else{
                        return  item;  
                    }
                })
            })
            e.target.classList.remove('chosenbhk');
            e.target.classList.add('badgediv');
        }
     
    }
    render(){
        var min=0;
        var renderserachcnt=0;
        const RenderFailure=(cnt)=>{
            if(cnt == 0 ){
                return <div>Sorry we are not able to find a perfect home for you right now </div>
            }
        }
        const checkBHK=(obj)=>{
            var flag=false;
            this.state.Bhk.some((value)=>{
                console.log(obj.BHK+""+value.text)
                if((obj.BHK==value.text)&&(value.isBadge==true)){
                    flag= true;
                    
                }
            })
            console.log("flag of checkBHK is "+flag);
            return flag;
            
            
        }
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
        const checkType=(obj)=>{
            var flag=false;
            this.state.typeofprop.some((value)=>{
                if((obj.type==value.text)&&(value.isBadge==true)){
                   flag=true;
                  
                }
           
            })
            console.log("flag of checkType is "+flag);
            return flag;
            
        }
        const checkPostedBy=(obj)=>{
            var flag=false;
            this.state.postedby.some((value)=>{
                if((obj.postedby==value.text)&&(value.isBadge==true)){
                    flag=true;
                   
                }
            })
            console.log("flag of checkPostedBy is "+flag);
            return flag;
           
        }
        const checkFS=(obj)=>{
            var flag=false;
            this.state.furnishInfo.some((value)=>{
                if((obj.furnishinfo==value.text)&&(value.isBadge==true)){
                    flag= true;
                    return flag;
                }
            })
            console.log("flag of checkFS is "+flag);
            return flag;
            
        }
        const checkAvail=(obj)=>{
            var flag=false;
            this.state.availabiltyfor.some((value)=>{
                if((obj.availability==value.text)&&(value.isBadge==true)){
                   flag=true;
                  
                }
           
            })
            console.log("flag of checkAvail is "+flag);
            return flag;
            
        }
        const checkAOF=(obj)=>{
            var flag=false;
            this.state.ageofproperty.some((value)=>{
                if((obj.age==value.text)&&(value.isBadge==true)){
                    flag= true;
                    
                }
            })
            console.log("flag of checkAOF is "+flag);
            return flag;
           
        }
        const search=()=>{
            this.setState(
                {
                    isSearch:!(this.state.isSearch),
                }
            )
            console.log("Inside Search");

      
        }
           const chosenRent=()=>{
               
                this.setState(
                    {
                        rentbuytext:"Rent",
                    }
                )
           }    
           const chosenBuy=()=>{
            this.setState(
                {
                    rentbuytext:"Buy",
                }
            )
       }    
    
        const updateMinMaxValue=()=>{
            min=document.getElementById("BudgetRange").value;
            this.setState({
                minBudget:min,
            }
            )
            document.getElementById("displaymin").innerText="Rs."+min;
            {console.log(min)}
        }
        if(this.state.isSearch===false){
        return(
         <>  
      
            <div className="content">                
                <div className="lefttoolbar">
                    <div className="filterheader">
                    <h5>Filters</h5>
                    </div>
                    <div className="rentorbuy">
                        <Label>Rent/Buy</Label>
                        <div className="inputrent"> 
                            <Input className="rentcheck" type="checkbox" id="rent" name="rent" onClick={chosenRent}></Input><span className="rentlabel">Rent</span><br/>
                            <Input  className="rentcheck" type="checkbox" id="buy" name="buy" onClick={chosenBuy}></Input><span className="rentlabel">Buy</span>
                        </div>
                        <hr></hr>
                    </div>
                    <div className="budget">
                        <Label>Budget</Label>
                        <div className="badges">
                        <div className=" badgediv " id="displaymin">Rs.{min}</div>
                        </div>
                        <Input type="range" name="range" id="BudgetRange" min="2000" max="100000" onChange={updateMinMaxValue}/>
                        <hr></hr>
                    </div>
                    <div className="bhk">
                        <Label>BHK</Label>
                        <div className="badges">
                            {BHKarr.map((bhk,i)=>{
                                return(
                                    <div key={i} className=" badgediv" onClick={e=>{this.chosenBHK(i,e)}}>{bhk.text}</div>
                                );
                            })}
                        </div>
                        <hr></hr>
                    </div>
                    <div className="possession">
                        <Label>Possession</Label>
                        <div className="possessionoptions"> 
                        {possession.map((p,i)=>{
                            return(
                                <>
                                <Input key={i} type="radio" className="radiobut" key={i} id={i} name="option1ofposs" onClick={e=>{this.recordPossession(p.text)}}/> <Label>{p.text}</Label><br/>
                                </>
                            );
                        })}
                    
                        </div>
                        <hr/>
                    </div>
                
                    <div className="typeofproperty">
                        <Label>Type of property</Label>
                        <div className="badges">
                        {typeofprop.map((type,i)=>{
                            return(
                                <div key={i} className="badgediv" onClick={e=>{this.chosenType(i,e)}}>{type.text} </div>
                            );
                        })}
                        </div>
                        <hr></hr>
                    </div>
                    <div className="postedby">
                        <Label>Posted by</Label>
                        <div className="badges">
                        {postedby.map((postingper,i)=>{
                            return(
                                <div key={i} className="badgediv" onClick={e=>{this.chosenPostingType(i,e)}}>{postingper.text} </div>
                            );
                        })}
                        </div>
                        <hr></hr>
                    </div>
                    <div className="FurnishingStatus">
                        <Label>Furnishing status </Label>
                        <div className="badges">
                        {furnish.map((furnish,i)=>{
                            return(
                                <div key={i} className="badgediv" onClick={e=>{this.chosenFurnish(i,e)}}>{furnish.text} </div>
                            );
                        })}
                        </div>
                        <hr></hr>
                    </div>
                    <div className="Availabefor">
                        <Label>Availabe for </Label>
                        <div className="badges">
                        {availabilty.map((furnish,i)=>{
                            return(
                                <div key={i} className="badgediv" onClick={e=>{this.chosenAvailabilty(i,e)}}>{furnish.text} </div>
                            );
                        })}
                        </div>
                        <hr></hr>
                    </div>
                    <div className="Ageofprop">
                        <Label>Age of property </Label>
                        <div className="badges">
                        {ageofprop.map((ageofprop,i)=>{
                            return(
                                <div key={i} className="badgediv" onClick={e=>{this.chosenAge(i,e)}}>{ageofprop.text} </div>
                            );
                        })}
                        </div>
                        <hr></hr>
                    </div>
                    <div className="apply">
                        <button onClick={search}className="applyfilter">Apply Filters</button>
                    </div>
                </div>
               
                <div className="searchrender">
                    <div className="searchchild">
                    {homedb.map((home)=>{
                        return(
                            <Card className="proplistcard">
                                <div className="imagewrap">
                                <CardImg className="homedummy" src="./assets/homedummy.png" alt="pic"/>
                                </div>
                                <CardBody>
                                <CardText>
                                <div className="imagewrapchild">
                                <span  style={{color:"#404040"},{fontSize:"28px"}}>{home.type}   by {home.name}</span>
                                <div className="iwchildcontents">Address   :   {home.address}</div>
                                <div className="iwchildcontents">Property for   :   {home.category}</div>
                                </div>
                                    <div className="propinfo">
                                   <span className="valuefortitle"> {home.possession}</span> 
                                    <div className="verticalseperator"/>
                                    <span className="valuefortitle">{home.postedby}</span> 
                                    <div className="verticalseperator"/>
                                    <span className="valuefortitle">{home.furnishinfo}</span> 
                                    <div className="verticalseperator"/>
                                    <span className="valuefortitle">{home.availability} </span>
                                    <div className="verticalseperator"/>
                                    <span className="valuefortitle">{home.age}</span> 
                              
                                    </div>
                                    <div className="lastrowwrap">
                                    <img className="bedroomicon" src="./assets/double-bed.png"/>
                                    <div className="bhkbadge">
                                        
                                       <div className="badgetext">{renderBHKsearch(home.BHK)}</div>
                                    </div>
                                    <div className="price"> $ {home.budget} </div>
                                    </div>
                                </CardText>
                                </CardBody>
                            </Card>
                        )
                    })}
                </div>
                </div>
            </div>
                
        </>

        )
    }
    else{
        return(
            <>
            <div className="content">
            <div className="lefttoolbar">
                <div className="filterheader">
                <h5>Filters</h5>
                </div>
            
                <div className="budget">
                    <Label>Budget</Label>
                    <div className="badges">
                    <div className=" badgediv " id="displaymin">Rs.{min}</div>
                    </div>
                    <Input type="range" name="range" id="BudgetRange" min="2000" max="100000" onChange={updateMinMaxValue}/>
                    <hr></hr>
                </div>
                <div className="bhk">
                    <Label>BHK</Label>
                    <div className="badges">
                        {BHKarr.map((bhk,i)=>{
                            return(
                                <div key={i} className=" badgediv" onClick={e=>{this.chosenBHK(i,e)}}>{bhk.text}</div>
                            );
                        })}
                    </div>
                    <hr></hr>
                </div>
                <div className="possession">
                    <Label>Possession</Label>
                    <div className="possessionoptions"> 
                    {possession.map((p,i)=>{
                        return(
                            <>
                            <Input key={i} type="radio" className="radiobut" key={i} id={i} name="option1ofposs" onClick={e=>{this.recordPossession(p.text)}}/> <Label>{p.text}</Label><br/>
                            </>
                        );
                    })}
                
                    </div>
                    <hr/>
                </div>
            
                <div className="typeofproperty">
                    <Label>Type of property</Label>
                    <div className="badges">
                    {typeofprop.map((type,i)=>{
                        return(
                            <div key={i} className="badgediv" onClick={e=>{this.chosenType(i,e)}}>{type.text} </div>
                        );
                    })}
                    </div>
                    <hr></hr>
                </div>
                <div className="postedby">
                    <Label>Posted by</Label>
                    <div className="badges">
                    {postedby.map((postingper,i)=>{
                        return(
                            <div key={i} className="badgediv" onClick={e=>{this.chosenPostingType(i,e)}}>{postingper.text} </div>
                        );
                    })}
                    </div>
                    <hr></hr>
                </div>
                <div className="FurnishingStatus">
                    <Label>Furnishing status </Label>
                    <div className="badges">
                    {furnish.map((furnish,i)=>{
                        return(
                            <div key={i} className="badgediv" onClick={e=>{this.chosenFurnish(i,e)}}>{furnish.text} </div>
                        );
                    })}
                    </div>
                    <hr></hr>
                </div>
                <div className="Availabefor">
                    <Label>Availabe for </Label>
                    <div className="badges">
                    {availabilty.map((furnish,i)=>{
                        return(
                            <div key={i} className="badgediv" onClick={e=>{this.chosenAvailabilty(i,e)}}>{furnish.text} </div>
                        );
                    })}
                    </div>
                    <hr></hr>
                </div>
                <div className="Ageofprop">
                    <Label>Age of property </Label>
                    <div className="badges">
                    {ageofprop.map((ageofprop,i)=>{
                        return(
                            <div key={i} className="badgediv" onClick={e=>{this.chosenAge(i,e)}}>{ageofprop.text} </div>
                        );
                    })}
                    </div>
                    <hr></hr>
                </div>
                <div className="apply">
                    <button onClick={search}className="applyfilter">Apply Filters</button>
                </div>
            </div>
 
            {console.log('searching....')}
            <div className="searchrender">
            <div className="searchchild">{
                         
            homedb.map((obj,i)=>{

                if(obj.category=="Rent"){
                    console.log("RENT");
                    console.log(obj)
                    console.log(this.state)
                    if(obj.budget<=this.state.minBudget){
                        console.log("Budget");
                        
                        if(checkBHK(obj)){
                            console.log("BHK TRUE");
                            if(obj.possession==this.state.possession){
                                console.log("Poss");
                                console.log(obj.type)
                                console.log(this.state.typeofprop)
                                if(checkType(obj)){
                                    console.log("type");
                                    if(checkPostedBy(obj)){
                                        console.log("postedby");
                                        if(checkFS(obj)){
                                            console.log("fs");
                                            console.log(obj.availability)
                                            console.log(this.state.availabiltyfor)
                                            if(checkAvail(obj)){
                                                console.log("avail");
                                             
                                                if(checkAOF(obj)){
                                                    console.log("AOF");
                                                    console.log("result"+obj.category );
                                                    renderserachcnt++;
                                                    return(
                                    
                                                        <ReturnFromSearch category={obj.category} name={obj.name} address={obj.address} budget={obj.budget} BHK={obj.BHK} possession={obj.possession} typeofprop={obj.type} postedby={obj.postedby} furnishinfo={obj.furnishinfo} availability={obj.availability} age={obj.age}/>
                                                    
                                                    )
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    
                      
                }
                
                   
                
            
            })}
            {RenderFailure(renderserachcnt)}
            
            
            </div>
            </div>
            
        </div>
            
    </>
        )
    }
        
    }
   


}
export default Home;