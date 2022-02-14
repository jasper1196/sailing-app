import React, {useContext, useEffect} from "react";
import {useForm} from "react-hook-form";
import validateUppercase from "../../tools/validateUppercase";
import validateLowercase from "../../tools/validateLowercase";
import validateSpecial from "../../tools/validateSpecial";
import validateNumber from "../../tools/validateNumber";
import validateConfirmation from "../../tools/validateConfirmation";
import changePassword from "../../tools/changePassword";
import {useNavigate} from "react-router-dom";
import {LoginContext} from "../../context/LoginProvider";

function PasswordPage() {
    const {register, watch, handleSubmit} = useForm();
    const {logout, authData} = useContext(LoginContext);
    const navigate = useNavigate;
    const passwordWatcher = watch("password", "");
    const confirmationWatcher = watch("confirmation", "")


    function onFromSubmit(formData) {
        changePassword(formData.password, formData.confirmation).then((response) => {
           console.log(response);
           if (response.status === 200) {
               logout();
           }
        }).catch((e) => {
            console.log(e.response);
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onFromSubmit)}>
                <label>Nieuw wachtwoord</label>
                <input
                    id="new-password"
                    type="password"
                    {...register("password", {
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
                <label>Nieuw wachtwoord</label>
                <input
                    id="confirmation-password"
                    type="password"
                    {...register("confirmation", {
                        required: true
                    })}
                />
                <button type="submit">Wijzigen</button>
                <button type="button">Annuleren</button>

            </form>
        </div>
    );
}

export default PasswordPage;