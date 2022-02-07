import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {LoginContext} from "../../context/LoginProvider";
import "./DynamicLoginButton.css";
import AccountMenu from "../hamburgerMenu/AccountMenu";

function DynamicLoginButton() {
    const contextData = useContext(LoginContext);

    if (contextData.authData.status === "authorized") {
        const name = contextData.authData.data.username;
        const capName = name.charAt(0).toUpperCase() + name.slice(1);

        return (
            <AccountMenu name={capName} />
        );
    } else {
        return <Link id="go-to-login" to="/login">Inloggen</Link>;
    }
}

export default DynamicLoginButton;