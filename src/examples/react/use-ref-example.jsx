import React, { useRef, useState } from 'react';

export function UseRefAccessDOM() {
    const inputRef = useRef(null); // Create a ref for the input element

    const handleFocus = () => {
        inputRef.current.focus(); // Access the DOM node and call .focus()
    };

    return (
        <div>
            <h1>useRef Example</h1>
            <input ref={inputRef} type="text" placeholder="Click the button to focus me" />
            <button onClick={handleFocus}>Focus the input</button>
        </div>
    );
}


// useRef can also store "mutable" values and change it WILL NOT cause re-renders
export const UseRefToStoreTimerID = () => {
    const [count, setCount] = useState(0);
    const intervalRef = useRef(null); // store interval ID

    const start = () => {
        if (!intervalRef.current) {
            intervalRef.current = setInterval(() => {
                setCount(c => c + 1);
            }, 1000);
        }
    };

    const stop = () => {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
    };

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
        </div>
    );
}