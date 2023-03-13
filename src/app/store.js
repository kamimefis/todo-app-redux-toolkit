import { configureStore } from '@reduxjs/toolkit'
//reducers
import todos from '../features/todos/todosSlice'

export const store = configureStore({
  reducer: {
    todos,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})