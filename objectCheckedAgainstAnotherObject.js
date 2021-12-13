/*---
This function is in response to the following:

Given the following parameters-

const speed = 40
const missionData = {
  astro:["...","..."], 
  bio:["..."], 
  physics:["..."]
}

const checks = {
  maxSpeed:50,
  minSpeed:20,
  dataEntries:{
    astro:3,
    bio:1,
    physics:1
  }
}

Come up with a function that will check the speed against min- and max-speeds stored in `checks` and 
check if each array in missiondata has the required length listed under checks.dataEntries.
---*/

const confirmReentryPlans = (speed, missionData, checks) => {
    // Code here!
    let speedCheck = (speed <= checks.maxSpeed && speed >= checks.minSpeed) ? true : false;
    let entryCheck = (missionData.astro.length == checks.dataEntries.astro && missionData.bio.length == checks.dataEntries.bio && missionData.physics.length == checks.dataEntries.physics) ? true : false;
    let finalCheck;
    if (speedCheck && entryCheck) {
    finalCheck = true;
    } else {
    finalCheck = false;
    }
    return finalCheck;
  }