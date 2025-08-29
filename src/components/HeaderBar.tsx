import React from 'react';
import Tabs from './Tabs';

const HeaderBar: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl md:text-6xl xl:text-8xl mb-4 text-white font-bold">
                TO DO
            </h1>
            <Tabs />
        </div>
    );
};

export default HeaderBar;
