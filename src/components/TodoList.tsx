import React from 'react';
import type { RootState } from '../redux/store';
import TodoItem from './TodoItem';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCompleted } from '../redux/slices/todoSlice';

const TodoList: React.FC = () => {
    const dispatch = useDispatch();
    const { todos, filter } = useSelector((state: RootState) => state.todo);
    const activeTaskCount = todos.filter((t) => !t.isCompleted).length;

    const filteredTasks = useMemo(() => {
        if (filter === 'active') return todos.filter((t) => !t.isCompleted);
        if (filter === 'completed') return todos.filter((t) => t.isCompleted);
        return todos;
    }, [todos, filter]);

    if (!filteredTasks.length) {
        return <p className="mt-10 text-2xl">The task's list is empty!</p>;
    }

    return (
        <div className="w-full flex flex-col gap-6">
            <div className="flex flex-col gap-2 mt-8 p-2 w-full overflow-y-auto max-h-40">
                {filteredTasks.map((todo) => (
                    <TodoItem key={todo.id} {...todo} />
                ))}
            </div>
            <div className="flex justify-between items-center">
                <p className="border py-2 px-4 rounded">
                    {activeTaskCount} items left
                </p>
                <button
                    className="bg-red-500 px-2 py-2 rounded"
                    onClick={() => dispatch(clearCompleted())}
                >
                    Clear completed
                </button>
            </div>
        </div>
    );
};

export default TodoList;
