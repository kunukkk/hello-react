import React, { Component } from 'react';

class IterationSample1 extends Component {
  state = {
    names: ['눈사람', '얼음', '눈', '바람'],
    name: '',
  };

  handlechange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleInsert = () => {
    // names 배열에 값을 추가하고, name 값을 초기화합니다.
    this.setState({
      // state는 언제나 setState 메서드로 업데이트해야 하고 직접 접근하여 수정 불가
      // push로 기존 배열을 직접 수정하지 않고, 기존 배열과 새 값을 합친 새 배열을 생성하는 concat 사용
      names: this.state.names.concat(this.state.name),
      name: '',
    });
  };

  handleRemove = (index) => {
    // 편의상 name의 레퍼런스를 미리 만든다.
    const { names } = this.state; // ==> names = this.state.names

    this.setState({
      // filter로 index번째를 제외한 원소만 있는 새 배열 생성
      names: names.filter((item, i) => i !== index),
    });
    // /* 배열을 자르는 내장 함수 slice와
    //    전개 연산자(...)를 사용하여
    //    index번째 값을 제외한 값들을
    //    배열에 넣어 준다.*/

    // this.setState({
    //     names: [
    //         // ...문법은 전개 연산자(spread operator)라 한다.
    //         // ...은 뒤에 위치한 배열 값을 그대로 꺼내서 현재 배열에 복사하는 것이다.
    //         ...names.slice(0, index),
    //         ...names.slice(index+1, names.length)
    //     ]
    // });
  };

  render() {
    const nameList = this.state.names.map((name, index) => (
      <li
        key={index} // 콜백 함수의 인수인 index를 활용하여 데이터가 가진 고유값으로 key값을 설정해준다.
        onDoubleClick={() => this.handleRemove(index)}
      >
        {name}
      </li>
    ));

    return (
      <div>
        <input onChange={this.handlechange} value={this.state.name} />
        <button onClick={this.handleInsert}>추가</button>
        <ul>{nameList}</ul>
      </div>
    );
  }
}

export default IterationSample1;
