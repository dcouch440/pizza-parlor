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
})
