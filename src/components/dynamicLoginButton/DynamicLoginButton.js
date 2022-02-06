import React from "react";
import {Link} from "react-router-dom";

function DynamicLoginButton() {

        return <Link id="go-to-login" to="/login">Inloggen</Link>;
}

export default DynamicLoginButton;