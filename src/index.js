import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
 import './index.css';
 import App from './App';
// import StarRating from './StarRating';
const root = ReactDOM.createRoot(document.getElementById('root'));
// function Text(){
//   const [movieRating,setMovieRating]=useState(0);
//   return (
//   <div>
//     <StarRating color="blue" onSetRating={setMovieRating}/>
//     <p>This movies was rated {movieRating} stars</p>
//   </div>
//   );
// }
root.render(
  <React.StrictMode>
     <App /> 
    {/* <StarRating maxRating={5} messages={["Terrible","Bad","Okay","Good","Amazing"]}/>
    <StarRating  size={24} color="red" defaultRating={3} ></StarRating>
    <Text/> */}
  </React.StrictMode>
);
