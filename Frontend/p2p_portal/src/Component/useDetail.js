import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const UserDetails = () => {
  const [creditScore, setcreditScore] = useState("");
  const [AadhaarNumber, setAadhaarNumber] = useState("");
  const [kyc, setkyc] = useState("");
  const [gold, setgold] = useState("");
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    const localdata = JSON.parse(localStorage.getItem("userdetail"));
    const jwt = JSON.parse(localStorage.getItem("jwt"));
    try {
      axios
        .put(
          "https://rupeek-backend.onrender.com/api/user",
          {
            username: localdata.name,
            phone: localdata.number,
            aadhaarNumber: AadhaarNumber,
            kyc: kyc,
            gold: gold,
          },
          {
            headers: {
              authorization: `JWT ${jwt}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
        });
      axios
        .post(
          "https://rupeek-backend.onrender.com/api/user/loan/open",
          {
            amount: gold * 5000,
            reason: creditScore,
          },
          {
            headers: {
              authorization: `JWT ${jwt}`,
            },
          }
        )
        .then((response) => {
          console.log(response);
          if (jwt) navigate("/profile");
          else navigate("/");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          User Details
        </h2>
        <form>
          <div className="mb-6">
            <label
              htmlFor="Acccount"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Credit Score
            </label>
            <input
              type="text"
              value={creditScore}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setcreditScore(e.target.value)}
              placeholder="Enter Credit Score"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="Aadhaar"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Aadhaar Number
            </label>
            <input
              type="text"
              value={AadhaarNumber}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setAadhaarNumber(e.target.value)}
              placeholder="Enter Aadhaar Number"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="gold"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Gold Weight (in Grams)
            </label>
            <input
              type="text"
              value={gold}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setgold(e.target.value)}
              placeholder="Enter Gold Weight (in Grams)"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="kyc"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              KYC
            </label>
            <select
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              name="kyc"
              onSelect={(e) => setkyc(e.target.value)}
              id="educationType"
            >
              <option value='true'>YES</option>
              <option value='false'>NO</option>
            </select>
          </div>

          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleAdd}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserDetails;
