import React, { useState, useEffect } from 'react';
import Navbar from './compenents/Navbar'; // Fixed typo: 'compenents' -> 'components'
import Textform from './compenents/Textform'; // Fixed typo
import About from './compenents/About'; // Fixed typo

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mystyle, setMystyle] = useState({
    color: 'black',
    backgroundColor: 'white',
  });

  const [btntext, setBtntext] = useState('Enable dark mode');

  // Apply the background color to the body element
  useEffect(() => {
    document.body.style.backgroundColor = mystyle.backgroundColor;
  }, [mystyle]);

  const togglestyle = () => {
    if (mystyle.color === 'black') {
      setMystyle({
        color: 'white',
        backgroundColor: 'black',
      });
      setBtntext('Enable light mode');
    } else {
      setMystyle({
        color: 'black',
        backgroundColor: 'white',
      });
      setBtntext('Enable dark mode');
    }
  };

  return (
    <Router>
      <Navbar title="TextUtils" mystyle={mystyle} togglestyle={togglestyle} btntext={btntext} />
     
      <div className="container" style={{ color: mystyle.color, backgroundColor: mystyle.backgroundColor }}>
        <Routes>
          <Route path="/about" element={<About mystyle={mystyle} />} />
          <Route path="/" element={<Textform heading="Enter your text here" mystyle={mystyle} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
