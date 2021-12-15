//This function helps calculate average wind speed given an array of objects containing wind speeds.

const averageWindSpeed = (weatherEntries) => {
    let averageWinds = 0;
    let numOfEntries = 0;
        for(let i in weatherEntries) {
            averageWinds += weatherEntries[i].windSpeed;
            numOfEntries++;
        }
    averageWinds = Math.round(averageWinds / numOfEntries);
    return averageWinds;
}

const testWeatherEntries = [
    {
        windSpeed: 25,
        condition: "rainy"
    },
    {
        windSpeed: 12,
        condition: "cloudy"
    },
    {
        windSpeed: 5.5,
        condition: "sunny"
    }
]


console.log(averageWindSpeed(testWeatherEntries));