import React, {Component} from 'react';
import './Form.css';

class Form extends Component {


  render() {
    return(
     
      <div id= "myFrom" class="container contact-form">
      <h1>Contact form</h1>
      

      <div class="row">
      
        <div class="col-md-6">
          <div class="bd-example">
            <address>
              <strong>Front end Web Developer</strong><br/>
              You may reach me by here, by email or phone.<br/>
              Riverside, CA 92504<br/>
              <abbr title="Phone">P:</abbr> (951) 665-9669
            </address>

            <address>
              <strong>Luis Javier Velazquez</strong><br/>
              <a href="mailto:javiervelazquez113@yahoo.com">javiervelazquez113@yahoo.com</a>
            </address>
          </div>
        </div>

        <div class="col-md-6">
          
          <div class="form-group">
          <label for="nameInput">Name</label>
          <input type="email" class="form-control" id="nameInput" aria-describedby="nameInputHelp" placeholder="Enter name"/>
          </div>

          <div class="form-group">
          <label for="inputEmail1">Email address</label>
    <input type="email" class="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>

          <div class="form-group">
            <label>Massage</label>
            <textarea  class="form-control" rows="7"></textarea>
          </div>

          <div class="form-group">
            <button class="btn btn-primary btn-block">Send</button>
          </div>

        </div>

      </div>

    </div>

      );
    }
  }
  
  export default Form;
  