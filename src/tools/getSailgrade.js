function getSailgrade(wind, gusts, temp, precip) {
    const windRate = getWindRate(wind, gusts);
    const tempRate = getWindRate(temp);
    const rainRate = getRainRate(precip);

    const rate = (windRate + tempRate + rainRate) / 3;

    return (rate.toFixed(1));
}

function getWindRate(wind, gusts) {
    let windRate = 1;

    if (wind > 75) {
        return 1;
    } else if (wind > 61) {
        windRate = 2;
    } else if (wind > 49) {
        windRate = 4;
    } else if (wind > 38) {
        windRate = 6;
    } else if (wind > 28) {
        windRate = 8
    } else if (wind > 19) {
        windRate = 10;
    } else if (wind > 11) {
        windRate = 7;
    } else if (wind > 5) {
        windRate = 5;
    } else {
        windRate = 1;
    }

    let gustRate = 1;

    if (gusts > (wind + (wind / 2))) {
        gustRate = 2;
    } else if (gusts < (wind + (wind / 2)) && gusts > (wind + (wind / 3))) {
        gustRate = 5;
    } else if (gusts >= wind && gusts < (wind + (wind / 2))) {
        gustRate = 10;
    }

    return (windRate + gustRate) / 2;
}

function getTempRate(temp) {
    let tempRate = 1;

    if (temp > 30) {
        tempRate = 10;
    } else if (temp > 27) {
        tempRate = 9
    } else if (temp > 24) {
        tempRate = 8;
    } else if (temp > 21) {
        tempRate = 7;
    } else if (temp > 16) {
        tempRate = 6;
    } else if (temp > 12) {
        tempRate = 4;
    } else if (temp > 8) {
        tempRate = 2;
    }

    return tempRate;
}

function getRainRate(precip) {
    let rainRate = 1;

    if (precip > 8) {
        rainRate = 2;
    } else if (precip > 4 && precip < 8) {
        rainRate = 3;
    } else if (precip > 0.5 && precip < 4) {
        rainRate = 4;
    } else if (precip > 0 && precip < 0.5) {
        rainRate = 6;
    } else {
        rainRate = 10;
    }

    return rainRate;
}

export default getSailgrade;