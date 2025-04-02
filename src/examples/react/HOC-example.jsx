import React from 'react';

export const Hello = (props) => { // simple component
    return <p>{props.message}</p>;
};

export const withGreeting = (WrappedComponent) => { // HOC
    return function () {
        return <WrappedComponent message="Hello from HOC!" />;
    };
};

export const EnhancedComponent = withGreeting(Hello);

export default EnhancedComponent;
