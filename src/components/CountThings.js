import React, { useState } from "react";

const CountThings = () => {
    const [account, setAccount] = useState(1000);
    const [age, setAge] = useState(18);

    const addMoney = () => {
        setAccount(prevState => prevState + 1000);
    }

    const addAge = () => {
        setAge(prevState => prevState + 1);
    }


    return (
        <>
            <div>💰 so much money: ${account}</div>
            <button onClick={addMoney}>Get rich!</button>
            <div>Age: {age}</div>
            <button onClick={addAge}>Get older :(</button>
        </>
    )
}


export default CountThings;
