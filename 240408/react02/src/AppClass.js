//rcc =>react-class-component(클래스형 컴포넌트 = 면접볼때 이야기할 수 있어야한다.) => 리액트 훅 사용 못함
import React, { Component } from "react";

export default class AppClass extends Component {
  constructor(props) {
    super(props);
    //state값 완성시키기
    this.state = {
      counter: 0,
      num: 1,
    };
  }

  increase = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  render() {
    return (
      <div>
        <div>{this.state.counter}</div>
        <button onClick={this.increase}>클릭!</button>
      </div>
    );
  }
}
