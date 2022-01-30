import React, {useState} from "react";
import "./LoginPage.css";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div className="login-container">
            <label>Inloggen</label>
            <form id="login-form">
                <div className="form-fields" id="username-field">
                    <label htmlFor="username-input">Gebruikersnaam</label>
                    <input
                        id="username-input"
                        type="text"
                        value={username}
                        onChange={(e) => {setUsername(e.target.value)}}
                    />
                </div>
                <div className="form-fields" id="password-field">
                    <label htmlFor="password-input">Wachtwoord</label>
                    <input
                        id="password-input"
                        type="password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                </div>
                <button
                    id="login-button"
                    type="submit"
                >
                    Inloggen
                </button>
            </form>
            <p>Nog geen account? <br/> Klik hier om te registreren.</p>
            <button type="button">Registreren</button>
        </div>
    );
}

export default LoginPage;