import { useState } from 'react'
import {useDispatch} from 'react-redux'
import {v4 as uuid} from 'uuid'

import "./styles.css";
import { addTodo } from "features/todos/todosSlice"

const TodoForm = () => {

    const dispatch = useDispatch()

    const [addTodoItem, setAddTodoItem] = useState({
        label: '',
        checked: false
    })

    const handleChange = e => {
        setAddTodoItem({
            ...addTodoItem,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault();
        // console.log(addTodoItem);
        dispatch(addTodo({
            ...addTodoItem,
            id: uuid()
        }))
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