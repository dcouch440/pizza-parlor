import {Menu} from './classes/Menu.js'

const menuComponent = (obj, i) => {
  return `
    <div id="menuComponent">
      <div id="menu-name">
        <p>${obj[0]} ${obj[1]}${obj[2]}</p>
        <button id="${obj[6]}">Add ${obj[0]}</button>
        <p key={${i}} id="items">${obj[5].total}</p>
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
const eventLogger = (event, thisArg, nodeList, totalModal) => {
  const eventTarget = event.target.id
  switch (eventTarget) {
    case ('parmigiano-button'):
      thisArg.setParmigianoPrice(nodeList[0]);
      break;
    case ('paggiaro-button'):
      thisArg.setPaggiaroPrice(nodeList[1]);
      break;
    case ('brie-button'):
      thisArg.setBriePrice(nodeList[2]);
      break;
    case ('onion-button'):
      thisArg.setOnionPrice(nodeList[3]);
      break;
    case ('olive-button'):
      thisArg.setOlivePrice(nodeList[4]);
      break;
    case ('tomato-button'):
      thisArg.setTomatoPrice(nodeList[5]);
      break;
    case ('mushroom-button'):
      thisArg.setMushroomPrice(nodeList[6]);
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
      totalModal.style.display = 'flex';
  }
}
document.addEventListener('DOMContentLoaded', () => {
  const menuSelector = document.getElementById('menu-selector-root');
  const totalCost = document.querySelectorAll('.total-root');
  const totalModal = document.getElementById('total-popup')
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
  totalCost.forEach(node => {node.innerHTML = displayTotal(menu)});
  const menuMapper = myMenuItems.map(
    (item, index) => {
      return menuComponent(item, index)
  }).join('');
  menuSelector.innerHTML = menuMapper
  const toppingTotals = document.querySelectorAll('#items');
  document.getElementById('pizza-shop').addEventListener('click', event => {
    eventLogger(event, menu, toppingTotals, totalModal);
    totalCost.forEach(node => {node.innerHTML = displayTotal(menu)});
  });
});
