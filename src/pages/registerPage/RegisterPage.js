import React from "react";
import {useForm} from "react-hook-form";
import "./RegisterPage.css";
import registerUser from "../../tools/registerUser";
import validateNumber from "../../tools/validateNumber";
import validateUppercase from "../../tools/validateUppercase";
import validateSpecial from "../../tools/validateSpecial";
import validateConfirmation from "../../tools/validateConfirmation";
import validateLowercase from "../../tools/validateLowercase";
import {useNavigate} from "react-router-dom";

function RegisterPage() {
    const {register, handleSubmit, formState: {errors}, watch} = useForm();
    const navigate = useNavigate();

    function onFormSubmit(inputData) {
        const userRegistered = registerUser(inputData);
        if (userRegistered) {
            console.log("User registration successful");
            navigate("/login");
        } else {
            console.log("User registration failed");
        }
    }

    //TODO: add fist + lastname in info field with proprietary formatting. (optional)

    const passwordWatcher = watch("password", "");
    const confirmationWatcher = watch("confirmation", "")

    return (
        <div className="register-container">
            <label>Registreren</label>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div>
                    <label htmlFor="username-reg">Gebruikersnaam</label>
                    <input
                        id="username-reg"
                        type="text"
                        {...register("username", {
                            required: "De gebruikersnaam moet ingevuld zijn.",
                            minLength: {
                                value: 6,
                                message: "De gebruikersnaam moet minimaal 6 karakters bevatten."
                            },
                            maxLength: {
                                value: 30,
                                message: "De gebruikersnaam mag maximaal 30 karakters bevatten."
                            }
                        })}
                    />
                    {errors.username && <p className="error-msg">{errors.username.message}</p>}
                </div>
                <div>
                    <label htmlFor="email-reg">Email</label>
                    <input
                        id="email-reg"
                        type="text"
                        {...register("email", {
                            required: "Het emailadres moet ingevuld zijn.",
                            pattern:{
                                value: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                                message: "Dit is geen geldig emailadres."
                            }
                        })}
                    />
                    {errors.email && <p className="error-msg">{errors.email.message}</p>}
                </div>
                <div>
                    <label htmlFor="password-reg">Wachtwoord</label>
                    <input
                        id="password-reg"
                        type="password"
                        {...register("password",{
                            required: true,
                            minLength: 8,
                            validate: () => {
                                if (
                                    validateUppercase(passwordWatcher) &&
                                    validateLowercase(passwordWatcher) &&
                                    validateSpecial(passwordWatcher) &&
                                    validateNumber(passwordWatcher) &&
                                    validateConfirmation(passwordWatcher, confirmationWatcher)
                                ) {
                                    return true;
                                } else {
                                    return false;
                                }
                            }
                        })}
                    />
                    <div id="password-validation-rules">
                        <p className={passwordWatcher.length >= 8 ? "requirement-met" : "requirement-not-met"}>
                            Minimaal 8 karakter
                        </p>
                        <p className={validateUppercase(passwordWatcher) ? "requirement-met" : "requirement-not-met"}>
                            Een hoofdletter
                        </p>
                        <p className={validateLowercase(passwordWatcher) ? "requirement-met" : "requirement-not-met"}>
                            Een kleine letter
                        </p>
                        <p className={validateNumber(passwordWatcher) ? "requirement-met" : "requirement-not-met"}>
                            Een cijfer
                        </p>
                        <p className={validateSpecial(passwordWatcher) ? "requirement-met" : "requirement-not-met"}>
                            Een speciaal teken (!@#$%^&*()-.,+)
                        </p>
                        <p className={validateConfirmation(passwordWatcher, confirmationWatcher) ? "requirement-met" : "requirement-not-met"}>
                            Wachtwoorden komen overeen
                        </p>
                    </div>
                </div>
                <div>
                    <label htmlFor="password-confirmation">Herhaal Wachtwoord</label>
                    <input
                        id="password-confirmation"
                        type="password"
                        {...register("confirmation")}
                    />
                </div>
                <button type="submit">Registreren</button>
            </form>
        </div>
    );
}

export default RegisterPage;