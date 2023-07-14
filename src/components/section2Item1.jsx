import React from "react";
const Section2Item1 = () => {
  return (
    <div id="div1">
      <h5>Chapter Wise Status</h5>
      <div id="frameImage"><img src="/images/Frame 37.jpg" alt="" /></div>
      <ul id="div1_2">
        <li><div className="div1_2_1"></div><p>Finished Training</p></li>
        <li><div className="div1_2_1" style={{ backgroundColor: "rgba(51, 51, 51, 0.30);" }}></div><p>Chapter A</p></li>
        <li><div className="div1_2_1" style={{ backgroundColor: "rgba(132, 0, 213, 1)" }}></div><p>Chapter B</p></li>
        <li><div className="div1_2_1" style={{ backgroundColor: "rgba(66, 95, 87, 1)" }}></div><p>Chapter C</p></li>
        <li><div className="div1_2_1" style={{ backgroundColor: "rgba(237, 28, 36, 1)" }}></div><p>Haven't Started Yet</p></li>
      </ul>
    </div>
  )
}
export default Section2Item1;