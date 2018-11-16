// Code your solution in this file!
const hq = 42;
const blockFeet = 264;

function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - hq)
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * blockFeet
}

function distanceTravelledInFeet(bloc) {
  
}