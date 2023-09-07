
var randomNumber1 = Math.floor(Math.random()*6) +1; // random-number between 1-6
var randomNumber2 = Math.floor(Math.random()*6) +1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png"; // pick image dice1.png-dice6.png
var randomDiceImage2 = "dice" + randomNumber2 + ".png";

document.querySelector(".btn1").addEventListener("click", function () {

document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1); 
    document.querySelectorAll("button")[0].classList.add("invisible");
});

document.querySelector(".btn2").addEventListener("click", function () {

    document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2); 
    
    document.querySelectorAll("button")[1].classList.add("invisible");
    
    if(randomNumber1 > randomNumber2)
    {
        document.querySelector(".container h1").innerHTML = " 	&#128681Player1 won!";
    
    } else if(randomNumber2 > randomNumber1) 
    {
        document.querySelector(".container h1").innerHTML = " Player2 won 	&#128681!";
    } else{
        document.querySelector(".container h1").innerHTML = " Draw";
    }
    setTimeout(function(){
        window.location.reload();
     }, 3000); });
    

// document.querySelectorAll("img")[0].setAttribute("src", randomDiceImage1);
// document.querySelectorAll("img")[1].setAttribute("src", randomDiceImage2);

