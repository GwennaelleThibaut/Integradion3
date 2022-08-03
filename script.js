// - Function
// - If
// - DOM (éléments form)
// (camelCase)

const submitButton = document.getElementById("submit");

function errorIfEmptyField() {

    const fnameInput = document.getElementById("fname");
    const lnameInput = document.getElementById("lname");
    const emailInput = document.getElementById("email");
    const pwdInput = document.getElementById("pwd");

    if (fnameInput.value == "" || lnameInput.value == ""  || emailInput.value == "" || pwdInput.value == "" ) {
        alert("Field is empty!")
    }
    
}

submitButton.addEventListener("click", (e) => {
    e.preventDefault();
    errorIfEmptyField()
})
