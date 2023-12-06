// How many houses receive at least one present?

let fsP = require('fs/promises');
// For example:

// > delivers presents to 2 houses: one at the starting location,
//    and one to the east.
// ^>v< delivers presents to 4 houses in a square, including twice to the
//    house at his starting/ending location.
// ^v^v^v^v^v delivers a bunch of presents to some very lucky children
//    at only 2 houses.


//Looks like a frequencyCounter. Keys are 0-0, 0-1, 1-0, etc.





async function readInput(){
  let input = await fsP.readFile('day3-input.txt', 'utf8');
  // console.log(input);
  return input;
}
//readInput();

//Loop through instructions.
//Handle direction change
//Update frequency counter.


let santaLocation = [0,0];
let roboLocation = [0,0];

function keyConvert(location){
  return `${location[0]}-${location[1]}`;
}
function updateLocation(direction, location){
  if (direction === '^'){
    location[1] = location[1] + 1;
  } else if (direction === 'v'){
    location[1] = location[1] - 1;
  } else if (direction === '>'){
    location[0] = location[0] + 1;
  } else if (direction === '<'){
    location[0] = location[0] - 1;
  }
  return location;
}
async function checkLocations(){
  let input = await readInput();

  let houseCoords = {};
  // //Part 1 - only one location updated.
  // for (let i = 0; i < input.length; i++){
  //   santaLocation = updateLocation(input[i], santaLocation);
  //   let newKey = keyConvert(currLocation);
  //   houseCoords[newKey] = houseCoords[newKey] + 1 || 1;
  // }

  // console.log(Object.keys(houseCoords).length);



  //Part 2. Alternate who's moving.
  let newKey;
  for (let i = 0; i < input.length; i++){
    if (i % 2 === 0){
      santaLocation = updateLocation(input[i], santaLocation);
      newKey = keyConvert(santaLocation);
    } else {
      roboLocation = updateLocation(input[i], roboLocation);
      newKey = keyConvert(roboLocation);
    }
    houseCoords[newKey] = houseCoords[newKey] + 1 || 1;
  }
  console.log(Object.keys(houseCoords).length);
}

checkLocations();