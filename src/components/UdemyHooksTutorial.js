import React, {useState} from 'react';

const AddLetter = () => {
    const [text, setText] = useState("");
    const [value, setValue] = useState("");

    const handleOnClick = () => {
        const letter = 'a';
        setText(text + "a");
    };


    const handleOnChange = event => setValue(event.target.value.toUpperCase());
    const reset = () => setValue('')


    return (
        <>
            <input
                value={value}
                placeholder="wpisz"
                onChange={handleOnChange}
                type="text"

            />
            <button onClick={handleOnClick}>Dodaj "A"</button>
            <h1>{text}</h1>
            <button onClick={reset}>Reset</button>
            <h1 className="title">{value}</h1>
        </>
    );
};

export default AddLetter;
