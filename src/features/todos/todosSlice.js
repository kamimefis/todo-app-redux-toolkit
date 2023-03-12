import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


export const todosSlice= createSlice({
    name: 'todos',
    initialState: {
        list: []
    },
    reducers: {
        setTodosList: (state, action) => {
            state.list= action.payload
        }
    }
})

export const {setTodosList} = todosSlice.actions

export default todosSlice.reducer

export const fetchTodoList= () => (dispatch) => {
    axios
    .get('https://my-json-server.typicode.com/AlvaroArratia/static-todos-api/todos')
    .then(response => {
        dispatch(setTodosList(response.data)) 
    })
    .catch(error => console.log(error))
}