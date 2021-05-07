import React, {useState, useEffect} from "react";

const CustomTitle = () => {
    const [counter, setCounter] = useState(1);

    useEffect(() => {
        document.title = `Kliknięto ${counter} razy`;
    }, [counter]);

    const clickCounter = () => {
        setCounter(prevState => prevState + 1);
    }

    return (
        <>
            <p style={{
                fontSize: `${counter * 1.2}rem`
            }}
            onClick={clickCounter}
            >
                Kliknięto mnie już: {counter} razy</p>
        </>
    );
};


export default CustomTitle;


//
//
// const CustomTitle = () => {
//     const [counter, setCounter] = useState(1);
//     useEffect(() => {
//         document.title = `Kliknięto ${counter} razy`;
//     }, [counter]);
//
//
//     const clickCounter = () => {
//         setCounter(prevCounter => prevCounter + 1);
//     };
//
//
//     return (
//         <>
//             <p
//                 style={{
//                     fontSize: `${counter * 1.2}rem`
//                 }}
//                 onClick={clickCounter}
//             >
//                 Kliknięto mnie już: {counter} razy.</p>
//         </>
//     );
// };
