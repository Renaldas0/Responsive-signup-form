// required email field lights up on incorrect input
// display success message on form submit
// dismiss message to bring back to main form page

const form = document.querySelector('form');
const emailInput = document.getElementById('email-input');
const errorMsg = document.getElementById('error-msg');
const dismissBtn = document.querySelector('#dismiss-btn');
const submitBtn = document.querySelector('#submit-btn');
const successContainer = document.querySelector('#success-container');
const newsletterContainer = document.querySelector('#newsletter');

const errorBgColor = 'rgba(255, 0, 0, 0.22)';
const errorColor = 'rgba(255, 0, 0, 0.78)';

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (emailInput.value == null || emailInput.value === "") {
        console.log('email field is empty');
        errorMsg.textContent = 'Please enter your email address';
        emailInput.style.background = errorBgColor;
    } else if (!emailRegex.test(emailInput.value)) {
        console.log('email is not valid');
        errorMsg.textContent = 'Valid email required';
        emailInput.style.background = errorBgColor;
        emailInput.style.color = errorColor;
    } else {
        console.log('email is valid');
        errorMsg.textContent = '';
        emailInput.style.background = '';
        emailInput.style.color = 'var(--Dark-Slate-Grey)';
        newsletterContainer.classList.add('hidden');
        successContainer.classList.remove('hidden');
        emailInput.value = '';
    }
});

dismissBtn.addEventListener('click', () => {
    newsletterContainer.classList.remove('hidden');
    successContainer.classList.add('hidden');
})