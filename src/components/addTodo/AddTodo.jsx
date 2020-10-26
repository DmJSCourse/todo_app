import React, { useState } from 'react';

import './AddTodo.scss';

const AddTodo = ({ addTodo }) => {
  const [userInput, setUserInput] = useState("");

  return (
    <form className="form">
    <input
      type="text"
      className="form__input"
      placeholder="Enter A New Task"
      onChange={({ target }) => setUserInput(target.value)}
      onKeyDown={({ key, target }) => {
        if (key === "Enter") {
          addTodo(target.value);
          setUserInput("");
        }
      }}
      value={userInput}
    />
    <button
      type="button"
      className="form__add"
      onClick={() => {
        if (userInput !== "") {
          addTodo(userInput);
          setUserInput("");
        }
      }}
    >
      Add New Task
    </button>
  </form>
  )
}

export default AddTodo;
