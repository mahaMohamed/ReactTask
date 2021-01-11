import React, { Component } from "react";
import PropTypes from "prop-types";
import Controls2 from "../containers/Controls2";



function Counter2(props) {

    const { count } = props;


    return (
        <div className="counter" >

            <div style={{
                backgroundColor:
                    count === 0 ? "white" :
                        count < 0 ? `rgb(${2000 / (count * -0.2)}, 0 , 0)` :
                            `rgb(0, ${2000 / (count * 0.2)} , 0)`
            }}>{count * -1}</div>




            <Controls2 count={count} />


        </div>
    );

}


Counter2.propTypes = {
    count: PropTypes.number
};

export default Counter2;
