import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap/dist/css/bootstrap.css';

import Nav from './components/header/nav/Nav';
import Head from './components/header/Head/Head';
import Intro from './components/Intro/Intro';
import Work from './components/work/Work';
import Form from './components/form/Form';
import Footer from './components/footer/Footer';
import TopScroll from './components/topScroll/topScroll';
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
        <Form/>
        <Footer/>
        <TopScroll/>
      </div>
    );
  }
}

export default App;
