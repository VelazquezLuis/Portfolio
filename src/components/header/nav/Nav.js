import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component {
  
  render() {
    return(

        <div class="pos-f-t">          
          <nav class="navbar navbar-dark bg-dark">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <p className="white">Luis Javier velazquez</p>
          </nav>
          
          <div class="collapse" id="navbarToggleExternalContent">
            <div class="bg-dark p-4">
              <ul class=" nav flex-column">
                <li class="nav-item">
                  <a class="nav-link active" href="#">Active</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link disabled" href="#">Disabled</a>
                </li>
              </ul>
            </div>
          </div>            
        </div>
          
                
     
    );
  }
}

export default Nav;


// <a  data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
// <img class="img-thumbnail"  src={mo} alt="menuIcon"></img>
// </a>

// <div class="collapse" id="collapseExample">
// <div class="card card-body">

// <ul class="nav justify-content-end">
// <li class="nav-item">
// <a class="nav-link active" href="#">Active</a>
// </li>
// <li class="nav-item">
// <a class="nav-link" href="#">Link</a>
// </li>
// <li class="nav-item">
// <a class="nav-link" href="#">Link</a>
// </li>
// <li class="nav-item">
// <a class="nav-link disabled" href="#">Disabled</a>
// </li>
// </ul>

// </div>
// </div>