import React from 'react';

const Photo = () => {
  const url = `profile.png`;
  return (
    <div>
      <div className="backbox">
      </div>
      <img src={url} alt="photo" className="photo" />
    </div>
  );
};

export default Photo;
