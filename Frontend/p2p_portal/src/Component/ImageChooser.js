// ImageChooser.js
import React, { useState } from 'react';

export default function ImageChooser() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="max-w-md w-full p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Choose between two images:</h2>
      <div className="image-container inline-block">
        <img
          src="https://i.postimg.cc/HjWKHHzh/Borrowing.jpg"
          alt="Lend"
          className={selectedImage === 'image1' ? 'selected' : ''}
          onClick={() => handleImageSelect('image1')}
        />
      </div>
      <div className="image-container inline">
        <img
          src="https://i.postimg.cc/kDjHgZhX/Lending.jpg"
          alt="Borrow"
          className={selectedImage === 'image2' ? 'selected' : ''}
          onClick={() => handleImageSelect('image2')}
        />
      </div>
      {selectedImage && <p>You have selected {selectedImage === 'image1' ? 'Image 1' : 'Image 2'}</p>}
    </div>
    </div>
  );
};

