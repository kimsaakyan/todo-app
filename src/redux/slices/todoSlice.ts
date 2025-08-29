import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { ITodo } from '../../types/todo';

export type Filter = 'all' | 'active' | 'completed';

interface TodoState {
    todos: ITodo[];
    filter: Filter;
}

const initialState: TodoState = {
    todos: [],
    filter: 'all',
};

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<string>) => {
            const newTodo: ITodo = {
                id: uuidv4(),
                text: action.payload,
                isCompleted: false,
            };
            state.todos.push(newTodo);
        },
        deleteTodo: (state, action: PayloadAction<string>) => {
            const todoId = action.payload;
            state.todos = state.todos.filter((todo) => todo.id !== todoId);
        },
        completeTodo: (
            state,
            action: PayloadAction<{ isChecked: boolean; todoId: string }>
        ) => {
            const { isChecked, todoId } = action.payload;
            state.todos = state.todos.map((todo) => {
                if (todo.id === todoId) {
                    return { ...todo, isCompleted: isChecked };
                }

                return todo;
            });
        },
        clearCompleted: (state) => {
            state.todos = state.todos.filter((todo) => !todo.isCompleted);
        },
        setFilter: (state, action: PayloadAction<Filter>) => {
            state.filter = action.payload;
        },
    },
});

export const { addTodo, deleteTodo, completeTodo, clearCompleted, setFilter } =
    todoSlice.actions;

export default todoSlice.reducer;
