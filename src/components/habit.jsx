import React, { PureComponent } from "react";

// 클래스명은 항상 대문자
class Habit extends PureComponent {
  //LifeCycle method
  // 보통 componentDidMount랑 componentWillUnmount 많이 설정해놓음
  componentDidMount() {
    //컴포넌트를 생성할 때 해줘야 하는 기능을 여기에 추가
  }
  componentWillUnmount() {
    //컴포넌트를 삭제할 때 해줘야 하는 기능은 여기에 추가
  }

  //state = 초기값 , setState({ 갱신할 내용 }) = 갱신
  /* 
Habits에서 props로 전달받은 데이터를 보여주기만 하는 class 이기 때문에
따로 state를 가지고 있을 필요가 없다
*/

  handleIncrement = () => {
    /* 
    Habits 에서 기능들을 받아옴
    Habits 에서 onIncrement, onDecrement, onDelete의 인자는 모두 habit 이므로,
    this.props.habit 를 인자로 받아준다
    */
    this.props.onIncrement(this.props.habit);
  };

  handleDecrement = () => {
    this.props.onDecrement(this.props.habit);
  };

  handleDelete = () => {
    this.props.onDelete(this.props.habit);
  };

  render() {
    // 이런 형식으로 props에 담아준다\
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          /* class 안에 있는 함수를 사용할 때도 this를 붙여줘야 한다.*/
          onClick={this.handleIncrement}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={this.handleDecrement}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={this.handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}

export default Habit;
