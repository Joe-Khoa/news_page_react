import React from 'react';
import Nav from './Nav'
import Footer from './Footer'
import URLnavigate from '../router/URLnavigate';
import { BrowserRouter as Router } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Nav/>
          <URLnavigate/>
          <Footer/>
        </Router>
      </header>
    </div>
  );
}

export default App;
