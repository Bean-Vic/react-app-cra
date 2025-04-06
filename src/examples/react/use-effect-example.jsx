import React, {useEffect, useState} from "react";

export const UseEffectExample = () => {
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => {
        setCounter(counter + 1);
    }
    const handleDecrement = () => {
        setCounter(counter - 1);
    }

    useEffect(() => {
        console.log('This console.log should be called for "1" time');
    }, []); // this is dependency array, if variable in dependency array changed, useEffect will run

    useEffect(() => {
        console.log('logging counter everytime when it changed: ', counter);
    }); // run the callback line 17 everytime current component re-render

    useEffect(() => {
        console.log('logging counter as dependency array: ', counter);
    }, [counter]); // only retrigger the callback when counter change


    return (
        <span>
            <button onClick={handleDecrement}>-</button>
            {' '}
            {counter}
            {' '}
            <button onClick={handleIncrement}>+</button>
        </span>
    )
}