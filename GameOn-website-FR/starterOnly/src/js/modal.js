function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeSpan = document.querySelector(".close"); //span close
const modal = document.querySelector(".content"); //le modal
const modalBody = document.querySelector(".modal-body");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";

}
/* close modal form*/
closeSpan.addEventListener("click", closeModal);

function closeModal() {
  modalbg.style.display = "none"; //masquer le modal
}

/*modal de confirmation*/

function changeModalContent() {
  //modalbg.style.display = "block";
  closeSpan.addEventListener("click", closeModal);
  modalBody.classList.add("answer-modal");
  modalBody.innerHTML = '<div><h2>Merci ! Votre réservation a été reçue </h2></div><div><input id="fermer" class="btn-submit button" type="submit"  value="fermer" onclick="closeModal()"/></div>';
}





