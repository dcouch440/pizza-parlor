# `Pizza Parlor`
#### Author: David Couch
#### *This is a web app for a pizza parlor*

* * *

## Description  
This is a web app made to add items (pizza toppings and crust) to a cart and return the total cost. This web app is made using JavaScript prototypes to create methods to change information in objects.

* * *
## Specs
```js
Describe: Menu()
Test: 'It will create an object to hold all the pizza toppings and other options'
Expect: new Menu().toEqual(Menu {parmigiano: Array(5), paggiaro: Array(5), brie: Array(5), onion: Array(5), olive: Array(5), …})

Describe: Menu.prototype.setParmigianoPrice()
Test: 'It will add parmigiano to the total price until 3 total items are added. Cost 5'
Expect: menu.setParmigianoPrice().toEqual(Menu {totalCost: 15})

Describe: Menu.prototype.setPaggiaroPrice()
Test: 'It will add paggiaro to the total price until 3 total items are added. Cost 3'
Expect: menu.setPaggiaroPrice().toEqual(Menu {totalCost: 9})

Describe: Menu.prototype.setBriePrice()
Test: 'It will add brie to the total price until 3 total items are added. Cost 2'
Expect: menu.setBriePrice().toEqual(Menu {totalCost: 6})

Describe: Menu.prototype.setOnionPrice()
Test: 'It will add onion to the total price until 3 total items are added. Cost 1'
Expect: menu.setOnionPrice().toEqual(Menu {totalCost: 3})

Describe: Menu.prototype.setOlivePrice()
Test: 'It will add olive to the total price until 3 total items are added. Cost 1'
Expect: menu.setOlivePrice().toEqual(Menu {totalCost: 3})

Describe: Menu.prototype.setTomatoPrice()
Test: 'It will add tomato to the total price until 3 total items are added. Cost 1'
Expect: menu.setTomatoPrice().toEqual(Menu {totalCost: 3})

Describe: Menu.prototype.setMushroomPrice()
Test: 'It will add mushroom to the total price until 3 total items are added. Cost 1'
Expect: menu.setMushroomPrice().toEqual(Menu {totalCost: 3})

Describe: Menu.prototype.setSizePrice()
Test: 'It will set the size for a small pizza to the total cost'
Expect: menu.setSizePrice('small').toEqual(Menu {totalCost: 2})

Test: 'It will set the size for a medium pizza to the total cost'
Expect: menu.setSizePrice('medium').toEqual(Menu {totalCost: 2})

Test: 'It will set the size for a large pizza to the total cost'
Expect: menu.setSizePrice('large').toEqual(Menu {totalCost: 5})

Describe: Menu.prototype.displayCurrentPrice()
Test: 'It will get the current price and add it to the selected size'
Expect: menu.displayCurrentPrice().toEqual(4)

Describe: threeMax()
Test: 'It will take the current object values and object to change total cost up to three'
Expect: threeMax(this.onion, this).toEqual(Menu{totalCost: 1, onion: {[1, {total: 1}]}) 

Test: 'It will be used inside methods to increase values but will not exceed 3'
Expect: (menu.setOnionPrice() 'Called 4 times').toEqual(Menu{totalCost: 3, onion: {[4, {total: 3}]}) 

Describe: updateNodes()
Test: 'It will update html nodes to the chosen object total'
Expect: updateNodes(<p key="{0}" id="items">0</p>, (7) ["Parmigiano", "$", 5, "Sharper than your grandads straight razor!", 0, {…}, "parmigiano-button"]).toEqual(<p key="{0}" id="items">1</p>, (7) ["Parmigiano", "$", 5, "Sharper than your grandads straight razor!", 1, {…}, "parmigiano-button"]))

Describe: eventLogger()
Test: 'It will take in four arguments, the current event being fired, object to be called on, nodes to be passed through, and a modal node to show for user total'
Expect: eventLogger(MouseEvent {isTrusted: true,...}, Menu {parmigiano: Array(5),...}, NodeList(7) [p#items,...], <div id="total-popup">...</div> ).toEqual('This should use the id of the nodes event target name to decide which action to take. this function is responsible for all interactions with the Menu object. Please see corresponding methods for each case to see what actions are being taken. The node list is in corresponding order to know which total to update.') 
```

* * *
## Technologies used
* HTML
* CSS
* Git and Github
* JavaScript
* * *


## Installation : 
### Want to see this webpage now?
###### See this web page in action on [Github Pages]( https://dcouch440.github.io/pizza-parlor/ )

* Go to ( https://github.com/dcouch440/pizza-parlor.git ).

*  Navigate to the code button on the github website.\
![Code button](/img/README/code.PNG)

* Click on the code button to open the menu.\
![Github Repo Example](/img/README/HTTPS.PNG)

- Copy the HTTPS code by clicking the clipboard next to the link.

- Within your Bash terminal navigate to your desired location by using cd fallowed by your desired directory.
```bash
 cd Desktop
``` 

- Once you have chosen your desired directory use the command.
```bash 
git clone https://github.com/dcouch440/pizza-parlor.git
```

<div 
  style="
    background-color: #d1ecf1; 
    color: grey; padding: 6px; 
    font-size: 9px; 
    border-radius: 5px; 
    border: 1px solid #d4ecf1; 
    margin-bottom: 12px"
> 
  <span 
    style="
      font-size: 12px; 
      font-weight: 600; 
      color: #0c5460;"
  >
    ⓘ
  </span>
  <span 
    style="
      font-size: 12px; 
      font-weight: 900; 
      color: #0c5460;
      margin-bottom: 24px"
  >
    Note : 
  </span> 
  If you have any problems make sure your HTTPS code is correct! The example above might not be the most recent HTTPS code!
</div>

* Then after the process is completed use the command.

``` bash
code .
```
* This will open the directory in your default code editor and from there it is required that you open the index.html file from live server (Visual Studio Code) or your code editors counterpart. You <strong>must</strong> use this method. Opening this web app from the index.html file alone will cause it to not function correctly!

<p 
  style="
    font-size: 12px; 
    background-color: #8c8c8c; 
    border-radius: 2px; 
    padding: 1px 5px; 
    text-align: center; 
    color: white; 
    margin-bottom: 24px"
>
  <span style="font-weight: 700; color: purple">Live Server</span>
  <img src="img/README/liveServer.PNG">
</p>


## Addition comments:
* Created on 1/29/21


* * *

## License:
> *&copy; David Couch, 2021*

Licensed under [MIT license](https://mit-license.org/)

* * *

## Contact Information
_David Couch: [Email](dcouch440@gmail.com)_