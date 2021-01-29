import {Toppings} from './_Cheeses.js'

Toppings.prototype.getToppings = function (){
  return Object.values(this)
}