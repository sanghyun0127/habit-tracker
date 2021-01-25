// Class
import React, { Component } from "react";

/*
DOM 요소에 접근하지 않고 멤버변수를 정의한 다음에 그것을 원하는 리액트 컴포넌트에
Ref로 연결하면 된다.\
 */

class HabitAddForm extends Component {
  formRef = React.createRef();
  inputRef = React.createRef();

  onSubmit = (event) => {
    event.preventDefault(); // browser의 refresh를 막음
    const name = this.inputRef.current.value;
    name && this.props.onAdd(name);

    // inplaceholder 부분 초기화
    //this.inputRef.current.value = "";
    this.formRef.current.reset();
  };

  render() {
    return (
      <form ref={this.formRef} className="add-form" onSubmit={this.onSubmit}>
        <input
          ref={this.inputRef}
          type="text"
          className="add-input"
          placeholder="Habit"
        />
        <button className="add-button">Add</button>
      </form>
    );
  }
}

export default HabitAddForm;
