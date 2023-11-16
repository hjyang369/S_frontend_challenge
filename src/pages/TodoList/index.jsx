import { useState } from "react";
import "./todoList.css";

const priorityArr = ["🧡", "💛", "💚", "💙", "💜"];
const categoryArr = ["전체", "완료", "미완료"];

export default function TodoList() {
  const [selectCategory, setSelectCategory] = useState("전체");
  const [todo, setTodo] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [heart, setHeart] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim() !== "" && heart.trim() !== "") {
      setTodo([
        ...todo,
        { text: inputValue, completed: false, priority: heart },
      ]);
      setInputValue("");
      setHeart("");
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTodo = [...todo];
    updatedTodo[index].completed = !updatedTodo[index].completed;
    setTodo(updatedTodo);
  };

  const changeCategory = (category) => {
    setSelectCategory(category);
  };

  const selectPriority = (heart) => {
    setHeart(heart);
  };

  const handleRemoveTodo = (index) => {
    const updatedTodo = todo.filter((_, i) => i !== index);
    setTodo(updatedTodo);
  };

  return (
    <div className="todoListContainer">
      <div className="todoList">
        <h1>TO DO LIST</h1>
        <div className="categoryButtons">
          {categoryArr.map((name, idx) => {
            return (
              <button
                key={idx}
                className="categoryBtn"
                onClick={() => {
                  changeCategory(name);
                }}
                style={{
                  backgroundColor: `${
                    selectCategory === name ? "yellow" : "white"
                  }`,
                }}
              >
                {name}
              </button>
            );
          })}
        </div>
        <div>
          <div className="inputContainer">
            <input
              onChange={(e) => handleInputChange(e)}
              name="text"
              className="input"
              placeholder="내용을 입력해주세요."
              value={inputValue}
            ></input>
            <div>
              {priorityArr.map((heart, idx) => {
                return (
                  <button
                    name="priority"
                    className="priorityBtn"
                    key={idx}
                    onClick={() => selectPriority(heart)}
                  >
                    {heart}
                  </button>
                );
              })}
            </div>
            <button onClick={handleAddTodo} className="addBtn">
              추가
            </button>
          </div>
          <p>우선순위 : 🧡 &gt; 💛 &gt; 💚 &gt; 💙 &gt; 💜</p>
        </div>

        <div className="result">
          {todo.map((content, idx) => {
            return (
              <div className="todo" key={idx}>
                <div className="content">
                  <input
                    onChange={() => handleToggleComplete(idx)}
                    type="checkbox"
                    checked={content.completed}
                  ></input>
                  <p>{content.text}</p>
                  <p>{content.priority}</p>
                </div>
                <button onClick={() => handleRemoveTodo(idx)}>x</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
