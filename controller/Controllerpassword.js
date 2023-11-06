import  credentials  from "../model/Modelpassword.js";
import {
  addRemoveClass,
  getElementHTML,
  validateCredentials,
} from "../assets/script/script.js";

/**
 * @CAPTUR_ELEMENTS
 */
const buttonlogIn = getElementHTML("buttonlogIn");
const login = getElementHTML("login");
const expends = getElementHTML("expends");
const error = getElementHTML("error");
const user = getElementHTML("user");
const password = getElementHTML("password");
const userError = getElementHTML("userError");
const passwordError = getElementHTML("passwordError");

/**
 * @LOGIN
 */
function logInEnter() {
  
   const loginResult = credentials.find((credential) => {
   console.log(credential.usuario);
   
     if (
       user.value == credential.user &&
       password.value == credential.password
     ) {

       return credential;
     }
   });

   if (loginResult !== undefined) {
     addRemoveClass(login, true);
     addRemoveClass(expends, false);
     addRemoveClass(error, true);
   } else {
     addRemoveClass(login, false);
    addRemoveClass(expends, true);
    addRemoveClass(error, false);
   }

}

/**
 * @LISTENERS
 */
buttonlogIn.addEventListener("click", logInEnter);
user.addEventListener("input", (e) => {
  const result = validateCredentials(e.target.value, "user");
  if (!result) {
    addRemoveClass(userError, false);
    buttonlogIn.setAttribute("disabled", "true");
    user.style.background = "#FC5002";

  } else {
    addRemoveClass(userError, true);
    +buttonlogIn.removeAttribute("disabled");
    user.style.background = "#3FE7E0";
  }
});

  password.addEventListener("input", (e) => {
  const result = (e.target.value, "password");
  if (!result) {
    addRemoveClass(passwordError, false);
    buttonlogIn.setAttribute("disabled", "true");
    password.style.background = "#FC5002";
    
  } else {
    addRemoveClass(passwordError, true);
    buttonlogIn.removeAttribute("disabled");
    password.style.background = "#3FE7E0";
  }
});
