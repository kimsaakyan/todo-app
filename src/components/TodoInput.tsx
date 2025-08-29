import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';

const TodoInput: React.FC = () => {
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const onChangeHandler = (val: string): void => setValue(val);
    const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(addTodo(value));
        setValue('');
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <textarea
                rows={4}
                className="w-full mt-2 p-2 bg-white text-gray-800 rounded-lg resize-none outline-none transition-all"
                placeholder="Enter your message"
                required
                value={value}
                onChange={(e) => onChangeHandler(e.target.value)}
            ></textarea>

            <button
                type="submit"
                className="flex items-center justify-center gap-1 mt-5 bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 w-full rounded-full transition cursor-pointer"
            >
                Add Plan
                <svg
                    className="mt-0.5"
                    width="21"
                    height="20"
                    viewBox="0 0 21 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="m18.038 10.663-5.625 5.625a.94.94 0 0 1-1.328-1.328l4.024-4.023H3.625a.938.938 0 0 1 0-1.875h11.484l-4.022-4.025a.94.94 0 0 1 1.328-1.328l5.625 5.625a.935.935 0 0 1-.002 1.33"
                        fill="#fff"
                    />
                </svg>
            </button>
        </form>
    );
};

export default TodoInput;
