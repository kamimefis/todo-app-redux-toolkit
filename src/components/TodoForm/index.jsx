import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
// import { v4 as uuid } from 'uuid'

import { addTodo } from "features/todos/todosSlice"
import "./styles.css";

const TodoForm = () => {

    const dispatch = useDispatch()
    const { todosCounter} = useSelector(state => state.todos)

    const [addTodoItem, setAddTodoItem] = useState({
        label: '',
        checked: false,
        id: ''
    })

    const handleChange = e => {
        setAddTodoItem({
            ...addTodoItem,
            [e.target.name]: e.target.value,
            id: todosCounter
        })
        console.log(addTodoItem);
    }

    //To post todo
    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await axios
            .post("https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos/", {...addTodoItem})
            .then(response => dispatch(addTodo(response.data)))
            .catch(error => console.log(error))
        console.log(response, 'response');
    }
    

    return (
        <div className='todo-list-form-container'>
            <form onSubmit={handleSubmit}>
                <input
                    name='label'
                    type='text'
                    placeholder='Enter new to do'
                    onChange={handleChange}
                />
                <button className='todo-list-btn-styles todo-btn' type='submit'>ADD TO DO</button>
            </form>

        </div>
    )
}

export default TodoForm