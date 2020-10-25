import React from 'react';

import TodoItem from '../todoItem/TodoItem';

const TodoList = ({ 
  list,
  deleteTodo,
  changeTodoCompletion,
  editTodo,
  activeTodoId,
  setActiveTodoId
}) => {
  return (
    <ul className="list">
      {
        list.map( ({ id, text, completed }) => (
          <TodoItem
            key={id}
            id={id}
            text={text}
            completed={completed}
            deleteTodo={deleteTodo}
            changeTodoCompletion={changeTodoCompletion}
            editTodo={editTodo}
            activeTodoId={activeTodoId}
            setActiveTodoId={setActiveTodoId}
          />
        ))
      }
    </ul>
  )
}

export default TodoList;
