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
  buttons.forEach(
    button =>  button.style.boxShadow = '1px 0px 2px 0px black, -1px 0px 2px 0px black, inset -1px 0px 4px 0px rgba(0, 0, 0, 0.5), inset 1px 0px 4px 0px rgba(0, 0, 0, 0.5)'
  );
  activeButton.style.boxShadow = '0px 0px 2px 3px black';
};
const eventLogger = (event, thisArg, nodeList, totalModal, buttons) => {
  const [parmigiano, paggiaro, brie, onion, olive, tomato, mushroom] = nodeList;
  const {target, target:{id}} = event
  
  switch (id) {
    case ('parmigiano-button'):
      thisArg.setParmigianoPrice(parmigiano);
      break;
    case ('paggiaro-button'):
      thisArg.setPaggiaroPrice(paggiaro);
      break;
    case ('brie-button'):
      thisArg.setBriePrice(brie);
      break;
    case ('onion-button'):
      thisArg.setOnionPrice(onion);
      break;
    case ('olive-button'):
      thisArg.setOlivePrice(olive);
      break;
    case ('tomato-button'):
      thisArg.setTomatoPrice(tomato);
      break;
    case ('mushroom-button'):
      thisArg.setMushroomPrice(mushroom);
      break;
    case ('small'):
      thisArg.setSize('small');
      activateButton(buttons, target);
      break;
    case ('medium'):
      thisArg.setSize('medium');
      activateButton(buttons, target);
      break;
    case ('large'):
      thisArg.setSize('large');
      activateButton(buttons, target);
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
