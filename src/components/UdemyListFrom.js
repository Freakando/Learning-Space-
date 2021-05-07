import React, {useState} from "react";

const data = {
    users: [
        {
            id: 1,
            age: 29,
            name: "Arek",
            sex: "male",
        },
        {
            id: 2,
            age: 29,
            name: "Marta",
            sex: "female",
        },
        {
            id: 3,
            age: 19,
            name: "Stasia",
            sex: "female",
        },
        {
            id: 4,
            age: 43,
            name: "Karol",
            sex: "male",
        },
    ]
};

const Items = ({user}) => (
    <div className="userInfo">
        <h1>{user.name}</h1>
        <p>Informacje o użytkowniku</p>
        <p>Wiek użytkownika: <strong>{user.age}</strong></p>
        <p>Płeć użytkownika: <strong>{user.sex}</strong></p>
    </div>
)


const UdemyListForm = () => {
    const [state, setState] = useState("all");

    const handleUsersFilter = (option) => {
        setState(option);
    };

    const usersList = () => {
        let users = data.users
        switch (state) {
            case "all":
                return users.map(user => <Items user={user} key={user.id}/>)
            case "female":
                users = users.filter(user => user.sex === "female");
                return users.map(user => <Items user={user} key={user.id}/>)
            case "male":
                users = users.filter(user => user.sex === "male");
                return users.map(user => <Items user={user} key={user.id}/>)
            default:
                return "brak danych"
        }
    };

    return (
        <>
            <button onClick={handleUsersFilter.bind(this, "all")}>All</button>
            <button onClick={handleUsersFilter.bind(this, "female")}>Female</button>
            <button onClick={handleUsersFilter.bind(this, "male")}>Male</button>
            {usersList()}
        </>
    )
};


//     const [select, setSelect] = useState("all");
//
//     const handleUsersFilter = (option) => {
//         setSelect(option)
//     };
//
//     const userList = () => {
//         let users = data.users;
//         users = users.map(user => <Item user={user} key={user.id}/>)
//
//         return users
//
//     }
//
//     return (
//         <div>
//             <button onClick={handleUsersFilter("all")}>All</button>
//             <button>Female</button>
//             <button>Male</button>
//             {userList()}
//
//             {/*<ul>*/}
//             {/*    {users.map((user) => (<Item key={user.id} content={user}/>))}*/}
//             {/*</ul>*/}
//         </div>
//     )
// };

export default UdemyListForm;
