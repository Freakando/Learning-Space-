import React, { useState } from "react";

const UpperLower = () => {
    const [text, setText] = useState("what is up my boi!");

    const CapText = () => {
        setText(prevState => prevState.toUpperCase())
    }

    const LowerText = () => {
        setText(prevState => prevState.toLowerCase())
    }

    return (
        <>
            <h2>{text}</h2>
            <button onClick={CapText}>Uppercase</button>
            <button onClick={LowerText}>Lowercase</button>
        </>
    )
}
 export default UpperLower;
