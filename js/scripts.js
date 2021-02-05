function Menu(parmigiano, paggiaro, onion, size) {
  this.parmigiano = parmigiano;
  this.paggiaro = paggiaro;
  this.onion = onion;
  this.size = size;
}
Menu.prototype.addPrice = function() {
  const sizeCost =
  {
    'Small': () => 2,
    'Medium': () => 3,
    'Large': () => 6
  }
  let size = sizeCost[this.size]()
  this.totalCost = this.parmigiano + this.paggiaro + this.onion + size;
}
Menu.prototype.getTotal = function() {
  return this.totalCost;
}
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.querySelector('.total-popup');
  const total = document.getElementById('total-root');
  console.log(new Menu('1', '1', '1', 'Large'))
  document.getElementById('submit').addEventListener('click', () => {
    const parmigianoSelect = parseInt(document.getElementById('parmigiano').value);
    const paggiaroSelect = parseInt(document.getElementById('paggiaro').value);
    const onionSelect = parseInt(document.getElementById('onion').value);
    const sizeSelect = document.getElementById('size').value;

    let menu = new Menu(parmigianoSelect, paggiaroSelect, onionSelect, sizeSelect);
    menu.addPrice()
    modal.classList.add('show');
    total.innerHTML = `Total Today $${menu.getTotal()}`
  });
});

