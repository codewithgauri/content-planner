// src/components/TopBar.js
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import ListView from './ListView';

const TopBar = () => {
    const [showListView, setShowListView] = useState(false);

    const toggleListView = () => {
        setShowListView(!showListView);
    };

    return (
        <div className="bg-blue-500 text-white py-2 px-4 flex justify-between items-center fixed w-full top-0 z-50">
            <div>SuperContent Planner (Linkedin)</div>
        </div>
    );
};

export default TopBar;
