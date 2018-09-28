import React, { Component } from 'react';
import Counter from './counter';


class Counters extends Component {
    render() {
        const { onReset, counters, onDelete, onIncrement, onMinus, addNew } = this.props;

        return (
            <div>
                <button
                    onClick={onReset}
                    className="btn btn-primary btn-sm m-2"
                >
                    Reset
                </button>
                <button
                    onClick={addNew}
                    className="btn btn-success btn-sm m-2"
                >
                    Add New
                </button>
                {counters.map(counter => (
                    <Counter
                        key={counter.id}
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                        onMinus={onMinus}
                        counter={counter}
                    />
                ))}
            </div>
        );
    }
}

export default Counters;
