import React, { useState } from 'react';

import { initialTodos } from '../../initialTodos';
import logo from '../../images/react_logo.png';

import TodoList from '../todoList/TodoList';
import AddTodo from '../addTodo/AddTodo';
import Filters from '../filters/Filters';
import Controls from '../controls/Controls';

import './App.scss';

function App() {
  const [todoList, setTodoList] = useState(initialTodos);
  const [filter, setFilter] = useState("all");
  const [activeTodoId, setActiveTodoId] = useState(-1);

  const addTodo = (input) => setTodoList(
    [
      ...todoList,
      {
        id: new Date().getTime(),
        text: input,
        completed: false,
      }
    ]
  )

  const deleteTodo = (targetId) => setTodoList(
    todoList.filter(todo => todo.id !== targetId)
  )

  const changeTodoCompletion = (targetId) => setTodoList(
    todoList.map(todo => {
      if (todo.id === targetId) {
        return {
          id: todo.id,
          text: todo.text,
          completed: !todo.completed,
        }
      } else {
        return todo;
      }
    })
  )

  const editTodo = (text) => setTodoList(
      todoList.map(todo => {
        if (todo.id === activeTodoId) {
          return {
            id: todo.id,
            text: text,
            completed: todo.completed,
          }
        } else {
          return todo;
        }}
  ))


  const filterList = (filter) => {
    switch (filter) {
      case "all":
        return todoList;
      case "completed":
        return todoList.filter(todo => todo.completed)
      case "unfinished":
        return todoList.filter(todo => !todo.completed)
      default:
        return todoList;
    }
  }

  const deleteCompleted = () => {
    setTodoList(todoList.filter(todo => !todo.completed))
  }

  const markAllAsCompleted = () => {
    setTodoList(todoList.map(todo => {
      return {
        id: todo.id,
        text: todo.text,
        completed: true,
      }
    }))
  }

  return (
    <div className="wrapper">
      <div className="app">
        <header className="app__header">
          <img
              src={logo}
              alt="logo"
              className="app__logo"
          />
          <h1 className="app__title">
            Todo App
          </h1>
        </header>

        <section className="todos">
          <TodoList
            list={filterList(filter)}
            deleteTodo={deleteTodo}
            changeTodoCompletion={changeTodoCompletion}
            editTodo={editTodo}
            activeTodoId={activeTodoId}
            setActiveTodoId={setActiveTodoId}
          />
        </section>

        <aside className="menu">
          <AddTodo 
            addTodo={addTodo}
          />
          <Filters 
            filter={filter}
            setFilter={setFilter}
          />
          <Controls
            deleteCompleted={deleteCompleted}
            markAllAsCompleted={markAllAsCompleted}
          />
        </aside>



      </div>
    </div>
  );
}

export default App;
