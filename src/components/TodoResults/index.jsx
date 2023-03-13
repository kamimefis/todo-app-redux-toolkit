import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from "features/todos/todosSlice";

import "./styles.css";

const TodoResults = ({done}) => {
  // Fix an ability to calculate completed tasks
  const { list, todosCounter, isChecked } = useSelector(state => state.todos)
  const dispatch = useDispatch()

  return <div className="todo-results">Done:{done}</div>;
};

export default TodoResults;
