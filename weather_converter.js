const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
    let weatherCondition = new Object();
    weatherCondition.temperature = (Math.round((temperature - 32) / 1.8));
    weatherCondition.windSpeed = (Math.round(windSpeed * 0.44704));
    weatherCondition.windDirection = windDirection;
    weatherCondition.condition = condition;
    return (weatherCondition);
  }

  console.log(storeWeatherConditions(72, 'windy', 20, 'NNW'));
