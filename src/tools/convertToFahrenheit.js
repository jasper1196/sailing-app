function convertToFahrenheit(temp) {
    const convertedTemp = temp * 1.8 + 32;

    return `${convertedTemp.toFixed(1)} °F`;
}


export default convertToFahrenheit;