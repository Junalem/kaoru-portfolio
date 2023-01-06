import React from 'react';

const Photo = () => {
  const url = `profile.png`;
  return (
    <div className="my-self">
      <div className="backbox">
      </div>
      <img src={url} alt="photo" className="photo" />
      <div className="maine-title">
        <h1>Kaoru Kure</h1>
        <p>Photographer. Stand with Ukraine, Stand in Ukraine!</p>
      </div>
    </div>
  );
};

export default Photo;
