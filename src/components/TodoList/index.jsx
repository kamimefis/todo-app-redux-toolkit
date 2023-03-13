import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { fetchTodoList } from "features/todos/todosSlice";
import { deleteTodo } from "features/todos/todosSlice";

import TodoListItem from "components/TodoListItem";
import "./styles.css";
import axios from "axios";

const TodoList = () => {

  const { list, todosCounter } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodoList())
  }, [dispatch])


  console.log('counter', todosCounter);
  //DELETE
  const handleDelete = (todoId) => {
    // Fix an ability to delete task
    axios
      .delete(`https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos/${todoId}`)
      .then(response => {
        dispatch(deleteTodo(todoId))
        console.log(response)
      })
  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
  };


  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        {/* Fix an ability to render todos */}
        <ul className="todo-list-items">
          {list.map((item, index) => (
            <div key={index}>
              <li>
                <TodoListItem item={item} onDelete={() => handleDelete(item.id)} />
              </li>
            </div>
          ))}
        </ul>
      </div>
      {todosCounter === 0 &&
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      }
    </div>
  );
};

export default TodoList;
