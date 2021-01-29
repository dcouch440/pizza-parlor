# `Pizza Parlor`
#### Author: David Couch
#### *This is a web app for a pizza parlor*

<!-- Check list
- Description
- Specs
- Link in gh-pages
- Project repo
- git clone repo link
- date
 -->
* * *

## Description  
This is a web app made to add items (pizza toppings and crust) to a cart and return the total cost. This web app is made using JavaScrip prototypes.

* * *
## Specs
```js
Describe: Menu()
Test: 'It will create an object to hold all the pizza toppings and other options'
Expect: new Menu().toEqual(Menu {parmigiano: Array(5), whiteCheddar: Array(5), brie: Array(5), onion: Array(5), olive: Array(5), …})

Describe: Menu.prototype.setParmigiano()
Test: 'It will add parmigiano to the total price until 3 total items are added. Cost 5'
Expect: menu.setParmigiano().toEqual({totalCost: 15})

Describe: Menu.prototype.setWhiteCheddar()
Test: 'It will add white cheddar to the total price until 3 total items are added. Cost 3'
Expect: menu.setWhiteCheddar().toEqual({totalCost: 9})

Describe: Menu.prototype.setBrie()
Test: 'It will add brie to the total price until 3 total items are added. Cost 2'
Expect: menu.setBrie().toEqual({totalCost: 6})

Describe: Menu.prototype.setOnionPrice()
Test: 'It will add onion to the total price until 3 total items are added. Cost 1'
Expect: menu.setOnionPrice().toEqual({totalCost: 3})

Describe: Menu.prototype.setOlivePrice()
Test: 'It will add white cheddar to the total price until 3 total items are added. Cost 1'
Expect: menu.setOlivePrice().toEqual({totalCost: 3})



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
###### See this web page in action on [Github Pages]({repo})

* Go to ( {project repo} ).

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
git clone {git repo}
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
* Created on x/xx/21


* * *

## License:
> *&copy; David Couch, 2021*

Licensed under [MIT license](https://mit-license.org/)

* * *

## Contact Information
_David Couch: [Email](dcouch440@gmail.com)_