import React from "react";
import styles from "./DefaultInformation.module.css";

function DefaultInformation(data) {
    return (
        <div
            className={styles.container}
        >
            <label className={styles.labels}>
                {data.date}
                <span className={styles.tooltips}>Datum</span>
            </label>
            <label className={styles.labels}>
                {data.time}
                <span className={styles.tooltips}>Tijd</span>
            </label>
            <label className={styles.labels}>
                {data.temp}
                <span className={styles.tooltips}>Temperatuur</span>
            </label>
            <label className={styles.labels}>
                {data.desc}
                <span className={styles.tooltips}>Beschrijving</span>
            </label>
        </div>
    );
}

export default DefaultInformation;