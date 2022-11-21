import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HelpCenter from './components/HelpCentre';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className='grid grid-cols-1'>
          <Navbar />
          <div className="flex flex-col">
            <Routes>
              <Route exact path={`/`} element={<HelpCenter></HelpCenter>}></Route>
            </Routes>
          </div>
          <Footer />
        </div>
      </Router> 
    );
  }
}

export default App;
