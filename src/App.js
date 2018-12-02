import React, { Component } from 'react';
import './App.scss';

import { ExampleViz } from "./components/ExampleViz/ExampleViz";

class App extends Component {

    constructor(props) {
        super(props)
        this.svgSize = {
            availableSpace: {
                width: 700,
                height: 300,
            },
            margin: {
                top: 50,
                left: 80,
                right: 50,
                bottom: 80,
            }
        }
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>NBA Viz</h1>
                </header>
                <content className="App-content">
                    <ExampleViz svgSize={this.svgSize} />
                </content>
            </div>
        );
    }
}

export default App;
