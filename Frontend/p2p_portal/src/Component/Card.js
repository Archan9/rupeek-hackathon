import React from "react";

const Card = (props) => {
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
      <div className="d-flex justify-content-between">
        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">Accept</button>
        <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded ml-4">Reject</button>
      </div>
    </div>
  );
};

export default Card;
