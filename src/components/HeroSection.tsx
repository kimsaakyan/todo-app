import React from 'react';
import TodoInput from './TodoInput';
import HeaderBar from './HeaderBar';
import TodoList from './TodoList';

const HeroSection: React.FC = () => {
    return (
        <section className="bg-gray-900">
            <main className="flex items-center flex-col justify-center bg-[url('https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/hero/bg-gradient-2.png')] bg-cover text-sm text-white max-md:px-4 text-center h-screen">
                <HeaderBar />
                <div className="max-w-xl flex flex-col items-center justify-center w-full">
                    <h1 className="text-4xl md:text-[40px]">
                        What's your plan today?
                    </h1>
                    <p className="text-base mt-6">
                        We'll help you plan your tasks quickly and easily.
                    </p>
                    <div className="w-full mt-4 ">
                        <TodoInput />
                    </div>
                    <TodoList />
                </div>
            </main>
        </section>
    );
};

export default HeroSection;
