export function Menu() {
  this.parmigiano = ['Parmigiano', '$', 5, 'Sharper than your grandads straight razor!', 0, {total: 0}, 'parmigiano-button'];
  this.paggiaro = ['paggiaro', '$', 3, 'A robust classic.', 0, {total: 0}, 'paggiaro-button'];
  this.brie = ['Brie', '$', 2, 'A soft farmhouse Cheese. Carful its addicting.', 0, {total: 0}, 'brie-button'];
  this.onion = ['Onion', '$', 1, 'A gift from earth.', 0, {total: 0}, 'onion-button'];
  this.olive = ['Olive', '$', 1, 'Pungent.. nuff said.', 0, {total: 0}, 'olive-button'];
  this.tomato = ['Tomato', '$', 1, 'Slightly sweet, never sour.', 0, {total: 0}, 'tomato-button'];
  this.mushroom = ['Mushroom', '$', 2, 'These mushrooms are a journey!', 0, {total: 0}, 'mushroom-button'];
  this.size = 'medium';
  this.small = 2;
  this.medium = 4;
  this.large = 5;
  this.totalCost = 0;
};
const threeMax = (objKey, thisArg) => {
  objKey[4] += 1;
  if (objKey[4] < 4){ 
    objKey[5].total += 1;
    thisArg.totalCost = thisArg.totalCost + objKey[2];
  };
};
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
};
Menu.prototype.setSizePrice = function(size) { 
  size === 'small' ? this.totalCost = this.totalCost + this.small:
  size === 'medium' ? this.totalCost = this.totalCost + this.medium:
  size === 'large' ? this.totalCost = this.totalCost + this.large: 
  null;
};
