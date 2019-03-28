import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap/dist/css/bootstrap.css';

import Nav from './components/header/nav/Nav';
import Intro from './components/Intro/Intro';
import Work from './components/work/Work';
import Footer from './components/footer/Footer';
import Head from './components/header/Head/Head';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="container ">
        <Nav/>
        </header>
        <Head/>
        <Intro/>
        <Work/>
        <Footer/>
      </div>
    );
  }
}

export default App;
