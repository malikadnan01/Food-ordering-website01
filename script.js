let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}
window.onscroll = () =>{
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{document.querySelector('#scroll-top').classList.remove('active');

  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 2000);
}
window.onload = fadeOut();

function createFoodNameInputs() {
  var numberitem = document.getElementById('num_items').value;
  var foodNameContainer = document.getElementById('foodNames');
  foodNameContainer.innerHTML = '';

  if (numberitem >= 1) {
      for (let i = 1; i <= numberitem; i++) {
        var newDiv = document.createElement('div');
         newDiv.classList.add('inputBox');

          // foodname 
          var foodNameInput = document.createElement('input');
          foodNameInput.setAttribute('type', 'text');
          foodNameInput.setAttribute('placeholder', 'food name');
          newDiv.appendChild(foodNameInput);

          // items
          var foodNameInput = document.createElement('input');
          foodNameInput.setAttribute('type', 'number');
          foodNameInput.setAttribute('placeholder', 'Quantity');
          newDiv.appendChild(foodNameInput);
          foodNameContainer.appendChild(newDiv);
      }
  }
}
createFoodNameInputs();

var order_btn = document.getElementById('orderbtn');
// function validateForm() {
//   var name = document.getElementById('name').value;
//   var email = document.getElementById('email').value;
//   var phone = document.getElementById('phone').value;
//   var numItems = document.getElementById('num_items').value;
//   var address = document.getElementById('address').value;

//   var namex = /^[a-zA-Z\s]+$/;
//   var emailx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   var phonex = /^[0-9]{10}$/;

//   var isValid = true;
//   var errorMessage = "";

//   if (!namex.test(name)) {
//       errorMessage += "Please enter a valid name.\n";
//       return false;
//   }

//   if (!emailx.test(email)) {
//       errorMessage += "Please enter a valid email address.\n";
//       return false;
//   }

//   if (!phonex.test(phone)) {
//       errorMessage += "Please enter a valid 10-digit phone number.\n";
//       return false;
//   }

//   if (numItems === '' || numItems <= 0) {
//       errorMessage += "Please enter a valid number of items.\n";
//       return false;
//   }

//   if (address === '') {
//       errorMessage += "Please enter your address.\n";
//       return false;
//   }

//   return true;
// }
order_btn.addEventListener('click', function(event){
  // if (!validateForm()) {
  //   event.preventDefault(); // Prevent form submission if validation fails
  // }
  window.open('payment.html');
});


