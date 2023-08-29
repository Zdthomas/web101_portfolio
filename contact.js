const placeForResults = document.getElementById("results")

const form = document.querySelector(`#contact-form`);
const nameInput = document.querySelector(`#name`);
const emailInput = document.querySelector(`#email`);
const ageInput = document.querySelector(`#age`);
const dateInput = document.querySelector(`#date`);
const foodInput = document.querySelector(`#food`);


const message = document.querySelector(`#message`);

// new URLSearchParams(window.location.search).forEach((value, name) => {
//   placeForResults.append(`${name} : ${value}`)
//   placeForResults.append(document.createElement("br"))
// })

let name;
let email;
let food;

form.addEventListener(`submit`, function(event) {
  event.preventDefault()
  const p = document.createElement(`p`);
  p.textContent = "Hi, " + nameInput.value + " welcome to the site!";

  message.appendChild(p);

})

form.addEventListener(`submit`, function(event) {
  event.preventDefault()

  const p = document.createElement(`p`);
  p.textContent = "Is " + emailInput.value + " the email you want to use?";

  message.appendChild(p);
})

form.addEventListener(`submit`, function(event) {
  

  const p = document.createElement(`p`);
  p.textContent = "You are " + ageInput.value + " years old. And born on " + dateInput.value + ".";

  message.appendChild(p);
})

// form.querySelector("input:checked"), function(event) {
//   event.preventDefault()

//   const p = document.createElement(`p`);
//   p.textContent = "Is " + foodInput + " the email you want to use?";

//   message.appendChild(p);

// }

// nameInput.addEventListener('input', function(event) {
//  console.log(event.target.value)
//  username = event.target.value; 
// })




// check video at 33:15

// Find out how to display things with multiple options like checkbox.