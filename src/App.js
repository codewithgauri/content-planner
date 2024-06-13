// src/App.js
import React, { useState } from 'react';
import ListView from './components/ListView';
import DetailView from './components/DetailView';
import TopBar from './components/TopBar';

const App = () => {
  const [selectedData, setSelectedData] = useState(null);

  return (
    <div>
      <TopBar />
      <div className="flex min-h-screen">
        <div className="md:w-1/4 w-full bg-gray-200 dark:bg-gray-900 p-4">
          <ListView onSelect={setSelectedData} />
        </div>
        <div className="md:w-1/2 w-full bg-white dark:bg-gray-800 p-4">
          {selectedData ? (
            <DetailView data={selectedData.fields} onBack={() => setSelectedData(null)} />
          ) : (
            <div className="text-gray-500 dark:text-gray-400">Select an item to see the details</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
