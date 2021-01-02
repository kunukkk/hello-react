import React, { Component } from 'react';
import MyComponent from './MyComponent';

class App2 extends Component {
    render() {
        return (
            <div>
                <MyComponent name="React" age={4}/>
                {/* 문자열 종류 외의 값을 컴포넌트에 전달할 때는 { }로 감싸야 한다. */}
            </div>
        );
    }
}

export default App2;