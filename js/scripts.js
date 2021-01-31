import {Menu} from './classes/Menu.js';

const menuComponent = (obj, i) => {
  return `
    <div key={${i}} class="menu-component">
      <div class="menu-name">
        <p class="title">${obj[0]} ${obj[1]}${obj[2]}</p>
        <div class="menu-description">${obj[3]}</div>
        <div class="button-container">
          <button id="${obj[6]}">Add ${obj[0]}</button>
        </div>
        <div class="item-totals">
          <p key={${i}} class="items">${obj[5].total}</p>
        </div>
      </div>
    </div>
  `
};
const displayTotal = (obj) => {
  return`
    <div id="total">Total Cost With Us Today: $${obj.displayCurrentPrice()}</div>
  `
};
const activateButton = (buttons, activeButton) => {
  buttons.forEach(button =>  button.style.boxShadow = 'none');
  activeButton.style.boxShadow = '0px 0px 2px 3px black';
};
const eventLogger = (event, thisArg, nodeList, totalModal, buttons) => {
  const eventTarget = event.target.id;
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
      activateButton(buttons, event.target)
      break;
    case ('medium'):
      thisArg.setSize('medium');
      activateButton(buttons, event.target)
      break;
    case ('large'):
      thisArg.setSize('large');
      activateButton(buttons, event.target)
      break;
    case('submit'):
      thisArg.setSizePrice();
      totalModal.style.display = 'flex';
  };
};
document.addEventListener('DOMContentLoaded', () => {
  const menuSelector = document.getElementById('menu-selector-root');
  const totalCost = document.querySelectorAll('.total-root');
  const totalModal = document.getElementById('total-popup');
  const smallButton = document.getElementById('small');
  const mediumButton = document.getElementById('medium');
  const largeButton = document.getElementById('large');
  const sizeButtons = [smallButton, mediumButton, largeButton];

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
  totalCost.forEach(node => node.innerHTML = displayTotal(menu));
  const menuMapper = myMenuItems.map(
    (item, index) => {
      return menuComponent(item, index)
  }).join('');
  menuSelector.innerHTML = menuMapper
  const toppingTotals = document.querySelectorAll('.items');
  document.getElementById('pizza-shop').addEventListener('click', event => {
    eventLogger(event, menu, toppingTotals, totalModal, sizeButtons);
    totalCost.forEach(node => node.innerHTML = displayTotal(menu));
  });
});
