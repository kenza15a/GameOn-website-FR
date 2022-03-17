
/*elements dom*/
let formReservation = document.getElementById("reserve"); /*formulaire*/
let prenom = document.getElementById("first");
let nom = document.getElementById("last");
let nombreConcours = document.querySelector("#quantity");; /*nombre de concours*/
let email = document.getElementById("email");
let birthdate = document.querySelector("#birthdate");
let tabLocations = formReservation.location;
let conditions = formReservation.conditions;




/*erreurs*/
const erreurPrenom = document.querySelector("#errorprenom");
const erreurNom = document.querySelector("#errornom");
const mailerror = document.querySelector("#mailerror");
const concoursError = document.querySelector("#concourserror");
const locationError = document.querySelector("#locationerror");
const errorConditions = document.querySelector("#conditionserror");
const dateError = document.querySelector("#dateerror");



/*regex*/
let regNames = /^[a-zA-Z]+/;  /*les noms commencesnt par des lettres*/
let regMail = /(([(_)a-zA-Z0-9\.\-]{1,})(@)([a-zA-Z0-9\-]+)(\.)([a-zA-Z]{2,3})((\.)([a-z]{2,3}))?)/;
let regConcours = /^[0-9]$|^[1-9][0-9]$|^(99)$/;
let regDate = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;



/*fonctions de validation*/


function validPrenom() {
    var state = false;
    var message = ""

    if (prenom.value.length < 2) {
        prenom.style.border = " solid red";
        message = " Veuillez entrer 2 caractères ou plus pour le champ du prenom ";
    }
    else {
        if (regNames.test((prenom.value))) {
            message = ""
            state = true;
            prenom.style.border = " solid transparent";
        }
        else {
            prenom.style.border = " solid red";
            message = " Mauvais format";
        }
    }
    erreurPrenom.innerText = message;
    return state;
}


/*validation nom*/
function validNom() {
    var state = false;
    var message = "";

    if (nom.value.length < 2) {
        nom.style.border = " solid red";
        message = " Veuillez entrer 2 caractères ou plus pour le champ du nom ";
    }
    else {
        if (regNames.test((nom.value))) {
            message = ""
            state = true;
            nom.style.border = " solid transparent";
        } else {
            nom.style.border = " solid red";
            message = " Mauvais format ";
        }
    }
    erreurNom.innerText = message;
    return state;
}


function validMail() {
    var state = false;
    var message = "";

    if (regMail.test(email.value)) {
        message = "";
        state = true;
        email.style.border = " solid transparent";

    }

    else {
        email.style.border = " solid red";
        message = " email non valide ";
    }

    mailerror.innerText = message;
    return state;
}


/*validation concours*/
const validConcours = () => {
    var state = false;
    var message = ""
    if (nombreConcours.value.length > 0) {
        if (regConcours.test(nombreConcours.value)) {
            message = ""
            state = true;
            nombreConcours.style.border = " solid transparent";

        } else {
            nombreConcours.style.border = " solid red";
            message = " veuillez inserer un chiffre  entre 0 et 99 ";
        }
    } else {
        nombreConcours.style.border = " solid red";
        message = "Ce champs ne doit pas etre vide ";
    }
    concoursError.innerText = message;
    return state;
}


/*check location radio*/
const validateLocation = () => {
    var state = false;
    var message = "";
    for (i = 0; i < tabLocations.length; i++) {
        if (tabLocations[i].checked) {
            state = true;
            var message = "";
            break;
        } else {
            message = "Vous devez choisir une option!"
        }
    }
    locationError.innerText = message;
    return state;
}

/*validation des conditions*/

const validConditions = () => {
    var state = false;
    var message = "";
    if (conditions.checked) {
        state = true;
    } else {
        message = "Vous devez vérifier que vous acceptez les termes et conditions.";
    }
    errorConditions.innerText = message;
    return state;
}
/*verification de la date*/
const validDate = () => {
    var state = false;
    message = "";
    if (!(regDate.test(birthdate.value))) {
        message = "Vous devez renseigner votre date de naissance";
        birthdate.style.border = "solid red";
    } else {
        state = true;
        birthdate.style.border = "solid transparent";
        message = "";
    }
    dateError.innerText = message;
    return state;
}

function validForm() {
    var prenomValidState = validPrenom();
    var nomValidState = validNom();
    var validMailState = validMail();
    var validLocationState = validateLocation();
    var validConditionState = validConditions();
    var validConcoursState = validConcours();
    var validDateState = validDate();
    var state = false;
    if (prenomValidState && nomValidState && validConcoursState && validMailState && validLocationState && validConditionState&& validDateState) {
        state = true;
    }
    return state;
}

/*events*/
prenom.addEventListener("input", validPrenom);
nom.addEventListener("input", validNom);
nombreConcours.addEventListener("input", validConcours);
email.addEventListener("input", validMail);
birthdate.addEventListener("input", validDate);
//location.addEventListener("RadioStateChange", validateLocation);




/*verification generale*/
formReservation.addEventListener('submit', function (e) {

    if (!validForm()) {

        e.preventDefault();

    } else {
        /*afficher les informations*/
        alert("Merci : " + prenom.value + " ! Votre réservation a été reçue"
        );
    }
}
);

