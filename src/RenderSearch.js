
class RenderSearch extends React.Component{
    constructor(props){
        super();
    }
    render(){
        if(this.props.bhk!=undefined){
        return(
            <div>
                {this.props.budget}<br/>
                {this.props.bhk}<br/>
                {this.props.possession}<br/>
                {this.props.type}<br/>
                {this.props.age}<br/>
                {this.props.postedby}<br/>
                {this.props.fs}<br/>
                {this.props.avail}<br/>
            </div>
        )
        }
        else{
            return(
                <div></div>
            )
        }
    }
}
