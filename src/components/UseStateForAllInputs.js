import React, {useState} from 'react';


function UseStateForAllInputs() {

    const [form, setForm] = useState({name: "" , age: 25});

    const handleChange = (e) => {
        const [name, value] = e.target;
        setForm(prevState => {
            return {
                ...prevState,
            [name]: value
            }
        });
    };
    return (
        <form>
            <input type="text" name="name" value={form.name} onChange={handleChange}/>
            <input type="number" name="age" value={form.age} onChange={handleChange}/>
        </form>
    )

};

export default UseStateForAllInputs;
