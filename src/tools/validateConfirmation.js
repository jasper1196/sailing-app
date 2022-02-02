function validateConfirmation(value, confirmationValue) {
    return (value === confirmationValue && confirmationValue !== "");
}

export default validateConfirmation;