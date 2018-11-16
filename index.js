// Code your solution in this file!
const hq = 42;
const blockFeet = 264;

function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - hq)
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks(blocks) * blockFeet
}

function distanceTravelledInFeet(start, end) {
  return Math.abs(end - start) * blockFeet
}

function calculatesFarePrice(start, end) {
  let msg;
  let howFar = distanceFromHqInFeet(start, end);
  if (howFar <= 400) {
    msg = 
  }
}