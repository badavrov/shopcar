import React, { Component } from 'react';
import NavBar from './components/navbar';
import Counters from './components/counters';

class App extends Component {
    state = {
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 }
        ]
    };

    handleReset = () => {
        const counters = this.state.counters.map(c => {
            c.value = 0;
            return c;
        });
        this.setState({ counters })
    }

    handleAdd = () => {
        const counters = [...this.state.counters]
        let id = Math.random();
        let value = 0;
        let counter = { id:id, value:value}
        counters.push(counter)
        this.setState({counters:counters})
    }

    handleIncrement = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        counters[index].value++;
        this.setState({ counters })
    }

    handleMinus = counter => {
        const counters = [...this.state.counters];
        const index = counters.indexOf(counter);
        counters[index] = { ...counter };
        if (counters[index].value > 0) {
            counters[index].value--;
            this.setState({ counters })
        }
    }


    handleDelete = (counterId) => {
        const counters = this.state.counters.filter(c => c.id !== counterId);
        this.setState({ counters });
    }

    render() {
        return (
            <React.Fragment>
                <NavBar
                    totalCounters={this.state.counters.filter(c => c.value > 0).length}
                />
                <main className="container">
                    <Counters
                        counters={this.state.counters}
                        addNew={this.handleAdd}
                        onMinus={this.handleMinus}
                        onReset={this.handleReset}
                        onIncrement={this.handleIncrement}
                        onDelete={this.handleDelete} />
                </main>
            </React.Fragment>
        );
    }
}
export default App;