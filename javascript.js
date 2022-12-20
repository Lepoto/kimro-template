var shopcart = document.querySelector('.shopping-cart');
var body = document.querySelector('#home');

document.querySelector('#cart-btn').onclick = () =>{
  shopcart.classList.toggle('active');
}

let user = document.querySelector('.login-form');

document.querySelector('#user-btn').onclick = () =>{
  user.classList.toggle('active');
}

let menubar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
  menubar.classList.toggle('active');
}


// var prevScrollpos = window.pageYOffset;
//
// window.onscroll = function() {
//   var currentScrollpos = window.pageYOffset;
//
//   if (prevScrollpos > currentScrollpos){
//    document.getElementById('headerer').style.top = "5%";
//   }
//   else {
//     document.getElementById('headerer').style.top = "-10%";
//   }
//
//   prevScrollpos = currentScrollpos;
// }
