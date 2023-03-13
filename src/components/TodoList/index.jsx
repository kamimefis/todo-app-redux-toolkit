import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux'

import { fetchTodoList } from "features/todos/todosSlice";
import { deleteTodo } from "features/todos/todosSlice";

import TodoListItem from "components/TodoListItem";
import "./styles.css";

const TodoList = () => {

  const { list } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodoList())
  }, [dispatch])


  const handleDelete = (todoId) => {
    // Fix an ability to delete task
    // console.log(todoId);
    dispatch(deleteTodo(todoId))
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
            <li key={item.id}>
              <TodoListItem item={item} onDelete={()=> handleDelete(item.id)} />
            </li>
          ))}
             
        </ul>
        {/* <ul>
          {list.map((item, index) => (
            <div key={item.id}>
              <TodoListItem item= {item} />
              <li>{item.label}</li>
            </div>
          ))}
        </ul> */}
      </div>
      <div className="no-todos">
        Looks like you&apos;re absolutely free today!
      </div>
    </div>
  );
};

export default TodoList;
