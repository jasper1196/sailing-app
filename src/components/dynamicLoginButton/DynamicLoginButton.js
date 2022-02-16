import React, {Fragment, useContext} from "react";
import {Link} from "react-router-dom";
import {LoginContext} from "../../context/LoginProvider";
import styles from "./DynamicLoginButton.module.css";
import AccountMenu from "../accountMenu/AccountMenu";

function DynamicLoginButton() {
    const contextData = useContext(LoginContext);

    return (
        <Fragment>
            {contextData.authData.status === "authorized" ?
                <AccountMenu name={contextData.authData.data.username.charAt(0).toUpperCase() + contextData.authData.data.username.slice(1)} />
                :
                <Link className={styles["login-link"]} to="/login">Inloggen</Link>
            }
        </Fragment>
    );
}

export default DynamicLoginButton;