let submitBtn = document.querySelector('.submit-btn');

function emailValidation(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function btnClicked(e) {
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let message = document.querySelector('#message').value;

    if (emailValidation(email)) {
        alert('Email sent!');
        console.log('Email sent!');
    } else {
        alert('Invalid email address!');
        console.log('Invalid email address!');
    }
}


submitBtn.addEventListener('click', btnClicked);
