import React, { Component } from 'react';
import PropTypes from 'prop-types'; // 컴포넌트 필수 props를 지정하거나 props 타입(type)을 지정할 때 이용

class MyComponent extends Component {
    static defaultProps = { // default props값 설정
        name: '기본 이름'
    }

    static propTypes = {
        name: PropTypes.string, // name props 타입을 문자열로 설정합니다.
        age: PropTypes.number.isRequired // 필수적으로 존재해야 하며, 숫자입니다.
    }

    state = {
        number: 0
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0
    //     }
    // }

    render() {
        return (
            <div>
                <p>안녕하세요, 제 이름은 {this.props.name} 입니다.</p> {/* props: 부모 컴포넌트에서 설정 (현재: App.js) */}
                <p>저는 {this.props.age}살 입니다.</p>
                <p>숫자: {this.state.number}</p>
                <button onClick={() => { // 일반 함수는 자신이 종속된 객체를 this로 가리키며, 화살표 함수는 자신이 종속된 인스턴스를 가르킨다.
                    this.setState({ // setState() 메서드의 역할은 파라미터로 전달받은 필드를 업데이트한 후 컴포넌트가 리렌더링하도록 트리거하는 것
                        number: this.state.number + 1
                    })
                }}>더하기</button>
            </div>
        );
    }
}

export default MyComponent;