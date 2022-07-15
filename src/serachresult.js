import React from 'react';
import {Card,CardText} from 'reactstrap'
class SearchResult extends React.Component{
constructor(props){
    super(props);
}
render(){
    if(this.props.budget!=undefined){{console.log("search finished")}
    return(
        <div>
            <Card>
                <CardText>
                    {
                       this.props.budget+ "      "+
                       this.props.BHK+ "      "+
                       this.props.possession+ "      "+
                       this.props.typeofprop+ "      "+
                       this.props.postedby+ "      "+
                       this.props.furnishinfo+ "      "+
                       this.props.availability+ "      "+
                       this.props.age  
                    }
                </CardText>                          
            </Card>
        </div>
    )
    }
    return(
        <div>
          
        </div>
    )

    
}
}
export default SearchResult;