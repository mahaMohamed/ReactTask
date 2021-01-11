import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import store from "../store";


function Controls2(props) {

  const { incrementLabel, decrementLabel, resetLabel, timerLabel, increment, decrement, reset, slide, count, startTimer } = props;

  let interval;

  

console.log("in counter2")
  return (

    <div className="controls">
      <button>
        <span className="control">{incrementLabel}</span>
      </button>
      <button >
        <span className="control">{decrementLabel}</span>
      </button>
      <button  >
        <span className="control">{resetLabel}</span>
      </button>

      <button>
        <span className="control"> Auto Counter </span>
      </button>


      <div >
        <input type="range" min="-100" max="100" step="1" value={count} onInput={event => { { slide(event.target.value) } }} />
      </div>


    </div>
  );

}


Controls2.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  slide: PropTypes.func,
  reset: PropTypes.func,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string,
  timerLabel: PropTypes.string
};

Controls2.defaultProps = {
  incrementLabel: "+",
  decrementLabel: "-",
  resetLabel: "o",
  timerLable: "Timer"
};

export default Controls2;