import React from "react";
const Section3Item2 = () => {
    return (
        <div className="section3Item2">
            <h5>quiz passing %</h5>
            <div id="circleWrapper">
                <div id="bigCircle">
                    <div>
                    </div>
                </div>
                <div id="circleDetail">
                    <div className="circleDetail_1"><div className="circleMaker" style={{ backgroundColor: "green" }}></div><div><h6>passed</h6><p>1423 Workers</p></div></div>
                    <div className="circleDetail_1"><div className="circleMaker" style={{ backgroundColor: "red" }}></div><div><h6>failed</h6><p>134 Workers</p></div></div>
                </div>
            </div>

        </div>
    )
}
export default Section3Item2;