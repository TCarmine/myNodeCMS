import React from 'react'
import ReactDOM from 'react-dom';
import BerlinI from '../server/img/Berlin.jpg';

const App = () => {
  return (
    <div>
    <h1> List of last Posts </h1>
   {/* 
    This a random image I made, feel free to skip this in your code
    If you want to add your own image you can add it to the server/public/img folder 
    */}
      <img style={{width: '300px', height: '300px'}} src={BerlinI}/>
    <h2>Last Published Blog Posts</h2>
    <ul>
      <li>Anonymous Function aren't always Lambda and viceversa</li>
      <li>Debug Promises in Visual Studio Code</li>
      <li>Keystone, let's start with React Frontend</li>
    </ul>
    <h2> Others </h2>
    <p> Check List </p>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.querySelector('.react-container'));