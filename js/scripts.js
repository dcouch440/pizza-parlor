import {Menu} from './classes/Menu/_Menu.js'

const menuComponent = (obj) => {
  return `
    <div id="menuComponent">
      <div id="menu-name">${obj[0]} -${obj[1]}${obj[2]}</div>
      <div id="menu-description">${obj[3]}</div>
      <button id="${obj[6]}">Add ${obj[0]}</button>
    </div>
  `
}
const eventLogger = (event, thisArg) => {
  const eventTarget = event.target.id
  switch (eventTarget) {
    case ('parmigiano-button'):
      thisArg.setParmigianoPrice();
      break;
    case ('paggiaro-button'):
      thisArg.setPaggiaroPrice();
      break;
    case ('brie-button'):
      thisArg.setBriePrice()
      break;
    case ('onion-button'):
      thisArg.setOnionPrice()
    case ('olive-button'):
      thisArg.setOlivePrice()
      break;
    case ('tomato-button'):
      thisArg.setTomatoPrice()
      break;
    case ('mushroom-button'):
      thisArg.setMushroomPrice()
      break;
  }
}
document.addEventListener('DOMContentLoaded', () => {
  let menu = new Menu()
  const myMenuItems = [
    menu.parmigiano, 
    menu.paggiaro,
    menu.brie,
    menu.onion,
    menu.olive,
    menu.tomato,
    menu.mushroom
  ]
  const menuSelector = document.getElementById('menu-selector') 
  const menuMapper = myMenuItems.map(item => {
    return menuComponent(item)
  }).join('')
  menuSelector.innerHTML = menuMapper
  document.getElementById('pizza-shop').addEventListener('click', event => {
    eventLogger(event, menu)
  })
})
