import React, {Component} from 'react';
import './topScroll.css';
import $ from "jquery";


class TopScroll extends Component {
//   $(function () {
//     $('#scrollToTop').bind("click", function () {
//         $('html, body').animate({ scrollTop: 0 }, 1200);
//         return false;
//     });
// });
  
  render() {
    
$(document).ready(function(){

  $(window).scroll(function(){
    if($(this).scrollTop() > 40){
      $(`#myBtn`).fadeIn();
    } else {
      $(`#myBtn`).fadeOut();
    }
  });

  $("#myBtn").click(function(){
    $(`html,body`).animate({scrollTop: 0},800)
  });
});
    
    return (
      
      <div>
      <button  id="myBtn" title="Go to top">&#x25B2;</button>
        <p>asdddddddddddddd</p>
      </div>
      
    );
  }
}

export default TopScroll;
