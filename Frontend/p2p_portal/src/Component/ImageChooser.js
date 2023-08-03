// ImageChooser.js
import React, { useState } from 'react';
import axios from "axios";

export default function ImageChooser() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('token');
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
     
      <h2 className="text-2xl font-semibold mb-4">Track your Loan:</h2>
     <div className='flex gap-4'> 
      <div className="image-container items-center justify-center">
        <img
          src="https://i.postimg.cc/nrw5jCY5/png-clipart-flat-design-graphy-friends-love-child-thumbnail-removebg-preview.png"
          alt="Lend"
          className={selectedImage === 'image1' ? 'selected' : ''}
          onClick={() => handleImageSelect('image1')}
        />
        <p className="text-2 font mb-4">Friends & Family</p>
      </div>
      <div className="image-container  items-center justify-center">
        <img
          src="https://i.postimg.cc/13S11NXR/360-F-136529221-MNEOQKI2bcp-LUe230-CTuh-JHYRN4-Ba-FGm.jpg"
          alt="trackBank"
          className={selectedImage === 'image2' ? 'selected' : ''}
          onClick={() => handleImageSelect('image2')}
        />
        <p className="text-2 font mb-4">Track Bank Loan</p>
      </div>
      </div>
      {selectedImage && <p>You have selected {selectedImage === 'image1' ? 'Image 1' : 'Image 2'}</p>}
    </div>
    </div>
  );
};

