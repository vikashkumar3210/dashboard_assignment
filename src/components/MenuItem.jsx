import React from "react";
const MenuItem = (props) => {
    return (
        <div className="menuItems">
            {props.element}
            <span>
                {props.name}
            </span>
        </div>
    )
}
export default MenuItem;