import React, { Component } from 'react';

class EventPractice1 extends Component {
    state = {
        message: ''
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해보세요"
                    value={this.state.message}
                    onChange={
                        (e) => {
                            console.log(e);
                            console.log(e.target.value);
                            console.log(this.state.message);
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                />
                <button onClick={
                    () => {
                        alert(this.state.message);
                        this.setState({
                            message: ''
                        })
                    }
                }
                >확인</button>
            </div>
        );
    }
}