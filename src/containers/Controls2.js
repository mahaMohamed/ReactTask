import React, { Component } from "react";
import Controls2 from "../components/Controls2";
import { connect } from "react-redux";

import { incrementNum, decrementNum, reset, slideNum, startTimer} from "../actions/counterActions";

export class Controller extends Component {

  render() {
    return (
      <Controls2 {...this.props} />
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch(()=>{

      });
    },
    decrement: () => {
      dispatch(() => {

      });
    },

    reset: () => {
      dispatch(() => {

      })

    },

    slide: (payload) => {
      dispatch(() => {

      })
    },

    startTimer: () =>{
      dispatch(() => {

      })
    }


  };
};

export default connect(null, mapDispatchToProps)(Controls2);
