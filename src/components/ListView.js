// src/components/ListView.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListView = ({ onSelect }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const airtableApiKey = process.env.REACT_APP_AIRTABLE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.airtable.com/v0/appyJ1WayeVD7QwIZ/content_calander?maxRecords=100&view=Grid%20view', {
          headers: {
            Authorization: `Bearer ${airtableApiKey}`
          }
        });
        setData(response.data.records);
      } catch (error) {
        console.error('Error fetching data from Airtable:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-md h-screen overflow-y-auto divide-y divide-gray-300 dark:divide-gray-700">
      {loading ? (
        <div className="flex justify-center items-center h-full">
          <p>Loading...</p>
        </div>
      ) : (
        data.map((item) => (
          <div key={item.id} className="cursor-pointer" onClick={() => onSelect(item)}>
            <div className="max-w-1xl mx-auto mt-8">
              <div className="border-l-2 border-gray-500 pl-8">
                <div className="flex flex-col md:flex-row md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-sm font-bold mb-2">{item.fields.Notes}</h3>
                    <p className="text-gray-600 text-sm">{item.fields.Date}</p>
                    <p className={`text-sm ${item.fields.status === "TRUE" ? "text-green-500" : "text-red-500"}`}>
                      {item.fields.status}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ListView;
