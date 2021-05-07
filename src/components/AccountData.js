import React, {useState, useEffect} from 'react';
import FakeAPI from './fakeAPI';


const AccountData = () => {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        FakeAPI.then( data=> {
            setResponse(data)
        })
    });
    if (response === null) return null;

    return(
        <table>
            {response.map((e) => (
                <tr key={e.day}>
                    <td>{e.day}</td>
                    <td>{e.balance}</td>
                    <td>{e.change}</td>
                </tr>
            ))}
        </table>
    );
};
































// const AccountData = () => {
//     const [response, setResponse] = useState(null);
//     useEffect(() => {
//         FakeAPI.then((data) => {
//             setResponse(data);
//         });
//     }, []);
//     if (response === null) return null;
//     return (
//         <table>
//             {response.map((el) => (
//                 <tr key={el.day}>
//                     <td>{el.day}</td>
//                     <td>{el.balance}</td>
//                     <td>{el.change}</td>
//                 </tr>
//             ))}
//         </table>
//     );
// };
export default AccountData;
