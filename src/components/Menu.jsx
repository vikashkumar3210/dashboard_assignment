import React from "react";
import MenuItem from "./MenuItem.jsx";
import menuData from '../dataFile/dataFile1.js';
const addItem = (e) => {
    return (
        <MenuItem element={e.element} name={e.name} />
    )
}
const Menu = () => {
    return (
        <>
            <aside>
                <div id="mainTitle">
                    <img src="/images/image 1.jpg" alt="" />
                </div>
                <div id="dashboardItem">
                    <svg xmlns="http://www.w3.org/2000/svg" width="29" height="29" viewBox="0 0 29 29" fill="none">
                        <path opacity="0.4" d="M19.5258 3.14377H23.465C25.0964 3.14377 26.4183 4.47685 26.4183 6.12203V10.0945C26.4183 11.7397 25.0964 13.0728 23.465 13.0728H19.5258C17.8944 13.0728 16.5724 11.7397 16.5724 10.0945V6.12203C16.5724 4.47685 17.8944 3.14377 19.5258 3.14377Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.10365 3.14377H10.0429C11.6743 3.14377 12.9962 4.47685 12.9962 6.12203V10.0945C12.9962 11.7397 11.6743 13.0728 10.0429 13.0728H6.10365C4.47225 13.0728 3.15033 11.7397 3.15033 10.0945V6.12203C3.15033 4.47685 4.47225 3.14377 6.10365 3.14377ZM6.10365 16.4827H10.0429C11.6743 16.4827 12.9962 17.8158 12.9962 19.461V23.4335C12.9962 25.0776 11.6743 26.4118 10.0429 26.4118H6.10365C4.47225 26.4118 3.15033 25.0776 3.15033 23.4335V19.461C3.15033 17.8158 4.47225 16.4827 6.10365 16.4827ZM23.465 16.4827H19.5258C17.8944 16.4827 16.5724 17.8158 16.5724 19.461V23.4335C16.5724 25.0776 17.8944 26.4118 19.5258 26.4118H23.465C25.0964 26.4118 26.4183 25.0776 26.4183 23.4335V19.461C26.4183 17.8158 25.0964 16.4827 23.465 16.4827Z" fill="white" />
                    </svg>
                    <span>Dashboard</span>
                </div>
                <div className="menuItem">
                    {menuData.map(addItem)}
                </div>
            </aside>
        </>
    )
}
export default Menu;