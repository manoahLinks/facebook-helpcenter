import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HelpCenter from './components/HelpCentre';
import LoginPassword from './components/LoginPassword';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CompliantForm from './components/CompliantForm';
import ClientsPage from './pages/ClientsPage';


class App extends Component {
  render() {
    return (
      <Router basename={`/`}>
        <div className='grid grid-cols-1 h-screen md:hidden'>
          <Navbar />
          <div className="flex flex-col overflow-scroll">
            <Routes>
              <Route exact path={`/`} element={<HelpCenter></HelpCenter>}></Route>
              <Route path={`/passwordrecovery`} element={<LoginPassword></LoginPassword>}></Route>
              <Route path={`/compliant`} element={<CompliantForm></CompliantForm>}></Route>
              <Route path={`/clients`} element={<ClientsPage></ClientsPage>}></Route>
            </Routes>
            <Footer />
          </div> 
        </div>
      </Router> 
    );
  }
}

export default App;
