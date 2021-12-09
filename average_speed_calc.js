//Expects position objects that have both a measure of time & a measure of distance

const getAverageSpeed = (firstPosition, secondPosition) => {
    // code here!
    let elapsedTime = (secondPosition.time - firstPosition.time);
    let coveredDistance = (secondPosition.altitude - firstPosition.altitude);
    let averageSpeed = (coveredDistance / elapsedTime);
    let roundedAverageSpeed = Math.round(averageSpeed * 10) / 10;
    return roundedAverageSpeed;
  }