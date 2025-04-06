import React, { useState, useEffect } from 'react';

export function Timer() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('⏱️ Starting interval');

        const intervalId = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);

        // 🔁 Cleanup function runs when component unmounts or before effect re-runs
        return () => {
            console.log('🧹 Clearing interval');
            clearInterval(intervalId);
        };
    }, []); // 🔁 Run only once when component mounts

    return <h1>Timer: {count}</h1>;
}


export function TimerWrapper() {
    const [showTimer, setShowTimer] = useState(true);

    return (
        <div>
            <button onClick={() => setShowTimer(prev => !prev)}>
                {showTimer ? 'Hide Timer (Unmount)' : 'Show Timer (Mount)'}
            </button>

            <hr />

            {showTimer && <Timer />}
        </div>
    );
}