import React, { Component } from 'react';
import ScrollBox from './ScrollBox'

class App5 extends Component {
    render() {
        return (
            <div>
                <ScrollBox ref={(ref) => {this.scrollBox=ref}} />
                <button onClick={() => {this.scrollBox.scrollToBottom()}}>
                    맨 밑으로
                </button>
            </div>
        );
    }
}