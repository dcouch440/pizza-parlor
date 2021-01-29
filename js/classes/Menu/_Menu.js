import './getMenu.js'
import './setMenu.js'

export function Menu() {
  this.parmigiano = ['Parmigiano', '$', 5, 'Sharper than your grandads straight razor!', 0, {total: 0}];
  this.paggiaro = ['paggiaro', '$', 3, 'A robust classic', 0, {total: 0}];
  this.brie = ['Brie', '$', 2, 'A soft farmhouse Cheese. Carful its addicting.', 0, {total: 0}];
  this.onion = ['Onion', '$', 1, 'A gift from earth', 0, {total: 0}];
  this.olive = ['Olive', '$', 1, 'Pungent.. nuff said', 0, {total: 0}];
  this.tomato = ['Tomato', '$', 1, 'Slightly sweet, never sour', 0, {total: 0}];
  this.mushroom = ['Aged Mushroom', '$', 2, 'These mushrooms are a journey!', 0, {total: 0}];
  this.small = 2;
  this.medium = 4;
  this.large = 5;
  this.totalCost = 0;
};

