import React from 'react';
import { BrowserRouter as Router,  Route, Switch } from "react-router-dom";
import './App.css';
import './css/main.css';
import Header from './components/HeaderComponent/Header';
import Footer from './components/FooterComponent/Footer';
import Home from './components/HomeComponent/Home';
import PageNotFound from './components/PageNotfound';
import Dashboard from './components/AccountComponent/Dashboard';

function App() {
  return (
      <Router basename={process.env.PUBLIC_URL}>
       <Header/>
        <main className='main-content page-main'>
        <Switch>
            <Route exact path="/" component={Home}/>

            <Route path="/account/" component={Dashboard}/>

            <Route path="*" component={PageNotFound}/>
          </Switch>
        </main>
        <Footer/>
      </Router>
  );
}

export default App;
