function validateEmail(input) {
    if (input.validity.valueMissing) {
        input.setCustomValidity("Please enter an email address.");
        input.reportValidity();
    } else if (input.validity.typeMismatch) {
        input.setCustomValidity("Input must be in email format.")
        input.reportValidity();
    } else {
        input.setCustomValidity('');
    };
};

function validateNumber(input) {
    if (input.validity.valueMissing) {
        input.setCustomValidity("Please enter a valid phone number.");
        input.reportValidity();
    } else {
        input.setCustomValidity('');
    };
}

export { validateEmail, validateNumber };