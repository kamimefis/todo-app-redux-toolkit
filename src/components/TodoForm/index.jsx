import { useState } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios';
import { v4 as uuid } from 'uuid'

import { addTodo } from "features/todos/todosSlice"
import "./styles.css";

const TodoForm = () => {

    const dispatch = useDispatch()

    const [addTodoItem, setAddTodoItem] = useState({
        label: '',
        checked: false,
        id: ''
    })

    const handleChange = e => {
        setAddTodoItem({
            ...addTodoItem,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(addTodo(postTodoList))

        setAddTodoItem({
            label: ''
        })

    }
    console.log();

    //POST
    const postTodoList = () => (dispatch) => {
        axios
            .post("https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos/", {
                ...addTodoItem,
                id: uuid()
            })
            .then(response => {
                console.log(response.data)
                dispatch(addTodo(response.data))
            })
            .catch(error => console.log(error))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    name='label'
                    type='text'
                    placeholder='Enter new to do'
                    onChange={handleChange}
                />
                <button type='submit'>ADD TO DO</button>
            </form>

        </div>
    )
}

export default TodoForm