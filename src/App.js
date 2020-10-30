import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App extends Component {
    render() {
        return (
            <div>
                <MyComponent name="React" age={4}/>
            </div>
        );
    }
}

export default App;