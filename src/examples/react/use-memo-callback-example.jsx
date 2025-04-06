import React, { useMemo, useCallback, useState } from "react";

const Child = ({ onClick }) => {
    console.log('Child rendered');
    return <button onClick={onClick}>Click Child</button>;
};

export const Example = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        console.log('Child button clicked');
    }, []); // dependency array with empty value, this function will only calculate once when component mounting

    // useMemo returns the same <Child /> element unless handleClick changes
    const memoizedChild = useMemo(() => {
        return <Child onClick={handleClick} />;
    }, [handleClick]);

    return (
        <div>
            <p>Parent count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button> {/* when click on button, React will recalculate same function */}

            <button onClick={handleClick}>IncrementWithCallback</button> {/* reuse same callback to save resource */}

            {memoizedChild}
        </div>
    );
}