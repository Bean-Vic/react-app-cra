import React from 'react';
import PropTypes from "prop-types";

export class StateExample extends React.Component { // class component
    constructor(props) {
        super(props);
        console.log("Initial props:", props);
        this.state = {
            counter: props.initialValue ?? 0, //Nullish coalescing operator
            // if 1st value nullish, then output 2nd value
        };
        this.handleClick = this.handleClick.bind(this); // giving handleClick function context of "this" (which is current component)
    }

    // more detail for life cycle methods here: https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
    // Mounting Phase
    componentDidMount() {
        console.log("componentDidMount");
        this.setState(prevState => {
            return {
                counter: prevState.counter - 1,
            }
        })
        console.log("componentDidMount finished, state is: ", this.state);
        // what will happen and why this is happening? (strict)
    }

    // Updating Phase
    componentDidUpdate(prevProps) {
        console.log("componentDidUpdate");
        // you can do some update logic here with prevProps
        console.log(`previous props: ${JSON.stringify(prevProps)}`); // string literal (es6 new feature)
    }

    // unmounting phase
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }

    // helper function for handle click
    handleClick() {
        console.log("handleClick triggered");
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1,
            }
        });
    }

    handleClickNoBind = () => {
        console.log("handleClickNoBind triggered");
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1,
            }
        })
    }

    render() {
        return (
            <div>
                <span>Counter: {this.state.counter}</span>
                <button onClick={this.handleClick}>add</button>
            </div>
        )
    }
}

StateExample.propTypes = {
    initialValue: PropTypes.number,
}