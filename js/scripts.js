import {Menu} from './classes/Menu.js';



const eventLogger = (event, thisArg) => {
  const {id} = event.target
  switch (id) {
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
      break;
    case ('olive-button'):
      thisArg.setOlivePrice();
      break;
    case ('tomato-button'):
      thisArg.setTomatoPrice();
      break;
    case ('mushroom-button'):
      thisArg.setMushroomPrice();
      break;
    case('submit'):
      thisArg.setSizePrice();
  };
};
document.addEventListener('DOMContentLoaded', () => {
  const totalCost = document.querySelectorAll('.total-root');
  const totalModal = document.getElementById('total-popup');

  let menu = new Menu();

  const toppingTotals = document.querySelectorAll('.items');
  document.getElementById('pizza-shop').addEventListener('click', event => {
    eventLogger(event, menu, toppingTotals, totalModal);
    totalCost.forEach(node => node.innerHTML = displayTotal(menu));
  });
});
