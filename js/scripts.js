import {Menu} from './classes/Menu/_Menu.js'

const menuComponent = (obj) => {
  return `
    <div id="menuComponent">
      <div id="menu-name">
      ${obj[0]} -${obj[1]}${obj[2]}
      <button id="${obj[6]}">Add ${obj[0]}</button>
      </div>
      <div id="menu-description">${obj[3]}</div>
      
    </div>
  `
}
const displayTotal = (obj) => {
  return`
    <div id="total">Total Cost With Us Today: $${obj.displayCurrentPrice()}</div>
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
      thisArg.setBriePrice();
      break;
    case ('onion-button'):
      thisArg.setOnionPrice();
    case ('olive-button'):
      thisArg.setOlivePrice();
      break;
    case ('tomato-button'):
      thisArg.setTomatoPrice();
      break;
    case ('mushroom-button'):
      thisArg.setMushroomPrice();
      break;
    case ('small'):
      thisArg.setSize('small');
      break;
    case ('medium'):
      thisArg.setSize('medium');
    break;
    case ('large'):
      thisArg.setSize('large');
    break;
    case('submit'):
      thisArg.setSizePrice();
  }
}
document.addEventListener('DOMContentLoaded', () => {
  let menu = new Menu();
  const myMenuItems = [
    menu.parmigiano, 
    menu.paggiaro,
    menu.brie,
    menu.onion,
    menu.olive,
    menu.tomato,
    menu.mushroom
  ];
  const menuSelector = document.getElementById('menu-selector-root');
  const totalCost = document.getElementById('total-root');
  totalCost.innerHTML = displayTotal(menu);
  const menuMapper = myMenuItems.map(item => {
    return menuComponent(item)
  }).join('')
  menuSelector.innerHTML = menuMapper
  document.getElementById('pizza-shop').addEventListener('click', event => {
    eventLogger(event, menu);
    totalCost.innerHTML = displayTotal(menu);
  });
});
