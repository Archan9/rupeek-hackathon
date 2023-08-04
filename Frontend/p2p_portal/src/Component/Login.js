// Login.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Login() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [otp, setOTP] = useState("");
  const navigate = useNavigate();
  const handleOTP = () => {
    let userdetails = {
      name,
      number,
    };

    try {
      axios
        .post("https://rupeek-backend.onrender.com/api/user/sendotp", {phone: number})
        .then((response) => {
          localStorage.setItem("userdetail", JSON.stringify(userdetails));
        });
    } catch (err) {
      console.log(err);
    }
  };

  const handleProceed = () => {
    const localdata = JSON.parse(localStorage.getItem("userdetail"));
    try {
      axios
        .post("https://rupeek-backend.onrender.com/api/user/verify", {
          phone: localdata.number,
          code: otp,
        })
        .then((response) => {
          const jwt = JSON.stringify(response.data);
          localStorage.setItem("jwt", jwt);
          if (jwt) navigate("/choose");
          else navigate("/");
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-gradient-to-br from-blue-500 to-purple-500 min-h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              value={name}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setName(e.target.value)}
              placeholder="Enter Name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="number"
              className="block text-gray-700 text-sm font-bold mb-2"
            >
              Phone Number
            </label>
            <input
              type="number"
              value={number}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setNumber(e.target.value)}
              placeholder="Enter Number Here"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleOTP}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none"
            >
              GetOtp
            </button>
          </div>

          <div className="mb-6 mt-6">
            <label
              htmlFor="otp"
              className="block text-gray-700 text-sm font-bold mb-2"
            ></label>
            <input
              type="otp"
              value={otp}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setOTP(e.target.value)}
              placeholder="Enter OTP Here"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              onClick={handleProceed}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md focus:outline-none"
            >
              Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
