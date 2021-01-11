import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls from "../containers/Controls";



function Counter (props){

  const { count } = props;


  return (
    <div className="counter" >

      <div style={{
        backgroundColor:
          count === 0 ? "white" :
            count > 0 ? `rgb(${2000 / (count * 0.2)}, 0 , 0)` :
              `rgb(0, ${2000 / (count * -0.2)} , 0)`
      }}>{count}</div>




      <Controls count={count} />

      
    </div>
  );
  
}


Counter.propTypes = {
  count: PropTypes.number
};

export default Counter;
