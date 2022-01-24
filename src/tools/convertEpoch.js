function convertEpoch(epoch) {
    const fullDate = new Date(epoch * 1000);

    const date = fullDate.toLocaleDateString("en-GB",{dateStyle: "short"});
    const time = fullDate.toLocaleTimeString("en-GB", {timeStyle: "short"});

    return {date, time};
}

export default convertEpoch;