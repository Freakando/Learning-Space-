import React, { useState } from "react";


const ColorfulBoxes = () => {
    const [colors, setColors] = useState([]);

    const addBox = () => {
        const randomColor = "#" + Math.floor(Math.random() *16777215).toString(16);
        setColors(prevState => [...prevState, randomColor]);
    };
    return (
        <>
            <button onClick={addBox}>New Box!</button>
            {colors.map((color, index) => {
                return (
                <div
                    key={index}
                    style={{
                        width: 200,
                        height: 200,
                        background: color
                    }}
                />
            )})}
        </>
    );
};

//
// const ColorfulBoxes = () => {
//     const [colors, setColors] = useState([]);
//     const addBox = () => {
//         const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
//         setColors((prevColors) => [...prevColors, randomColor]);
//     };
//     return (
//         <>
//             <button onClick={addBox}>Dodaj Boxa!</button>
//             {colors.map((color, index) => (
//                 <div
//                     key={index}
//                     style={{
//                         width: 200,
//                         height: 200,
//                         backgroundColor: color,
//                     }}
//                 />
//             ))}
//         </>
//     );
// };
export default ColorfulBoxes;
