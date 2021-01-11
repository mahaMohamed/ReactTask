import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import store from "../store";
import "mousetrap";


function Controls(props) {

  const { incrementLabel, decrementLabel, resetLabel, timerLabel, increment, decrement, reset, slide, count, startTimer } = props;

  let interval;

  var Mousetrap = require('mousetrap');




  Mousetrap.bind('-', ()=> {
    decrement()
  })


  Mousetrap.bind('+', () => {
    increment
      ()
  });



  return (

    <div className="controls">
      <button onClick={() => { increment(); }}>
        <span className="control">{incrementLabel}</span>
      </button>
      <button onClick={() => { decrement(); }}>
        <span className="control">{decrementLabel}</span>
      </button>
      <button onClick={() => { reset(); }}  >
        <span className="control">{resetLabel}</span>
      </button>

      <button onClick={(event) => {
        let times = 0;


        interval = setInterval(
          () => {
            times++;
            if (times === 10)
              clearInterval(interval)
            increment();

          }, 1000)

      }} >
        <span className="control"> Auto Counter  </span>
      </button>


      <div >
        <input type="range" min="-100" max="100" step="1" value={count} onInput={event => { { slide(event.target.value) } }} />
      </div>


    </div>

  );

}


Controls.propTypes = {
  increment: PropTypes.func,
  decrement: PropTypes.func,
  slide: PropTypes.func,
  reset: PropTypes.func,
  resetLabel: PropTypes.string,
  incrementLabel: PropTypes.string,
  decrementLabel: PropTypes.string,
  timerLabel: PropTypes.string
};

Controls.defaultProps = {
  incrementLabel: "+",
  decrementLabel: "-",
  resetLabel: "o",
  timerLable: "Timer"
};

export default Controls;