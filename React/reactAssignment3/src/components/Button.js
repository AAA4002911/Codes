import React from "react";
import { useState } from "react";


function btn() {
    const [para, setPara] = useState('');
    function paragenerator() {
        setPara(`Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy`);
    }
    return (
        <div>
        <button id="click" onClick={paragenerator}>Show</button>
        <p id="para">{para}</p>
        </div>
    )
}

export default btn;