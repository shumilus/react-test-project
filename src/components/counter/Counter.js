import React from 'react';
import "./Counter.css";

class Counter extends React.PureComponent {
    constructor() {
        super();

        this.state = {
            count: 0,
        };

        this.handleClick = this.handleClick.bind(this)
    }


    handleClick(value) {
        this.setState(prevState => ({
            count: prevState.count + value
        }))
    };

    render() {
        return <div>
            <p>React.PureComponent</p>

            <div className="counter">
                <button className="counter-button" onClick={ () => this.handleClick(-1) }>Dec</button>
                <div className="counter-state">{ this.state.count }</div>
                <button className="counter-button" onClick={ () => this.handleClick(1) }>Inc</button>
            </div>
        </div>
    }
}

export default Counter
