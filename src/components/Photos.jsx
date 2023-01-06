import React from "react";

const Photos = () => {
  const Photo1 = `photo1.png`;
  const Photo2 = `photo2.png`;
  const Photo3 = `photo3.png`;
  const Photo4 = `photo4.png`;
  const Photo5 = `photo5.png`;
  const Photo6 = `photo6.png`;
  const Photo7 = `photo7.png`;
  const Photo8 = `photo8.png`;
  const Photo10 = `photo10.png`;
  const Photo11 = `photo11.png`;
  const Photo12 = `photo12.png`;
  const Photo13 = `photo13.png`;
  return (
  <div className="photos-list">
    <h1>My Portfolio</h1>
     <img src={Photo1} alt="photo" className="photos" />
     <img src={Photo2} alt="photo" className="photos" />
     <img src={Photo3} alt="photo" className="photos" />
     <img src={Photo4} alt="photo" className="photos" />
     <img src={Photo5} alt="photo" className="photos" />
     <img src={Photo6} alt="photo" className="photos" />
     <img src={Photo7} alt="photo" className="photos" />
     <img src={Photo8} alt="photo" className="photos" />
     <img src={Photo10} alt="photo" className="photos" />
     <img src={Photo11} alt="photo" className="photos" />
     <img src={Photo12} alt="photo" className="photos" />
     <img src={Photo13} alt="photo" className="photos" />
  </div>
    )
}
 export default Photos;




// import React from 'react';
// import Gif from './Gif';

// const GifList = (props) => {
//   const { gifIdList, changeSelectGif } = props;
//   return (
//     <div className="gif-list">
//       { gifIdList.map(
//         (gifId) => <Gif gifId={gifId} key={gifId} changeSelectGif={changeSelectGif} />
//       )}
//     </div>
//   );
// };

// export default GifList;
