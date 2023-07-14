import React from "react";
const Section1Item = (props) => {
    return (
        <div>
            <h6>{props.text}</h6>
            <div className="main-wrapper">
                <div className="item-wrapper">
                    <h2>{props.price1}</h2>
                    <div className="item-wrapper1_1">
                        <div className="item-wrapper1_1_2" style={{ backgroundColor: props.firstcolor }}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M5.00001 10.1667C4.87335 10.1667 4.74668 10.12 4.64668 10.02C4.45335 9.82667 4.45335 9.50667 4.64668 9.31334L6.78001 7.18001C6.88668 7.07334 7.02668 7.02001 7.18001 7.03334C7.32668 7.04667 7.46001 7.12667 7.54668 7.25334L8.27334 8.34667L10.64 5.98001C10.8333 5.78667 11.1533 5.78667 11.3467 5.98001C11.54 6.17334 11.54 6.49334 11.3467 6.68667L8.54668 9.48667C8.44001 9.59334 8.30001 9.64667 8.14668 9.63334C8.00001 9.62001 7.86668 9.54001 7.78001 9.41334L7.05334 8.32001L5.35335 10.02C5.25335 10.12 5.12668 10.1667 5.00001 10.1667Z" fill={props.iconColor} />
                                <path d="M11 8.16666C10.7267 8.16666 10.5 7.94 10.5 7.66666V6.83333H9.66666C9.39332 6.83333 9.16666 6.60666 9.16666 6.33333C9.16666 6.05999 9.39332 5.83333 9.66666 5.83333H11C11.2733 5.83333 11.5 6.05999 11.5 6.33333V7.66666C11.5 7.94 11.2733 8.16666 11 8.16666Z" fill={props.iconColor} />
                                <path d="M10 15.1667H6.00001C2.38001 15.1667 0.833344 13.62 0.833344 10V6.00001C0.833344 2.38001 2.38001 0.833344 6.00001 0.833344H10C13.62 0.833344 15.1667 2.38001 15.1667 6.00001V10C15.1667 13.62 13.62 15.1667 10 15.1667ZM6.00001 1.83334C2.92668 1.83334 1.83334 2.92668 1.83334 6.00001V10C1.83334 13.0733 2.92668 14.1667 6.00001 14.1667H10C13.0733 14.1667 14.1667 13.0733 14.1667 10V6.00001C14.1667 2.92668 13.0733 1.83334 10 1.83334H6.00001Z" fill={props.iconColor} />
                            </svg>
                            <span style={{ color: props.secondcolor }}>20%</span>
                        </div>
                        <span>{props.price2}</span>
                    </div>
                </div>
                <div className="chartContainer">
                    <div className="chartItem" style={{ background: props.bg1, clipPath: props.bg2 }}>
                    </div>
                    <ul>
                        <li>M</li>
                        <li>T</li>
                        <li>W</li>
                        <li>T</li>
                        <li>F</li>
                        <li>S</li>
                        <li>S</li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
export default Section1Item;