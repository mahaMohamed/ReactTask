import React, { Component } from "react";
import Controls from "../components/Counter";
import { connect } from "react-redux";


class GenericCounter extends Component{

    constructor(props){
        super(props)
        
    }



    render(){
        return(
            <div> {this.props.children} </div>
        )
    }

}

export const mapStateToProps = store => {
    return {
      count: store.count
    };
  };
  
  export default connect(mapStateToProps, null)(GenericCounter);