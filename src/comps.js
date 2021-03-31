import { Component } from "react";
import { ErrorBoundary } from "./error-handling";

export function TodoFunc(props) {
  return <div>{props.todoItem}</div>;
}

export class TodoClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoList: ["Learn React", "Experiment with JS"],
      completed: ["Leanr HTML", "Learn CSS"]
    };
  }

  addItem(item) {
    // this.state.todoList = [...this.state.todoList, item];
    // both of these are wrong ways of doing 
    // this.setState({ todoList: [...this.state.todoList, item] });
    this.setState((state, props) => ({
      todoList: [...state.todoList, item]
    }));
    console.log("updated state", this.state);
  }

  componentDidUpdate() {
    console.log("in did update func", this.state);
  }

  render() {
    const listItems = this.state.todoList.map((todo, i) => (
      <li key={i}>{todo}</li>
    ));
    return (
      <div>
        {this.props.todoItem}
        <br />
        <div style={{ color: "red" }}>
          <label htmlFor="item">Add to-do item</label>
          <input type="text" name="item"></input>
          <button onClick={(event) => this.addItem(event.target.value)}>
            Add
          </button>
          <ul>{listItems}</ul>
        </div>
      </div>
    );
  }
}

export class TodoComp extends Component {
  render() {
    return (
      <ErrorBoundary>
        <h3>List of items in to-do</h3>
        {TodoFunc({ todoItem: "Learn react" })}
        <TodoFunc todoItem={"Create-react-app"} />
        <TodoClass todoItem={"Hands-on"} />
      </ErrorBoundary>
    );
  }
}
