import React, {useState, useContext, useEffect} from "react";
import styles from "./LoginPage.module.css";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {LoginContext} from "../../context/LoginProvider";
import getUserInfo from "../../tools/getUserInfo";

function LoginPage() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const [loginErrors, setLoginErrors] = useState({error: false, message: ""});
    const {authData, login} = useContext(LoginContext);
    let navigate = useNavigate();

    function onFormSubmit(inputData) {
        login(inputData.username, inputData.password);
    }

    useEffect(() => {
        if (authData.status === "authorized") {
            navigate("/forecast");
        } else if (authData.status === "failed") {
            setLoginErrors({error: true, message: "Gebruikersnaam of wachtwoord is onjuist."})
        }
    }, [authData]);

    useEffect(() => {
        setLoginErrors({error: false, message: ""});
    }, []);

    return (
        <div className={styles["login-container"]}>
            <label className={styles.title}>Inloggen</label>
            <form
                className={styles["login-form"]}
                onSubmit={handleSubmit(onFormSubmit)}
            >
                <div className={styles["form-fields"]}>
                    <label htmlFor="username-input">Gebruikersnaam</label>
                    <input
                        className={styles["input-fields"]}
                        id="username-input"
                        type="text"
                        {...register("username", {
                            required: "De gebruikersnaam moet ingevuld zijn.",
                        })}
                    />
                    {errors.username && <p className={styles["login-errors"]}>{errors.username.message}</p>}
                </div>
                <div className={styles["form-fields"]}>
                    <label htmlFor="password-input">Wachtwoord</label>
                    <input
                        className={styles["input-fields"]}
                        id="password-input"
                        type="password"
                        {...register("password", {
                            required: "Het wachtwoord moet ingevuld zijn."
                        })}
                    />
                    {errors.password && <p className={styles["login-errors"]}>{errors.password.message}</p>}
                </div>
                {loginErrors.error && <p className={styles["login-errors"]}>{loginErrors.message}</p>}
                <button
                    className={styles["form-btns"]}
                    type="submit"
                >
                    Inloggen
                </button>
            </form>
            <p className={styles["register-text"]}>Nog geen account? <br/> Klik hier om te registreren.</p>
            <button
                className={styles["form-btns"]}
                type="button"
                onClick={() => (navigate("/register"))}
            >
                Registreren
            </button>
        </div>
    );
}

export default LoginPage;