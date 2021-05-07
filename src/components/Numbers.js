import React, {useState} from "react";

const Numbers = () => {
    const numArr = [54, 76, 24, 63, 4, 54, 82, 36, 13, 80, 10, 69, 4, 23, 40];
    const [numbers, setNumbers] = useState(numArr);

    const evenNumbers = () => {
        setNumbers(prevState => prevState.filter((el) => el % 2 === 0));
    }
    const showAll = () => {
        setNumbers(prevState => prevState = numArr);
    }

    const unEven = () => {
        setNumbers(prevState => prevState.filter((el) => el % 2 !== 0));
    }


    return (
        <>
            <ul>
                {numbers.map((el, index) => (<li key={index}>{el}</li>))}

            </ul>

            <button onClick={evenNumbers}>Show even numbers</button>
            <button onClick={showAll}>Pokaż wszystkie</button>
            <button onClick={unEven}>Pokąż nieparzyste</button>
        </>
    );
};


// const Numbers = () => {
//
//     const [numbers, setNumbers] = useState([54,76,24,63,4,54,82,36,13,80,10,69,4,23,40]);
//
//     const displayEvent = () => {
//         setNumbers((prevNumbers) => prevNumbers.filter((el) => el % 2 === 0));
//     }
//
//     return(
//
//         <>
//             <ul>
//                 {numbers.map((el, index) => (<li key={index}>{el}</li>))}
//             </ul>
//
//             <button onClick={displayEvent}>Pokarz liczby parzyste</button>
//         </>
//
//     );
// };


export default Numbers;
