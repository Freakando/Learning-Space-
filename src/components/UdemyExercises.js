import React, {useState} from "react";

const ValidationMessage = (props) => <p>{props.txt}</p>


function UdemyExercises() {
    const [isConfirmed, setIsConfirmed] = useState(false);
    const [isFormSubmited, setIsFormSubmited] = useState(false);

    const handleCheckBox = () => {
        return (
            setIsConfirmed(prevState => !prevState),
                setIsFormSubmited(prevState => false)
        )
    };

    const displayMessage = () => {
        if (isFormSubmited) {
            if (isConfirmed) {
                return <ValidationMessage txt="Możesz obejrzeć film"/>
            } else {
                return <ValidationMessage txt="Nie możesz obejrzeć filmu"/>
            }
        } else {
            return null
        }
    };
    const handleFormSubmit = (e) => {
        e.preventDefault()
        if (!isFormSubmited) {
            return setIsFormSubmited(prevState => true)
        }
    }



    return (
        <>
            <form onSubmit={handleFormSubmit}>
                <h1>Kup bilet na horror roku</h1>
                <input type="checkbox" id="age" onChange={handleCheckBox} checked={isConfirmed}/>
                <label htmlFor="age">Mam co najmniej 16 lat</label>
                {displayMessage()}

                <button type="submit">Kup bilet</button>
            </form>


        </>
    )

};

export default UdemyExercises;
