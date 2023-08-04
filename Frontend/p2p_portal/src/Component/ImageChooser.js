// ImageChooser.js
import React, { useState } from "react";
import {useNavigate} from "react-router-dom"
// import axios from "axios";

export default function ImageChooser() {
  const [selectedOption, setSelectedOption] = useState(null);
const navigate = useNavigate()
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleOption = () => {
    // axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
    if(selectedOption === "Track"){
       navigate("/TrackBankLoan")
    } else if(selectedOption === "Take") {
         navigate("/UserDetails")
    } else {
      navigate("/profile")
    }
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Choose your option: </h2>
        <div>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="Take"
              className="form-radio text-indigo-600"
              checked={selectedOption === "Take"}
              onChange={handleOptionChange}
            />
            <span class="text-gray-800">Take Loan</span>
          </label>
          <br />
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="Give"
              checked={selectedOption === "Give"}
              onChange={handleOptionChange}
            />
            <span class="text-gray-800">Give Loan</span>
          </label>
          <br />
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              value="Track"
              checked={selectedOption === "Track"}
              onChange={handleOptionChange}
            />
            <span class="text-gray-800">Track Bank Loan</span>
          </label>
          <br />
        </div>
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
}
