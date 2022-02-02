function validateSpecial(value) {
    return (/[!@#$%^&*()-.,+]/.test(value));
}

export default validateSpecial;