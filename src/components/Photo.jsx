import React from 'react';

const Photo = () => {
  const url = `https://images.unsplash.com/photo-1566275529824-cca6d008f3da?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGhvdG98ZW58MHx8MHx8&w=1000&q=80`;
  return (
    <img src={url} alt="photo" className="photo" />
  );
};

export default Photo;
