import React, { Component } from "react";
import Controls2 from "../components/Counter2";
import { connect } from "react-redux";


export class Controller extends Component {

  render() {
    return (
      <Controls2 {...this.props}/>
    );
  }
};

export const mapStateToProps = store => {
  return {
    count: store.count
  };
};

export default connect(mapStateToProps, null)(Controls2);
