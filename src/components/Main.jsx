import React from "react";
import Section1Item from './Section1Item';
import section1Data from '../dataFile/dataFile2.js';
import Section2Item1 from './section2Item1.jsx';
import Section2Item2 from './Section2Item2.jsx';
import Section3Item1 from './Section3Item1.jsx';
import Section3Item2 from './Section3Item2.jsx';
import Section3Item3 from './Section3Item3.jsx';
const section1ItemData = (e) => {
    return (
        <Section1Item
            text={e.text}
            firstcolor={e.bgColor}
            bg1={e.bg1}
            bg2={e.bg2}
            iconColor={e.iconColor}
            price1={e.price1}
            price2={e.price2}
        />
    )
}
const Main = () => {
    return (
        <>
            <main>
                <div className="section1">
                    {section1Data.map(section1ItemData)}
                </div>
                <div className="section2">
                    <Section2Item1 />
                    <Section2Item2 />
                </div>
                <div className="section3">
                    <Section3Item1 />
                    <Section3Item2 />
                    <Section3Item3 />
                </div>
            </main>
        </>
    )
}
export default Main;