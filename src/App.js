import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap/dist/css/bootstrap.css'

import Nav from './components/header/nav/Nav'
import Footer from './components/footer/Footer';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="container">
          <Nav/>
          
          
        </header>
        <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and ddddsave to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          
          <Footer/>
      </div>
    );
  }
}

export default App;
