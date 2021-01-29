import {Menu} from './_Menu.js'

const threeMax = (objKey, thisArg) => {
  objKey[4] += 1
  if (objKey[4] < 4){ 
    objKey[5].total += 1
    thisArg.totalCost = thisArg.totalCost + objKey[2]
  }
}
Menu.prototype.setParmigianoPrice = function() {
  threeMax(this.parmigiano, this);
};
Menu.prototype.setPaggiaroPrice = function() {
  threeMax(this.paggiaro, this);
};
Menu.prototype.setBriePrice = function() {
  threeMax(this.brie, this);
};
Menu.prototype.setOnionPrice = function() {
  threeMax(this.onion, this);
};
Menu.prototype.setOlivePrice = function() {
  threeMax(this.olive, this);
};
Menu.prototype.setTomatoPrice = function() {
  threeMax(this.tomato, this);
};
Menu.prototype.setMushroomPrice = function() {
  threeMax(this.mushroom, this);
};
Menu.prototype.setSize = function(size) {
  this.size = size
};
Menu.prototype.displayCurrentPrice = function() {
  let cost = 0
  switch(this.size) {
    case ('small'):
      cost = this.totalCost + this.small;
      break;
    case ('medium'):
      cost = this.totalCost + this.medium;
      break;
    case ('large'):
      cost = this.totalCost + this.large;
      break;    
  }
  return cost;
}
Menu.prototype.setSizePrice = function(size) { 
  size === 'small' ? this.totalCost = this.totalCost + this.small:
  size === 'medium' ? this.totalCost = this.totalCost + this.medium:
  size === 'large' ? this.totalCost = this.totalCost + this.large: 
  null
};
