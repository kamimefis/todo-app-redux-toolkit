import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        list: [],
        todosCounter: 0
    },
    reducers: {
        setTodosList: (state, action) => {
            state.list = action.payload;
            state.todosCounter = state.list.length;
        },
        addTodo: (state, action) => {
            state.list = [...state.list, action.payload];
            state.todosCounter += 1;
        },
        deleteTodo: (state, action) => {
            state.list = state.list.filter(item => item.id !== action.payload)
            state.todosCounter -= 1;

        }
    }
})

export const { setTodosList, addTodo, deleteTodo } = todosSlice.actions

export default todosSlice.reducer


//GET
export const fetchTodoList = () => (dispatch) => {
    axios
        .get('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos')
        .then(response => {
            dispatch(setTodosList(response.data))
            console.log(response.data);
        })
        .catch(error => console.log(error))
}

