import React from "react";
import Section3Item1_1 from "./Section3Item1_1.jsx";
const dataFile3 = [
    { text: "course a", detail: "23 workers took this course this week" },
    { text: "course b", detail: "253 workers took this course this week" },
    { text: "course c", detail: "253 workers took this course this week" }
]
const Section3Item1 = () => {
    return (
        <div id="section3Item1">
            <h5>monthly training activity</h5>
            <div className="heading2"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none">
                <path d="M7.96944 3.73266L7.96944 13.9275" stroke="#018E42" stroke-width="1.63117" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M3.87494 7.84442L7.96917 3.73252L12.0641 7.84442" stroke="#018E42" stroke-width="1.63117" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
                <p>16% more enrollees this month</p></div>
            {dataFile3.map((e) => {
                return (
                    <Section3Item1_1 text={e.text} detail={e.detail} />
                )
            })}
            <div className="smallHeading">
                <div>
                    <div className="headingCircle"></div>
                </div>
                <div className="description">
                    <h6>course d</h6>
                    <p>253 workers took this course this week</p>
                </div>
            </div>
        </div>
    )
}
export default Section3Item1;