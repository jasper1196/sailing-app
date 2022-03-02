import React, {useContext} from "react";
import {useForm} from "react-hook-form";
import styles from "./PasswordPage.module.css";
import validateUppercase from "../../tools/validateUppercase";
import validateLowercase from "../../tools/validateLowercase";
import validateSpecial from "../../tools/validateSpecial";
import validateNumber from "../../tools/validateNumber";
import validateConfirmation from "../../tools/validateConfirmation";
import changePassword from "../../tools/changePassword";
import {LoginContext} from "../../context/LoginProvider";

function PasswordPage() {
    const {register, watch, handleSubmit} = useForm();
    const {logout} = useContext(LoginContext);
    const passwordWatcher = watch("password", "");
    const confirmationWatcher = watch("confirmation", "")

    function onFromSubmit(formData) {
        changePassword(formData.password, formData.confirmation).then((response) => {
           console.log(response);
           if (response.status === 200) {
               logout();
           }
        }).catch((e) => {
            console.log(e);
        });
    }

    return (
        <div className={styles["form-wrapper"]}>
            <label className={styles.title}>Wachtwoord wijzigen</label>
            <form
                className={styles["password-form"]}
                onSubmit={handleSubmit(onFromSubmit)}
            >
                <label className={styles["label-text"]}>Nieuw wachtwoord</label>
                <input
                    className={`${ styles["input-fields"]} ${styles["new-password"]}`}
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
                <label className={styles["label-text"]}>Herhaal wachtwoord</label>
                <input
                    className={styles["input-fields"]}
                    id="confirmation-password"
                    type="password"
                    {...register("confirmation", {
                        required: true
                    })}
                />
                <div className={styles["password-validation-rules"]}>
                    <p className={passwordWatcher.length >= 8 ? styles["requirement-met"] : styles["requirement-not-met"]}>
                        &bull; Minimaal 8 karakter
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
                <div className={styles["btn-wrapper"]}>
                    <button className={styles["form-btns"]} type="submit">Wijzigen</button>
                    <button className={styles["form-btns"]} type="button">Annuleren</button>
                </div>
            </form>
        </div>
    );
}

export default PasswordPage;