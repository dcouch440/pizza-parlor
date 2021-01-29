import {Toppings} from './_Toppings.js'

Toppings.prototype.getToppings = function (){
  return Object.values(this)
}