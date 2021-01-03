import React, {Component} from 'react';
import './App1.css';
/*
var React = require('react');
var Component = React.Component;
*/

class App1 extends Component {
  render() {
    const text = '당신은 어썸한가요?';
    const condition = true;
    const style = {
      backgroundColor: 'gray',
      border: '1px solid black',
      height: Math.round(Math.random() * 300) + 50,
      width: Math.round(Math.random() * 300) + 50,
      WebkitTransition: 'all',
      MozTransition: 'all',
      msTransition: 'all'
    };

    return (
      <div className="my-div"> { /*React에서는 class가 아닌 className*/ }
        { /* return 안에서는 주석에 {} 필요 */ }
        <h1>리액트 안녕!</h1>
        <h2>{text}</h2>
        {condition && '보여주세요'}  {/* JSX 내부의 자바스크립트 표현식에서는 if문을 사용할 수 없다.*/}
        <div
          style={style}
          // self-closed 태그에서만 작동하는 주석
          // 마지막 />가 꼭 새 줄에 있어야 한다
          /**/
        />
        // 여기서 쓰는 주석은 그대로 렌더링
        /**/
      </div>
    )
  }
}

export default App1;