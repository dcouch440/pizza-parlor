import {Menu} from './_Menu.js'

const threeMax = (objKey, thisArg) => {
  objKey[4] += 1
  if (objKey[4] < 4){ 
    thisArg.totalCost = thisArg.totalCost + objKey[2]
  }
}
Menu.prototype.setOnionPrice = function() {
  threeMax(this.onion, this)
}

Menu.prototype.setOlivePrice = function() {
  threeMax(this.olive, this)
}
Menu.prototype.setTomatoPrice = function() {
  threeMax(this.tomato, this)
}
Menu.prototype.setMushroomPrice = function() {
  threeMax(this.mushroom, this)
}
