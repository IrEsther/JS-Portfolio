var symbol = "+";
window.onload = function () {

    document.getElementById("check").addEventListener("click", function () {
        checkNum();
    });

    document.getElementById("next").addEventListener("click", function () {
        resetAns();
        
    });
    resetAns();
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
  
}
/*
function getHistory(){
    symbol =  document.getElementById("add").innerText;
   
}
*/

function printHistory(num){
    document.getElementById("add").innerText= num;
    symbol = num;
    console.log(symbol);

}

function checkNum() {
    console.log('into');
//var symbol = document.getElementsByClassName('symbols').id;
console.log(symbol);

    var answerUser = document.getElementById("answer").value;
    answerUser = Number(answerUser);
var n1 = document.getElementById("num-1").innerHTML;
var n2 =  document.getElementById("num-2").innerHTML;
var total =0;
if (symbol=="+"){
    total = Number(n1)+Number(n2);
}else if (symbol=="-"){
    total =  Number(n1)-Number(n2);
}else if (symbol=="*"){
    total = Number(n1)*Number(n2);
}else if (symbol=="/"){
    total = Number(n1)/Number(n2);
}

    if (answerUser == " ") {
        message.innerHTML = "Please, enter your answer";
    } else if (answerUser == total ) {
        message.innerHTML = "Congratulations, you are right!";

    } else {
        message.innerHTML = "Oh, no! You've made a mistake, please try again! ";
    }
}

function resetAns() {

    document.getElementById("num-1").innerHTML = randomNum();
    document.getElementById("num-2").innerHTML = randomNum();
    answer.value = "";
    message.innerHTML = "";
}
/*
 
*/