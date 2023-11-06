const regUser = /^[a-zA-ZÀ-ÿ\s]{1,40}$/;
const regPassword = /^[A-Za-z0-9]{6,}$/;

export function validateCredentials(e, type) {
  switch (type) {
    case "user":
      return regUser.test(e);
 
    case "password":
      return regPassword.test(e);
  }
}

/**
 * @GET_ELEMENTS CAPTURE
 */
export function getElementHTML(name) {
  return document.getElementById(name);
}

/**
 * @REMOVE_ADD_STYLES_CLASS
 */
export function addRemoveClass(element, flag) {
  if (flag) {
    element.classList.add("oculto");
  } else {
    element.classList.remove("oculto");
  }
}
