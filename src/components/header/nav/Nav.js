import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component {


  render() {
    return(

      <nav class="navbar header navbar-expand-md navbar-dark fixed-top bg-dark">
        <a class="navbar-brand ml-4 " href="#home"><i class="fas fa-code"></i></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-5 ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#about">About <span class="sr-only"></span></a>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#work">Work <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
            <li class="nav-item">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          
        </div>
      </nav>
     
    );
  }
}

export default Nav;
