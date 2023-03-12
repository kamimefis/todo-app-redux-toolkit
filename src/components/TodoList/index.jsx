import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'
import "./styles.css";

import { fetchTodoList } from "features/todos/todosSlice";

const TodoList = () => {

  const {list} = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodoList())
  }, [dispatch])


  const handleDelete = (todoId) => {
    // Fix an ability to delete task
  };

  const toggleCheck = (todoId, isChecked) => {
    // Fix an ability to toggle task
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      <div className="todo-list-content">
        {/* Fix an ability to render todos */}
        <ul>
          {list.map((item, index) => (
            <li key= {item.id}>{item.label}</li>
          ))}
        </ul>
      </div>
      <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div>
    </div>
  );
};

export default TodoList;
