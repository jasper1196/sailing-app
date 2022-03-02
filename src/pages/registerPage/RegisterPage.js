import React, {useState} from "react";
import {useForm} from "react-hook-form";
import styles from "./RegisterPage.module.css";
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
    const [loading, setLoading] = useState(false);
    const [registrationError, setRegistrationError] = useState(false);

    function onFormSubmit(inputData) {
        setRegistrationError(false);
        setLoading(true);

        registerUser(inputData).then((response) => {
            if (response) {
                console.log("User registration successful");
                navigate("/login");
                setLoading(false);
            } else {
                setRegistrationError(true);
                console.log("User registration failed");
                setLoading(false);
            }
        }).catch((e) => {
            setRegistrationError(true);
            setLoading(false);
        })
    }

    const passwordWatcher = watch("password", "");
    const confirmationWatcher = watch("confirmation", "");

    return (
        <div className={styles["main-container"]}>
            <label className={styles.title}>Registreren</label>
            <form onSubmit={handleSubmit(onFormSubmit)}>
                <div className={styles["input-container"]}>
                    <label htmlFor="username-reg">Gebruikersnaam</label>
                    <input
                        className={styles["input-fields"]}
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
                    {errors.username && <p className={styles["error-msg"]}>{errors.username.message}</p>}
                </div>
                <div className={styles["input-container"]}>
                    <label htmlFor="email-reg">Email</label>
                    <input
                        className={styles["input-fields"]}
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
                    {errors.email && <p className={styles["error-msg"]}>{errors.email.message}</p>}
                </div>
                <div className={styles["input-container"]}>
                    <label htmlFor="password-reg">Wachtwoord</label>
                    <input
                        className={styles["input-fields"]}
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
                </div>
                <div className={styles["validation-rules"]}>
                    <p className={passwordWatcher.length >= 8 ? styles["requirement-met"] : styles["requirement-not-met"]}>
                        &bull; Minimaal 8 karakters
                    </p>
                    <p className={validateUppercase(passwordWatcher) ? styles["requirement-met"] : styles["requirement-not-met"]}>
                        &bull; Een hoofdletter
                    </p>
                    <p className={validateLowercase(passwordWatcher) ? styles["requirement-met"] : styles["requirement-not-met"]}>
                        &bull; Een kleine letter
                    </p>
                    <p className={validateNumber(passwordWatcher) ? styles["requirement-met"] : styles["requirement-not-met"]}>
                        &bull; Een cijfer
                    </p>
                    <p className={validateSpecial(passwordWatcher) ? styles["requirement-met"] : styles["requirement-not-met"]}>
                        &bull; Een speciaal teken (!@#$%^&*()-.,+)
                    </p>
                    <p className={validateConfirmation(passwordWatcher, confirmationWatcher) ? styles["requirement-met"] : styles["requirement-not-met"]}>
                        &bull; Wachtwoorden komen overeen
                    </p>
                </div>
                <div className={styles["input-container"]}>
                    <label htmlFor="password-confirmation">Herhaal Wachtwoord</label>
                    <input
                        className={styles["input-fields"]}
                        id="password-confirmation"
                        type="password"
                        {...register("confirmation")}
                    />
                </div>
                    <button type="submit" className={styles["submit-btn"]}>Registreren</button>
                {loading &&
                    <div className={styles["loader-wrapper"]}>
                        <div className={styles.loader} />
                        <label className={styles["loader-description"]}>Registreren...</label>
                    </div>
                }
                {registrationError && <p className={styles["error-msg"]}>De gebruikersnaam of email bestaan al probeer het nogmaals.</p>}
            </form>
        </div>
    );
}

export default RegisterPage;