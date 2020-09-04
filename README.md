# Rolling_the_dice
Its a *dice game* where the players roll the dice and whoever gets the highest number, wins! Check it out.

The project includes a single html file(index.html) which holds the structure of the website/game, a css file(styles.css) which have all the styles for the website, a javascript file(app.js) to provide functionality to the website. It also has a folder name *images* that have all the dice related images in it.

1. **index.html** :
> This file contains all the initial markup required for the website.

2. **styles.css** : 
> All the styling of the website is done without using any CSS library.

3. **app.js** :
> This file have all the logics for the functionality of the website. 

It listens for an event on the **Roll Dice** button, as soon as it gets clicked, it will call the rollDice() function and that function is responsible for carrying out all the calculations required for declaring the winner. It will generate two random numbers(1-6) for both the dices and it will change the image of dices according to the random number just generated. Then it will check which random number is higher and it will display the message for the winner and whenever the **Roll Dice** button is clicked,it will generate new random numbers every time and declare the winner according to those numbers. 

4. **images** :
> It contains all the images(face values of dice) required for the website.

