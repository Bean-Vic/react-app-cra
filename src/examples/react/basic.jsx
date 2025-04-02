//Virtual DOM, JSX, one-way data binding, Life Cycle
import React from 'react';
import PropTypes from 'prop-types';

export class Basic01 extends React.Component { // class component
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
    }

    // more details can found here
    // Mounting Phase
    componentDidMount() {
        console.log("componentDidMount");
    }

    // Updating Phase
    componentDidUpdate(prevProps) {
        console.log("componentDidUpdate");
        // you can do some update logic here with prevProps
        console.log(`previous props: ${prevProps}`); // string literal (es6 new feature)
    }

    // unmounting phase
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    render() {
        return (
            <div>
                {this.props}
            </div>
        )
    }
}

export const Basic02 = (props) => { // functional component (arrow function)
    console.log(props);
    props.abc = 1;
    return (
        <div>
            {props}
        </div>
    )
}

Basic02.propTypes = {
    abc: PropTypes.number.isRequired,
}