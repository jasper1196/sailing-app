function getSunscreenAdvise(uvIndex, clouds) {
    let advise = "Nee";
    let factor = "N.v.t.";

    if (clouds < 70) {
        advise = "Ja";
        if (uvIndex >= 8) {
            factor = "SPF 50+";
        } else if (uvIndex > 6) {
            factor = "SPF 30 - 50";
        } else if (uvIndex > 4) {
            factor = "SPF 15 - 25";
        } else if (uvIndex > 1) {
            factor= "SPF 6 - 10";
        } else {
            advise = "Nee";
        }
    }

    return {advise, factor};
}

export default getSunscreenAdvise;