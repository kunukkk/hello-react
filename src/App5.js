import React, { Component } from 'react';
import ScrollBox from './ScrollBox'

class App5 extends Component {
    render() {
        return (
            <div>
                <ScrollBox ref={(ref) => {this.scrollBox=ref}} />
                <button onClick={() => {this.scrollBox.scrollToBottom()}}> { /* onclick={this.scrollBox.scrollToBottom 으로 작성 시 오류발생*/ }
                    맨 밑으로
                </button>
            </div>
        );
    }
}

export default App5;