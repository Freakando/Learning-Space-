import React from "react";

const Methods = () => {


    const users = ["adam", "bogdan", "czarek", "darek"];

    //JOIN
    // .join() - zwraca stringa z tablicy. Metoda nie destrukcyjna.

    const usersString = users.join(" ");
    console.log(usersString); //"adam bogdan czarek darek"


    //CONCAT
    //.concat() łączymy tablicę z innym elementem/tablicą i zwracamy nową tablicę.

    const newUser = "edyta";
    const allUsers = users.concat(newUser);
    console.log(allUsers);
    //["adam", "bogdan", "czarek", "darek", "edyta"]


    //SPREAD
    //.spread - alternatywa dla metody concat(). Tworzy nową tablicę.

    const allUsers2 = [...users, "edyta"];
    console.log(allUsers2);
    //["adam", "bogdan", "czarek", "darek", "edyta"]


    //MAP
    //.map() iteruje po tablicy. Tworzy nową tablicę, nadaje zmiany każdemu elementowi i wstawia ten element do nowej tablicy.
    const usersFirstLetterUpperCase = users.map(user => user[0].toUpperCase());
    console.log(usersFirstLetterUpperCase);
    // ["A", "B", "C", "D"];

    //przykład 2 .map() oraz przykład z nawiasami blokowymi i returnem

    const numbers = [2, 3, 4];
    const doubleNumber = numbers.map((number) => {
        return (
            number * 2)
    });
    console.log(doubleNumber);


    //FOREACH
    //.forEach() -pracuje na tablicy, nie zwraca nowej (zwraca udefined). na podstawie tablicy mozemy coz z  tym zrobić.
    // można ustawić 3 parametry: 1wszy element tablicy, 2gi to indeks elementu, a 3ci to dana tablica

    //przykład 1
    const usersAge = [20, 21, 23, 43];
    usersAge.forEach(age => console.log(`W przyszłym roku użytkownik bedzie miał ${age + 1} lat`));


    //przykład 2
    let usersTotalAge = 0;
    usersAge.forEach((age) => usersTotalAge += age);
    console.log(usersTotalAge); // zwraca wartość wszystkich liczb: 107


    //FILTER
    //.filter() - zwraca nową tabliće złożoną z tych elementów, przy których iterator zwrócił true.

    //przykład 1
    const NameWith6Letters = users.filter(user => user.length === 6);  //if true, element tablicy trafia do nowej tablicy.
    console.log(NameWith6Letters)

    //przykład 2
    const NameWithLetterK = users.filter((user) => {
        return(
            user.indexOf("k") > - 1
        )
    })
    console.log(NameWithLetterK);




    //FINDINDEX()
    //.findIndex() - zwraca indeks elementu, który jako pierwszy zwróci true. Jeśli w żdnej iteracji nie będzie spełniony warunek, to zwróci -1.

    const customers = [
        { name: "Adam", age: 67 },
        { name: "Basia", age: 27 },
        { name: "Marta", age: 17 }
    ];

    const isUserUnderAge = customers.findIndex((customer) => customer.age < 18);
    console.log(isUserUnderAge);


    //FIND()
    //.find() - zwraca element, który jako pierwszy zwróci true. Jeśli w żadnej iteracji nie będzie spełniony warunek, to zwróci udefined.

    const firstAdultUser = customers.find((user) => user.age >= 18);
    console.log(firstAdultUser);


    return (
        <div>Open console</div>
    );

};

export default Methods;
