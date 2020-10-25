import React from 'react';

import './TodoItem.scss'

import edit from '../../images/draw.svg';

const TodoItem = ({
  text,
  completed,
  id,
  deleteTodo,
  changeTodoCompletion,
  editTodo,
  activeTodoId,
  setActiveTodoId
}) => {
  return (
    <li className="item">
      <input
        type="checkbox"
        className="item__checkbox"
        id={id}
        checked={completed}
        onChange={() => changeTodoCompletion(id)}
      />

      {activeTodoId !== id
        ? <>
          <p className="item__text">
              {text}
          </p>

          <button
          type="button"
          className="item__edit"
          onClick={() => setActiveTodoId(id)}
          >
          <img src={edit} alt="edit" className="item__edit-icon" />
          </button>

          <button
            type="button"
            className="item__delete"
            onClick={() => deleteTodo(id)}
          >
            ✕
          </button>
        </>
        : <input
            type="text"
            defaultValue={text}
            className="item__textfield"
            onKeyDown={({ target, key }) => {
              if (key === "Enter") {
                editTodo(target.value);
                setActiveTodoId(-1);
              }
              if (key === "Escape") {
                setActiveTodoId(-1);
              }
            }}
            onBlur={() => {
              setActiveTodoId(-1);
            }}
          />
      }
    </li>
  )
}

export default TodoItem;
