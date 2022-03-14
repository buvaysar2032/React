import React from "react";

const MenuItem = ({text}) => {
    return (
        <div>
            <li>{text}</li>
            <button onClick={() => alert(text)}>alert</button>
        </div>
    )
}
export default MenuItem;