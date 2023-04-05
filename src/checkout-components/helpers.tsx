export function validateName(input) {
    const nameArr = input.value.split(" ");
    if (input.validity.valueMissing) {
        input.setCustomValidity("Please enter your full name.");
        input.reportValidity();
    } else if (nameArr.length < 2) {
        input.setCustomValidity("Please enter your first and last name.");
        input.reportValidity();
    } else {
        input.setCustomValidity("");
    }
};

export function validateEmail(input) {
    if (input.validity.valueMissing) {
        input.setCustomValidity("Please enter an email address.");
        input.reportValidity();
    } else if (input.validity.typeMismatch) {
        input.setCustomValidity("Input must be in email format.")
        input.reportValidity();
    } else {
        input.setCustomValidity("");
    };
};

export function validateNumber(input) {
    if (input.validity.valueMissing) {
        input.setCustomValidity("Please enter a 10-digit phone number.");
        input.reportValidity();
    } else if (input.validity.patternMismatch) {
        input.setCustomValidity("Please enter 10 numbers, excluding any dashes or spaces.");
        input.reportValidity();
    } else {
        input.setCustomValidity("");
    };
};

export function validateAddress(input) {
    if (input.validity.valueMissing) {
        input.setCustomValidity("Please enter your shipping address.");
        input.reportValidity();
    } else {
        input.setCustomValidity("");
    };
};

export function validateZipcode(input) {
    if (input.validity.valueMissing) {
        input.setCustomValidity("Please enter a 5-digit zipcode.");
        input.reportValidity();
    } else if (input.validity.patternMismatch) {
        input.setCustomValidity("Please enter 5 digits, excluding any dashes or spaces.");
        input.reportValidity();
    } else {
        input.setCustomValidity("");
    };
};

export function validateCity(input) {
    if (input.validity.valueMissing) {
        input.setCustomValidity("Please enter your city.");
        input.reportValidity();
    } else {
        input.setCustomValidity("");
    };
};

export function validateCountry(input) {
    if (input.validity.valueMissing) {
        input.setCustomValidity("Please enter your country.");
        input.reportValidity();
    } else {
        input.setCustomValidity("");
    };
};
