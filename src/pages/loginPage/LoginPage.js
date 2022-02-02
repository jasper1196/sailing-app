import React from "react";
import "./LoginPage.css";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import userLogin from "../../tools/userLogin";

function LoginPage() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    let navigate = useNavigate();

    function onFormSubmit(inputData) {
        console.log(inputData);
        userLogin(inputData.username, inputData.password).then((message) => {
            console.log(message);
        }).catch((errorMessage) => {
            console.log(errorMessage);
        });

    }

    return (
        <div className="login-container">
            <label>Inloggen</label>
            <form
                id="login-form"
                onSubmit={handleSubmit(onFormSubmit)}
            >
                <div className="form-fields" id="username-field">
                    <label htmlFor="username-input">Gebruikersnaam</label>
                    <input
                        id="username-input"
                        type="text"
                        {...register("username", {
                            required: "De gebruikersnaam moet ingevuld zijn.",
                        })}
                    />
                    {errors.username && <p className="login-errors">{errors.username.message}</p>}
                </div>
                <div className="form-fields" id="password-field">
                    <label htmlFor="password-input">Wachtwoord</label>
                    <input
                        id="password-input"
                        type="password"
                        {...register("password", {
                            required: "Het wachtwoord moet ingevuld zijn."
                        })}
                    />
                    {errors.password && <p className="login-errors">{errors.password.message}</p>}
                </div>
                <button
                    id="login-button"
                    type="submit"
                >
                    Inloggen
                </button>
            </form>
            <p>Nog geen account? <br/> Klik hier om te registreren.</p>
            <button
                type="button"
                onClick={() => (navigate("/register"))}
            >
                Registreren
            </button>
        </div>
    );
}

export default LoginPage;