import React from "react";
const Section3Item1_1 = (props) => {
    return (
        <div className="smallHeading">
            <div>
                <div className="headingCircle"></div>
                <div className="verticalLine"></div>
            </div>

            <div className="description">
                <h6>{props.text}</h6>
                <p>{props.detail}</p>
            </div>
        </div>
    )
}
export default Section3Item1_1;