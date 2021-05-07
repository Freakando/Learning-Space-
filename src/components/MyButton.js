import React, {useState} from "react";

const MyButton = () => {
    const [isYes, setYes] = useState(false);

    const change = () => {
        setYes((prev) => !prev);
    }


    return <button onClick={change}>{isYes ? "yes" : "no" }</button>
};

export default MyButton;

