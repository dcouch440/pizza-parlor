import {Toppings} from './classes/Toppings/_Toppings.js'

let myTop = new Toppings()
console.log(myTop.getOnionsPrice())

document.addEventListener('DOMContentLoaded', () => {
  let checkMe = document.getElementById('exist')
  console.log(checkMe)
})