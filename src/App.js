import React from 'react';
import './App.css';
import './css/main.css';
import Header from './components/HeaderComponent/Header';
import Footer from './components/FooterComponent/Footer';
import Home from './components/HomeComponent/Home';

function App() {
  return (
    <div className="page-wrapper">
      <Header/>
      <main className='main-content'>
        <Home/>
      </main>
      <Footer/>
    </div>
  );
}

export default App;
