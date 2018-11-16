// Code your solution in this file!
const hq = 42;

function distanceFromHqInBlocks(blocks) {
  return Math.abs(blocks - hq)
}

function distanceFromHqInFeet(blocks) {
  return distanceFromHqInBlocks * 264
}