import React, { Component } from "react";
import "./app.css";
import Habits from "./components/habits";
import Navbar from "./components/navbar";

class App extends Component {
  state = {
    habits: [
      // array 안에 각각 obj로 할당하기
      // 고유 key 꼭 지정해주기
      { id: 1, name: "Reading", count: 0 },
      { id: 2, name: "Running", count: 0 },
      { id: 3, name: "Coding", count: 0 },
    ],
  };

  onIncrement = (habit) => {
    // 이런식으로 state obj를 직접 변경하는 것은 좋지 않다.
    // habit.count++;
    // this.setState(this.state);

    // const habits = [...this.state.habits]; //spread operator : 새로운 array에 habits에 있는걸 다 복사해온다
    // const index = habits.indexOf(habit); // 몇번째 놈인가
    // habits[index].count++;
    // this.setState({ habits }); // {habit : habit}

    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 }; // habit에 있는거 다 불러오고 count만 덮어써준다
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };

  onDecrement = (habit) => {
    // const habits = [...this.state.habits];
    // const index = habits.indexOf(habit);
    // const count = habits[index].count - 1;
    // habits[index].count = count < 0 ? 0 : count;
    // this.setState({ habits });

    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        const count = habit.count - 1;
        return { ...habit, count: count < 0 ? 0 : count }; // habit에 있는거 다 불러오고 count만 덮어써준다
      } else {
        return item;
      }
    });
    this.setState({ habits });
  };

  onDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  onAdd = (name) => {
    const habits = [...this.state.habits, { id: Date.now(), name, count: 0 }];
    this.setState({ habits });
  };

  onReset = () => {
    //카운트를 다 0으로 만든다
    const habits = this.state.habits.map((habit) => {
      // 이미 0이면 업데이트 할 필요가 없음
      if (habit.count !== 0) {
        return { ...habit, count: 0 };
      }
      return habit;
    });
    this.setState({ habits });
  };

  render() {
    return (
      <>
        <Navbar
          totalCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <Habits
          habits={this.state.habits}
          onIncrement={this.onIncrement}
          onDecrement={this.onDecrement}
          onDelete={this.onDelete}
          onAdd={this.onAdd}
          onReset={this.onReset}
        />
      </>
    );
  }
}

export default App;
