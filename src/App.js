import React, { Component, useState } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Photo from './components/Photo'
import Photos from './components/Photos';


const App = () => {
  return (
    <div>
      <div className="navbar">
        < Navbar />
      </div>
      <div>
        <div className="left-scene">
          < Photo />
        </div>
        <div className="right-scene">
          < About />
        </div>
      </div>
      <div className="middle-scene">
        < Photos />
      </div>
      <div className="footer">
        < Footer />
      </div>
    </div>
  );
};

export default App;



// class App extends Component {
//   constructor (props) {
//     super(props);
//     this.state = {
//       photos: []
//     };
//   }
// }
// function App() {
//   return (
//     <div>Hello from hello.js</div>
//     // // <div className="App">
//     // //   <header className="App-header">
//     // //     <img src={logo} className="App-logo" alt="logo" />
//     // //     <p>
//     // //       Edit <code>src/App.js</code> and save to reload.
//     // //     </p>
//     // //     <a
//     // //       className="App-link"
//     // //       href="https://reactjs.org"
//     // //       target="_blank"
//     // //       rel="noopener noreferrer"
//     // //     >
//     // //       Learn React
//     // //     </a>
//     // //   </header>
//     // </div>
//   );
// }

// export default App;
