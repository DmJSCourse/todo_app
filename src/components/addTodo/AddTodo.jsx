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
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          event.preventDefault();
          addTodo(userInput);
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
