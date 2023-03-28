const email = document.querySelector('#email');
const btn = document.querySelector('#btn');

const isEmailValid = input => {
    const email = String(input.value)
    .toLowerCase()
    .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (email !== null){
        displaySuccess(input);
    } else if (input.value === ''){
        displayError(input, "Error! You forgot to add an email");
    } else{
        displayError(input, "Please provide a valid email")
    }
};

const displayError = (input, err) => {
    const inputParent = input.parentElement;
    inputParent.className = 'main__input error';
    const errMessage = document.querySelector('#required-email');
    errMessage.textContent = err;
};

const displaySuccess = input => {
    const inputParent = input.inputParent;
    inputParent.className = 'main__input success';
    input.value = '';
};

btn.addEventListener('click', e => {
    e.preventDefault();
    isEmailValid(email);
});