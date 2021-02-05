export function Menu() {
  this.parmigiano = 0;
  this.paggiaro = 0;
  this.brie = 0;
  this.onion = 0;
  this.olive = 0;
  this.tomato = 0;
  this.mushroom = 0;
  this.size = undefined;
};

Menu.prototype.setParmigianoPrice = function() {
  this.parmigiano += 1
}
Menu.prototype.setPaggiaroPrice = function() {
  this.parmigiano += 1
}
Menu.prototype.setBriePrice = function() {
  this.parmigiano += 1
}
Menu.prototype.setOnionPrice = function() {
  this.parmigiano += 1
}
Menu.prototype.setOlivePrice = function() {
  this.parmigiano += 1
}
Menu.prototype.setTomatoPrice = function() {
  this.parmigiano += 1
}
Menu.prototype.setMushroomPrice = function() {
  this.parmigiano += 1
}
Menu.prototype.setSize = function(size) {
  this.size = size;
}
