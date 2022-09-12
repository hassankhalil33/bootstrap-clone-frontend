// Init Variables

const buttonClick = document.querySelector("#send");
const inputName = document.querySelector(".name");
const inputEmail = document.querySelector(".email");
const inputPhone = document.querySelector(".phone");
const inputMessage = document.querySelector(".message");
const feedbackName = document.querySelector(".feedback-name");
const feedbackEmail = document.querySelector(".feedback-email");
const feedbackPhone = document.querySelector(".feedback-phone");
const feedbackMessage = document.querySelector(".feedback-message");
const regEmail = /.....@.../;
const regPhone1 = /\+9613\d{6}$/;
const regPhone2 = /\+9617\d{7}$/;

// Functions

function validateInputFields () {
    if (inputName.value.length < 5) {
        feedbackName.textContent = "Name too short!";
    } else {
        feedbackName.textContent = "";
    };

    if (inputEmail.value.match(regEmail)) {
        feedbackEmail.textContent = "";
    } else {
        feedbackEmail.textContent = "Invalid Email!";
    };

    if (inputPhone.value.match(regPhone1) || inputPhone.value.match(regPhone2)) {
        feedbackPhone.textContent = "";
    } else {
        feedbackPhone.textContent = "Invalid Phone Number!";
    };
};

// Script

buttonClick.addEventListener("click", validateInputFields);
