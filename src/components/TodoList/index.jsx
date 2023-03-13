import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
import Swal from 'sweetalert2';

import { fetchTodoList } from "features/todos/todosSlice";
import { deleteTodo } from "features/todos/todosSlice";
import { updateTodo } from "features/todos/todosSlice";

import TodoListItem from "components/TodoListItem";
import "./styles.css";
import TodoResults from "components/TodoResults";

const TodoList = () => {

  const [checkState, setCheckState] = useState({ id: '', checked: false })
  const [done, setDone] = useState(0)

  const { list, todosCounter} = useSelector(state => state.todos)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTodoList())
  }, [dispatch])

  //DELETE
  const handleDelete = (todoId) => {
    // Fix an ability to delete task
    axios
      .delete(`https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos/${todoId}`)
      .then(response => {
        dispatch(deleteTodo(todoId))
        // console.log(response, 'RES')
        setDone(done + 1)

        if (response.status === 200) {
          Swal.fire(
            'DELETED',
            'post deleted successfully',
            'success'
          )
        } else (Swal.fire(
          'Error',
          'Failed Post',
          'error'
        ))
      })
  };
  
  

  const toggleCheck =(todoId, isChecked) => {
    // Fix an ability to toggle task
    
    // console.log(checkState, 'checkstate');
    axios
      .put(`https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos/${todoId}`,{
        checkState
      })
      .then(res => console.log(res.data))
      .then(response => dispatch(updateTodo(todoId)))
  };


  return (
    <>
      <div className="todo-list">
        <span className="todo-list-title">Things to do:</span>
        <div className="todo-list-content">
          {/* Fix an ability to render todos */}
          <ul className="todo-list-items">
            {list.map((item, index) => (
              <div key={index}>
                <li>
                  <TodoListItem
                    item={item}
                    onDelete={() => handleDelete(item.id)}
                    onCheck={() => {
                      setCheckState({id: item.id, checked: !item.checked })
                      toggleCheck(item.id, item.checked)}
                    }
                    checked={item.checked}
                  />
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
      <TodoResults done={done} />
    </>
  );
};

export default TodoList;
