import {Menu} from './_Menu.js'

const threeMax = (objKey, thisArg) => {
  objKey[4] += 1
  if (objKey[4] < 4){ 
    thisArg.totalCost = thisArg.totalCost + objKey[2]
  }
}
Menu.prototype.getOnionPrice = function() {
  threeMax(this.onion, this)
}

Menu.prototype.getOlivePrice = function() {
   this.olive[2]
}
Menu.prototype.getOPrice = function() {
   this.tomato[2]
}
Menu.prototype.getOnionsPrice = function() {
  return this.mushroom[2]
}
