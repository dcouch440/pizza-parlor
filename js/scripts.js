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
    const eventTarget = event.target.id
    console.log(eventTarget)
    switch (eventTarget) {
      case ('parmigiano-button'):
        menu.setParmigianoPrice();
        break;
      case ('paggiaro-button'):
        menu.setPaggiaroPrice();
        break;
      case ('brie-button'):
        menu.setBriePrice()
        break;
      case ('onion-button'):
        menu.setOnionPrice()
      case ('olive-button'):
        menu.setOlivePrice()
        break;
      case ('tomato-button'):
        menu.setTomatoPrice()
        break;
      case ('mushroom-button'):
        menu.setMushroomPrice()
        break;
    }
    console.log(menu)
  })
})
