// UI vars

const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const message = document.querySelector(".message");



function rollDice(e){
  
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  
  image1.setAttribute("src", `images/dice${randomNumber1}.png`);
  
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  
  image2.setAttribute("src", `images/dice${randomNumber2}.png`);
  
  if(randomNumber1 > randomNumber2){
    message.innerHTML = "☝ Player 1 wins!";
  } else if (randomNumber2 > randomNumber1) {
      message.innerHTML = "✌ Player 2 wins!";
  } else{
      message.innerHTML = " Draw !!"
  }

  e.preventDefault();
  }
  
  document.querySelector('.form').addEventListener('submit',rollDice);

