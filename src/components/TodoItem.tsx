import React from 'react';
import type { ITodo } from '../types/todo';
import { MdDeleteOutline } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { deleteTodo, completeTodo } from '../redux/slices/todoSlice';

const TodoItem: React.FC<ITodo> = ({ id, text, isCompleted }) => {
    const dispatch = useDispatch();

    const onClickHandler = (todoId: string) => {
        dispatch(deleteTodo(todoId));
    };
    const сheckboxHandler = (isChecked: boolean) => {
        dispatch(completeTodo({ isChecked, todoId: id }));
    };
    return (
        <div className="flex items-center justify-between p-3 rounded-lg bg-white/50 shadow-sm hover:shadow-md transition">
            {/* Левая часть: чекбокс + текст */}
            <label className="flex items-center gap-2 cursor-pointer w-full">
                <input
                    type="checkbox"
                    className="h-4 w-4 accent-indigo-600 rounded cursor-pointer"
                    onChange={(e) => сheckboxHandler(e.target.checked)}
                />
                <p
                    className={`text-gray-800 leading-5 ${
                        isCompleted ? 'line-through' : ''
                    }`}
                >
                    {text}
                </p>
            </label>

            {/* Правая часть: кнопка */}
            <button
                onClick={() => onClickHandler(id)}
                className="cursor-pointer text-red-400 hover:text-red-500 transition"
            >
                <MdDeleteOutline size={20} />
            </button>
        </div>
    );
};

export default TodoItem;
