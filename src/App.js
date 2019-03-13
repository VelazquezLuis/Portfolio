import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import './bootstrap/dist/css/bootstrap.css'

import Nav from './components/header/nav/Nav'


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="container">
          <Nav/>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <a href="https://github.com/VelazquezLuis/Portfolio/blob/master/src/resume/resume-Velazquez.docx" download>Link text</a>
        </header>
      </div>
    );
  }
}

export default App;
