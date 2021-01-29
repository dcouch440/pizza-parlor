import {Toppings} from './_Toppings.js'

Toppings.prototype.getToppings = function (){
  return Object.values(this)
}
Toppings.prototype.getOnionsPrice = function() {
  return this.onion[2]
}
Toppings.prototype.getOnionsPrice = function() {
  return this.olive[2]
}
Toppings.prototype.getOnionsPrice = function() {
  return this.tomato[2]
}
Toppings.prototype.getOnionsPrice = function() {
  return this.mushroom[2]
}