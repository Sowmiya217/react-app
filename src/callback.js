import { useState, useEffect } from "react";
// Hooks intro - https://reactjs.org/docs/hooks-intro.html

export function Child(props) {
  const { renderItems, todoItem } = props;
  const [todoList, setTodoList] = useState(["React"]);
  const [newItem, setNewItem] = useState("");
  const str1 = "hello";

  useEffect(() => {
    console.log("mount and unmount");
  }, []);

  useEffect(() => {
    console.log("any one of vars changes");
  }, [str1, todoList]);

  useEffect(() => {
    console.log("todoList changes");
    renderItems(todoList);
  }, [todoList]);

  const setItem = (e) => {
    const newValue = e.target.value;
    setNewItem(newValue);
  };

  const addItem = () => {
    setTodoList([...todoList, newItem]);
  };

  return (
    <div>
      {todoItem}
      <br />
      <div style={{ color: "red" }}>
        <label htmlFor="item">Add to-do item</label>
        <input
          type="text"
          name="item"
          value={newItem}
          onChange={setItem}
        ></input>
        <button onClick={addItem}>Add</button>
      </div>
    </div>
  );
}

export function Parent() {
  const calbackFunc = (value) => {
    console.log("value in parent callback func", value);
  };
  return <Child todoItem={"learn"} renderItems={calbackFunc} />;
}
