// ImageChooser.js
import React, { useState } from 'react';
// import axios from "axios";

export default function ImageChooser() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOption = () => {
    // axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">

      <h2 className="text-2xl font-semibold mb-4">Choose your option: </h2>
        <div>
          <select value={selectedOption} onChange={handleOptionChange}>
            <option className="block text-gray-700 text-sm font-bold mb-2" value="">Take Loan</option>
            <option value="option1">Take Loan from Friends & Family</option>
            <option value="option2">Take Loan from Strangers</option>
          </select>
          {/* {selectedOption && <p>Selected Option: {selectedOption}</p>} */}
        </div>

        <p className="block text-gray-700 text-sm font-bold mb-2 pt-6 pl-2"> Give Loan </p>
        <p className="block text-gray-700 text-sm font-bold mb-2 pt-6 pl-2"> Track Bank Loan </p>
        
        <div className="pt-4 pl-2">
          <button
                type="button"
                onClick={handleOption}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none"
              >
                Done
          </button>
        </div>
      </div>
    </div>
  );
};

