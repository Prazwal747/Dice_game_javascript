var dice1="";
var dice2="";
var num1=0;
var num2=0;
var intervalID;

document.addEventListener("DOMContentLoaded", function(){
 dice1 = document.querySelector(".img1").getAttribute("src");
 dice2 = document.querySelector(".img2").getAttribute("src");
});




function diceRoller(){ 
    intervalID = setInterval(function rolltheDice(){
    num1 = Math.floor((Math.random()*6)+1);
    num2 = Math.floor((Math.random()*6)+1);
    document.querySelector(".img1").setAttribute("src", "images/dice"+num1+".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+num2+".png");
    console.log("hiiii");
;
},200);

    setTimeout(function() {
    clearInterval(intervalID);

        console.log("Dice ROlling stopped..");
        if(num1>num2){
        document.querySelector(".span_winner").innerHTML="Player 1 wins ";
        }else if(num2>num1){
        document.querySelector(".span_winner").innerHTML="Player 2 wins ";
        }
        else{
            document.querySelector(".span_winner").innerHTML="Wu shang Clan";
        }

     },3000)



}




