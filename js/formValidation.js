const form = document.getElementById('registerForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const fullname = document.getElementById('fullname');
const zipcode = document.getElementById('zipcode');
const sex = document.getElementById('sex');
const language = document.getElementById('language');
const country = document.getElementById('country');



//event listeners
form.addEventListener('submit', e => {
    e.preventDefault();

    let usernameCheck = checkUsername();
    let emailCheck = checkEmail();
    let passwordCheck = checkPassword();
    let nameCheck = checkName();
    let zipcodeCheck = checkZipcode();
    let sexCheck = checkSex();
    let languageCheck = checkLanguage();
    let countryCheck = checkCountry();

    let validateForm = usernameCheck && emailCheck && passwordCheck && nameCheck && zipcodeCheck && countryCheck && languageCheck && sexCheck;

    if(validateForm){
        alert("This is your information:\nUsername: " + username.value.trim() + "\nName: " + fullname.value.trim() + "\nEmail: " + email.value.trim() + "\nZipcode: " + zipcode.value.trim());
        window.location.href = "account.html";
    }
});

form.addEventListener('input', e => {
    switch(e.target.id){
        case 'username':
            checkUsername();
            break;
        case 'email':
            checkEmail();
            break;
        case 'password':
            checkPassword();
            break;
        case 'fullname':
            checkName();
            break;
        case 'zipcode':
            checkZipcode();
            break;
        case 'sex':
            checkSex();
            break;
        case 'language':
            checkLanguage();
            break;
        case 'country':
            checkCountry();
            break;
    }
});



//Helper functions
const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
    inputControl.classList.remove('mid');
}

const setNotErrorOrSuccess = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('mid')
    inputControl.classList.remove('error');
    inputControl.classList.remove('success');
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = 'Looks good';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
    inputControl.classList.remove('mid');
}

const isRequired = element => element === '' ? false : true;
const isBetween = (element, min, max) => element < min || element > max ? false : true;
const isValidEmail = element => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(element).toLowerCase());
}
const isAbove = (element, value) => element < value ? false : true;
const containsAlphabet = element => {
    const letters = /^[A-Za-z]+$/;
    return element.match(letters);
}
const isValidZipcode = element => {
    const re = /[0-9]{4}/;
    const re2 = /[a-z]{2}/i;
    return (element.substring(0,4).match(re) && element.match(re2) && element.length == 6);
}
const isValidPassword = element => {
    const uppercase = /[A-Z]+/;
    const lowercase = /[a-z]+/;
    const numbers = /[0-9]+/;
    const symbols = /[\W\S_]/;
    return(element.match(uppercase) && element.match(lowercase) && element.match(numbers) && element.match(symbols));
}



//Checks all different inputs
const checkUsername = () => {
    const usernameValue = username.value.trim();
    
    let valid = false;


    if(!isRequired(usernameValue)){
        setError(username, 'An username is required');
    } else if(!isBetween(usernameValue.length, 5, 12)){
        setError(username, 'Your username should be between 5 and 12 characters')
    } else {
        valid = true;
        setSuccess(username);
    }

    return valid;
}

const checkEmail = () => {
    const emailValue = email.value.trim();

    let valid = false;

    if(!isRequired(emailValue)){
        setError(email, 'An email is required');
    }else if(!isValidEmail(emailValue)){
        setError(email, 'Provide a valid email address');
    }else {
        valid = true;
        setSuccess(email);
    }

    return valid;
}

const checkPassword= () => {
    const passwordValue = password.value.trim();

    let valid = false;

    if(!isRequired(passwordValue)){
        setError(password, 'A password is required');
    }else if(!isAbove(passwordValue.length, 12)){
        setError(password, 'Your password shoud be atleast 12 characters');
    }else if(!isValidPassword(passwordValue)){
        setError(password, 'Your password should be a variety of uppercase, lowercase, symbols and numbers');
    }else if(!isAbove(passwordValue.length, 14)){
        valid = true;
        setNotErrorOrSuccess(password, 'It is better if your password is atleast 14 characters');
    }else{ 
        valid = true;
        setSuccess(password);
    }

    return valid;
}

const checkName = () => {
    const fullnameValue = fullname.value.trim();

    let valid = false;

    if(!isRequired(fullnameValue)){
        setError(fullname, 'Your name is required');
    }else if(!containsAlphabet(fullnameValue)){
        setError(fullname, 'Your name should only contain letters');
    } else {
        valid = true;
        setSuccess(fullname);
    }

    return valid;
}

const checkZipcode = () => {
    const zipcodeValue = zipcode.value.trim();

    let valid = false;

    if(!isRequired(zipcodeValue)){
        setError(zipcode, 'A zipcode is required');
    }else if(!isValidZipcode(zipcodeValue)){
        setError(zipcode, 'Provide a valid zipcode');
    } else {
        valid = true;
        setSuccess(zipcode)
    }

    return valid;
}

const checkLanguage = () => {
    const languageValue = language.value.trim();

    let valid = false;

    if(!isRequired(languageValue)){
        setError(language, 'A language is required');
    } else {
        valid = true;
        setSuccess(language);
    }

    return valid;
}

const checkSex = () => {
    const sexValue = sex.value.trim();

    let valid = false;

    if(!isRequired(sexValue)){
        setError(sex, 'A sex is required');
    } else {
        valid = true;
        setSuccess(sex);
    }

    return valid;
}

const checkCountry = () => {
    const countryValue = country.value.trim();

    let valid = false;

    if(!isRequired(countryValue)){
        setError(country, 'A country is required');
    } else {
        valid = true;
        setSuccess(country);
    }

    return valid;
}
