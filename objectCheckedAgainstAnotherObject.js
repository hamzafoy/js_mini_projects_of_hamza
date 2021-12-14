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


/*---
This function is in response to the following:

Given the following parameters-

const exchanges = [
   {origin:"MC", message:"So how is it out there?"},
   {origin:"Shuttle", message:"Oh it's pretty nice!"},
   {origin:"MC", message:"Did you like the challenges?"},
 ]
    
 const missionData = {
   astro:["...","..."], 
   bio:["..."], 
   physics:["..."]
 }

The following is expected-

{
  transcript:
  [
    "MC: So how is it out there?",
    "Shuttle: Oh it's pretty nice!",
    "MC: Did you like the challenges?"
  ],
  missionData:{
    astro:["...","..."], 
    bio:["..."], 
    physics:["..."]
  }
}

Come up with a function that manipulates the data in `exchanges` and creates
a transcript that is stored in outputted object.
---*/


const parseMissionSummary = (exchanges, missionData) => {
  const newObj = {};
  const transcriptMsgs = [];
  for (let i in exchanges) {
    transcriptMsgs.push(`${exchanges[i].origin}: ${exchanges[i].message}`)
  }
  Object.defineProperties(newObj, {
    transcript: {
      value: transcriptMsgs,
      writable: true
    },
    missionData: {
      value: missionData,
      writable: true
    }
  })
  return newObj;
}