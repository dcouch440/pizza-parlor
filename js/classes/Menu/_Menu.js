import './setMenu.js'

export function Menu() {
  this.parmigiano = ['Parmigiano', '$', 5, 'Sharper than your grandads straight razor!', 0, {total: 0}, 'parmigiano-button'];
  this.paggiaro = ['paggiaro', '$', 3, 'A robust classic', 0, {total: 0}, 'paggiaro-button'];
  this.brie = ['Brie', '$', 2, 'A soft farmhouse Cheese. Carful its addicting.', 0, {total: 0}, 'brie-button'];
  this.onion = ['Onion', '$', 1, 'A gift from earth', 0, {total: 0}, 'onion-button'];
  this.olive = ['Olive', '$', 1, 'Pungent.. nuff said', 0, {total: 0}, 'olive-button'];
  this.tomato = ['Tomato', '$', 1, 'Slightly sweet, never sour', 0, {total: 0}, 'tomato-button'];
  this.mushroom = ['Aged Mushroom', '$', 2, 'These mushrooms are a journey!', 0, {total: 0}, 'mushroom-button'];
  this.size = 'medium'
  this.small = 2;
  this.medium = 4;
  this.large = 5;
  this.totalCost = 0;
};

