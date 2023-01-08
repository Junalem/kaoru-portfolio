import React from "react";

const Photos = () => {
  const photos = [`photo1.png`, `photo2.png`, `photo3.png`, `photo4.png`, `photo5.png`, `photo6.png`, `photo7.png`, `photo8.png`, `photo10.png`, `photo11.png`, `photo12.png`, `photo13.png`]
  return (
  <div className="photos-list">
    <h1>My Portfolio</h1>
    {photos.map( photo => <img src={photo} alt="photo" className="photos" />)}
  </div>
    )
}
 export default Photos;
