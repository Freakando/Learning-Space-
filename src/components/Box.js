import React, {useState, useEffect} from "react";

const Box = () => {
    const [color, setColor] = useState("cornflowerblue");

    useEffect(() => {

        const timeout = setTimeout(() => {
            setColor("tomato");
        }, 2000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <>
            <div style={{
                background: color,
                height: 100,
                width: 100
            }}/>
        </>
    )
}

export default Box;
