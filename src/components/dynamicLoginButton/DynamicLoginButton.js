import React, {Fragment, useContext} from "react";
import {Link} from "react-router-dom";
import {LoginContext} from "../../context/LoginProvider";
import "./DynamicLoginButton.css";
import AccountMenu from "../hamburgerMenu/AccountMenu";

function DynamicLoginButton() {
    const contextData = useContext(LoginContext);

    return (
        <Fragment>
            {contextData.authData.status === "authorized" ?
                <AccountMenu name={contextData.authData.data.username.charAt(0).toUpperCase() + contextData.authData.data.username.slice(1)} />
                :
                <Link id="go-to-login" to="/login">Inloggen</Link>
            }
        </Fragment>
    );
}

export default DynamicLoginButton;