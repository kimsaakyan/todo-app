import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilter, type Filter } from '../redux/slices/todoSlice';

export default function Tabs() {
    const dispatch = useDispatch();
    const [activeTab, setActiveTab] = useState('All');

    const tabs: Filter[] = ['all', 'active', 'completed'];

    const onClickHandler = (tab: Filter) => {
        setActiveTab(tab);
        dispatch(setFilter(tab));
    };

    return (
        <div className="flex justify-center items-center gap-4 border border-gray-500 p-2 rounded-md mb-4">
            {tabs.map((tab) => (
                <button
                    key={tab}
                    onClick={() => {
                        onClickHandler(tab);
                    }}
                    className={`py-2 px-4 text-sm font-medium transition-colors rounded-md ${
                        activeTab === tab
                            ? 'border border-gray-500 text-white'
                            : 'text-gray-500 hover:text-gray-600'
                    }`}
                >
                    {tab.toUpperCase()}
                </button>
            ))}
        </div>
    );
}
