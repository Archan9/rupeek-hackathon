import React, { useState } from "react";
import axios from "axios";
const UserDetails = () => {
  const [number, setnumber] = useState("");
  const [creditScore, setcreditScore] = useState("");
  const [AadhaarNumber, setAadhaarNumber] = useState("");
  const [kyc, setkyc] = useState("");
  const [gold, setgold] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const localdata = JSON.parse(localStorage.getItem("userdetail"));
    const {data} = JSON.parse(localStorage.getItem("jwt"));
    console.log(localdata, data);
    try {
      axios
        .post(
          "https://rupeek-backend.onrender.com/api/user",
          {
            username: localdata.name,
            phone: localdata.number,
            email: "prem12@gmal.com",
          },
          {
            headers: {
              Authorization: `JWT ${data}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => {
          console.log(response);
        });
      // axios
      //   .post(
      //     "https://rupeek-backend.onrender.com/api/user/loan/open",
      //     {
      //       amount: gold * 5000,
      //       reason: creditScore,
      //     },
      //     {
      //       headers: {
      //         authorization: data,
      //         "Content-Type": "application/json",
      //       },
      //     }
      //   )
      //   .then((response) => {
      //     console.log(response);
      //   });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-8 flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-center">
          User Details
        </h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="Bank name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Mob Number
            </label>
            <input
              type="text"
              value={number}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setnumber(e.target.value)}
              placeholder="Mobile"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="Acccount"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              creditScore Number
            </label>
            <input
              type="text"
              value={creditScore}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setcreditScore(e.target.value)}
              placeholder="creditScore Number"
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
              placeholder="Aadhaar Number"
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
              placeholder="Gold Weight"
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
              <option value="yes">YES</option>
              <option value="no">NO</option>
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
