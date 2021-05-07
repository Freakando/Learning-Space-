import React, {useState, useEffect} from "react";


const Clock = () => {
    const [currentDate, setDate] = useState(new Date());
    const [intervalID, setIntervalID] = useState(null)

    useEffect(() => {
        startClock();

        return () => {
            clearInterval(intervalID);
        }


    }, [])

    const startClock = () => {
        const interval = setInterval( () => {
            setDate(new Date());
        }, 1000);

        setIntervalID(interval)
    }

    const start = () => {
        startClock()
    }

    const stop = () => {
        clearInterval(intervalID);
        setIntervalID(null)
    }

    return(
<div>
        <h1>{currentDate.toLocaleTimeString()}</h1>
        <button onClick={stop}>Stop</button>
        <button onClick={start} disabled={intervalID} >start</button>
    </div>
    )
}

export default Clock;
