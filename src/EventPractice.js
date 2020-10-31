import React, { Component } from 'react';

class EventPractice extends Component {
    state = {
        username: '',
        message: ''
    }

    // constructor(props) {
    //     // super(props): super는 부모 클래스 생성자를 가리키는데 여기서는 Component
    //     // super(props)를 선언하기 전에는 constructor에서 this를 사용할 수 없다
    //     super(props);
    //     // bind: 컴포넌트에 임의 메서드를 만들면 기본적으로는 this에 접근할 수 없다
    //     // 따라서 컴포넌트의 생성자 메서드인 constructor에서 각 메서드를 this와 바인딩(binding) 해준다
    //     this.handleChange = this.handleChange.bind(this);
    //     this.handleClick = this.handleClick.bind(this);
    // }

    // handleChange(e) {
    //     this.setState({
    //         message: e.target.value
    //     })
    // }

    // handleClick() {
    //     alert(this.state.message);
    //     this.setState({
    //         message: ''
    //     })
    // }

    handleChange = (e) => {
        this.setState({
            // e.target.name은 해당 input의 name을 가르킨다
            [e.target.name]: e.target.value
        })
    }

    handleClick = () => {
        alert(this.state.username + ': ' + this.state.message);
        this.setState({
            username: '',
            message: ''
        })
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="USERNAME"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="message"
                    placeholder="MESSAGE"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        );
    }
}

export default EventPractice;