import React from "react";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
  const navigate = useNavigate();
  console.log(props)
  const handleAccept = () => {
    navigate("/dashboard");
  }
  
  return (
    <div className="bg-white rounded-lg shadow-md p-4 card w-64">
      <img
        src={props.imageUrl}
        alt={props.title}
        className="w-32 h-32 object-cover rounded-t-lg"
      />
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{props.title}</h2>
        <p>{props.description}</p>
      </div>
      {props.showBtn && <div className="d-flex justify-content-between">
        <button onClick={handleAccept} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Accept</button>
      </div>}
    </div>
  );
};