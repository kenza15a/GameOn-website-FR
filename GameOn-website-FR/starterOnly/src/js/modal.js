
const icon = document.querySelector('.icon'); /*selectionne le bouton nav*/
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
icon.addEventListener("click", editNav);

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeSpan = document.querySelector(".close"); //span close
const modal = document.querySelector(".content"); //le modal
let modalBody = document.querySelector(".modal-body");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";

}
/* close modal form*/


const closeModal = () => {
  modalbg.style.display = "none"; //masquer le modal
}
closeSpan.addEventListener("click", closeModal);

/*modal de confirmation*/

/*const changeModalContent = () => {
  //modalbg.style.display = "block";
  modalBody.classList.add("answer-modal");
  //alert("i work");
  modalBody.innerHTML = ' <form name="answer" id="answer" action="./index.html" method="get"><div><h2>Merci ! Votre réservation a été reçue </h2></div><div><input id="fermer" class="btn-submit button" type="submit"  value="fermer" onclick="closeModal()"/></div></form>';
}
*/
