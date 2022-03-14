
/*validation*/
let formReservation = document.getElementById("reserve"); /*formulaire*/
let prenom = document.getElementById("first");
let nom = document.getElementById("last");
let nombreConcours=document.getElementById("quantity"); /*nombre de concours*/
const erreurPrenom = document.querySelector("#errorprenom");
const erreurNom = document.querySelector("#errornom");

function validPrenom(){
var state=false;
var message=""

if (prenom.value.length <2 ){
  prenom.style.border= " solid red";
    message=" Veuillez entrer 2 caractères ou plus pour le champ du prenom ";
}
else{
  message=""
  state=true;
  prenom.style.border= " solid transparent";
}
erreurPrenom.innerText=message;
return state;
}



/*validation nom*/
function validNom(){
  var state=false;
  var message=""
  
  if (nom.value.length <2 ){
    nom.style.border= " solid red";
      message=" Veuillez entrer 2 caractères ou plus pour le champ du nom ";
  }
  else{
    message=""
    state=true;
    nom.style.border= " solid transparent";
  }
  erreurNom.innerText=message;
  return state;
  }

function voidElement(element) {
var message="";
  if (element.value.trim()== "") {
    element.style.border="solid red";
    message="element vide";
    element.innerText=message;//didn,t work
    return true;
  }
  element.style.border="solid tranparent";
  element.nextSibling.innerText=message;
  return false;
  
}

/*let voidPrenom = voidElement(prenom.value);
let voidNom = voidElement(nom.value);
function errorMessage() {
  var message = "";
  switch (message) {
    case voidPrenom:
      message = "prenom vide";
      erreurPrenom.innerText = message;
      break;
    case voidNom:
      message = "nom vide";
      erreurNom.innerText = message;
      break;
  }
  //return message;
}
*/


formReservation.addEventListener('submit', function (e) {
  var prenomValidState = validPrenom();
  var nomValidState = validNom();
  var validconscours= voidElement(nombreConcours);
  if(prenomValidState== false || nomValidState== false || validconscours==true) {
    e.preventDefault();

  
  } else {
    alert("Merci ! Votre réservation a été reçue");
  }
}
);

