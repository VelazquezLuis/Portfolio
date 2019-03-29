import React, {Component} from 'react';
import './Head.css';
import Nav from '../nav/Nav.js';

class Head extends Component {


  render() {
    return(
      <div class="jumbotron" id="home">
        <h1 class="display-4 headTitle">Hello world! My name is Luis J. Velazquez</h1>
        <p class="lead titleDescription">I am a front end web developer.</p>
        <hr class="my-4"/>
        <a class="btn btn-primary btn-lg" href="#work" role="button">View my work</a>
      </div>
    );
  }
}

export default Head;
