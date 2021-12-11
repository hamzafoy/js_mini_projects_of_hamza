/*---This function takes an array of objects and creates an object with the
inputted objects' first keys as the key of the outputted single object and
an array that keeps values that belonged to those keys in the inputted object.

EX:

INPUT: 
const listOfReceivedData = [
  {type: "astro", data: "Saturn Data"},
  {type: "bio", data: "Space Potatoes"},
  {type: "physics", data: "Lagrange Points"},
  {type: "bio", data: "OMG Tardigrades"},
  {type: "physics", data: "Material reflectivity"},
  {type: "astro", data: "Mercury is not the hottest"},
]

OUTPUT:
{
  "astro":  ["Saturn Data", "Mercury is not the hottest"],
  "bio": ["Space Potatoes", "OMG Tardigrades"],
  "physics": ["Lagrange Points", "Material reflectivity"],
}
---*/

const organizeData = (receivedData) => {
	let reorganizedData = {};
  console.log(reorganizedData)
  for (i in receivedData) {
  	//console.log(receivedData[i].type)
    if(!reorganizedData.hasOwnProperty(receivedData[i].type)) {
    Object.defineProperty(reorganizedData, receivedData[i].type, {
    writable: true,
    value: []
    })
    reorganizedData[receivedData[i].type].push(receivedData[i].data)
    } else {
    reorganizedData[receivedData[i].type].push(receivedData[i].data)
    }
  }
  //console.log(reorganizedData.astro)
  //console.log(reorganizedData.bio)
  //console.log(reorganizedData.physics)
  return reorganizedData;
}