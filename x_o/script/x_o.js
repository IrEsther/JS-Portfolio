$(document).ready(function () {
    var player1 = "X";
    var player2 = "O";
    var turn = 1;
    var move = 0;
    var winnerContainer = $('.winner');
    var sqr = $(".col-md-4");
    var reset = $('.reset');
    sqr.on('click', function (e) {
        move++;
        
        if (turn === 1) {
            event.target.innerHTML = player1;
            event.target.style.color = "red";
            turn++;
        } else {
            event.target.innerHTML = player2;
            event.target.style.color = "black";
            turn--;
        }
        if (checkWinner()) {
            theWinner = turn == 1 ? player2 : player1;

            decklareWinner(theWinner);
        }}
    
    );

    reset.on('click', (e) => {
        var moves = Array.prototype.slice.call($(".col-md-4"));
        moves.map((m) => {
            m.innerHTML = "";
        }
        );
        winnerContainer.html('');
        winnerContainer.css('display', "none");
        turn = 1;
        
    });

    function decklareWinner(winner) {
        winnerContainer.css('display', "block");
        reset.css('display', "block");
        winner = winner === player1 ? 'Esther' : 'Israel';
        winnerContainer.html(winner + "Wins!");

    }
    function checkWinner() {
        if (move > 4) {
            var sqr = $('.col-md-4');
            var playerMoves = Array.prototype.slice.call($(".col-md-4"));
            var results = playerMoves.map(function (i) {
                return i.innerHTML;
                
            });
console.log(checkWinner);

            var winnerComb = [
                [0, 1, 2],
                [3, 4, 5],
                [6, 7, 8],
                [0, 3, 6],
                [0 ,4 ,8],
                [1, 4, 7],
                [2, 5, 8],
        
                [2, 4, 6]
            ];
            return winnerComb.find(function (combo) {
                if (results[combo[0]] !== "" && results[combo[1]] !== "" && results[combo[2]] !== "" && results[combo[0]] === results[combo[1]] && results[combo[1]] === results[combo[2]]) {
                    return true;
                } else {
                    return false;
                }



            });
        }
    }


});

function startGame() {
    var allBox = document.getElementsByClassName('col-md-4');
    for (var i = 0; i < allBox.length; i++) {
        allBox[i].style.backgroundColor = 'antiquewhite';
        allBox[i].style.border = '1px solid saddlebrown';
    }
}


/*
var counter =0;
function randNum(){
        counter = Math.floor(Math.random() * 10);
         if (counter %2 != 0) {
             i.innerHTML = "O";


         }
}
    function playGame(id){
        console.log(id);
        var elm = document.getElementById(id).innerHTML;
        if(elm != "X" && elm != "O"){
            for(i>0; i<10; i++){
            if(counter %2 == 0 ){
                document.getElementById(id).innerHTML = "X";
                i++;
                }

            }
        counter++;

    }}*/