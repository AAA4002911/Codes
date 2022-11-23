import React, { useState } from "react";
import "../styles/Child.css";

const Selection = ({applyColor}) => {
    const [bg, setbg] = useState({background: ""});
    const addBackground = () => {
        setbg({...bg, background: applyColor.background});
    }
    return (
        <div className="fix-box" style={{backgroundColor: bg.background}} onClick={addBackground}> 
            <h2 className="subheading">Selection</h2>
        </div>
    )
}

export default Selection;