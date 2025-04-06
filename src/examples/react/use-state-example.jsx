import React, { useState } from 'react';

export const StateExample = () => {
    const [counter, setCounter] = useState(0); // pattern: [value, setter] = useState(initialVaule)
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



