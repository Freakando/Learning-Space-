

import React, {useState, useEffect} from "react";

function UserInfo() {
    const [name, setName] = useState("Fryderyk Olszewski");

    useEffect(() => {
        const timeout = setTimeout(() => {
            setName("Maurycy Olszewsk");
        }, 2000);

        return () => {
            clearTimeout(timeout);
        }

    })

    return (
        <>
            <p>{name}</p>
        </>
    );
};

export default UserInfo;
