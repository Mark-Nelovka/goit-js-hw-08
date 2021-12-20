const throttle = require("lodash.throttle");

const form = document.querySelector('.feedback-form');

const input = document.querySelector('input');

const textArea = document.querySelector('textarea');

autoLookText();
let formData = {}

form.addEventListener('input', throttle(slowTextTime, 1000));

function slowTextTime() {
    
    formData = {
        email: input.value,
        message: textArea.value
    }

        localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function autoLookText() {
        const saveText = localStorage.getItem('feedback-form-state');
        const parseText = JSON.parse(saveText);
        if (saveText) {
                input.value = parseText.email;
            textArea.value = parseText.message;
        }
}

form.addEventListener('submit', onSubmitForm)

function onSubmitForm(e) {
    e.preventDefault();
    const inputEmail = e.currentTarget.elements.email.value;
    const areaText = textArea.value;
    const obj = {
        email: inputEmail,
        message: areaText,
    }
        console.log(obj);
    localStorage.removeItem('feedback-form-state');
    form.reset();
}