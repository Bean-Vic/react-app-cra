import React, {useEffect, useState} from 'react';

export const StateExample = () => {
    const [counter, setCounter] = useState(0);
    const handleIncrement = () => {
        setCounter(counter + 1);
    }
    const handleDecrement = () => {
        setCounter(counter - 1);
    }


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
    }, []);

    useEffect(() => {
        console.log('logging counter everytime when it changed: ', counter);
    });

    useEffect(() => {
        console.log('logging counter as dependency array: ', counter);
    }, [counter]);


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

