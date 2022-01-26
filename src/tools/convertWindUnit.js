import React from "react";

function convertWindUnit(speed, unit) {
    if (unit === "Bft") {
        let bft_speed = Math.sqrt(speed);
        if (bft_speed <= 7) {
            bft_speed -= 1;
        } else if (bft_speed > 10) {
            bft_speed += 1;
        }
        return `${bft_speed.toFixed(0)} ${unit}`;
    } else if (unit === "knopen") {
        return `${(speed / 1.852).toFixed(0)} ${unit}`;
    } else if (unit === "m/s") {
        return `${(speed / 3.6).toFixed(1)} ${unit}`;
    } else if (unit === "km/h") {
        return `${speed} ${unit}`;
    } else if (unit === "mph") {
        return `${(speed / 1.609344).toFixed(1)} ${unit}`;
    } else {
        return `${speed} ${unit}`;
    }
}

export default convertWindUnit;