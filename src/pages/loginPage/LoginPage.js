import React, {useState, useContext, useEffect} from "react";
import "./LoginPage.css";
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


    function testFunction() {
        const data = getUserInfo(localStorage.getItem("token"));
        console.log(data);
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
                {loginErrors.error && <p className="login-errors">{loginErrors.message}</p>}
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

            <button type="button" onClick={testFunction}>test</button>
        </div>
    );
}

export default LoginPage;