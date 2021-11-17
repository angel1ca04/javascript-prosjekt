var turn = 1

var clicked1 = 0
var clicked2 = 0
var clicked3 = 0
var clicked4 = 0
var clicked5 = 0
var clicked6 = 0
var clicked7 = 0
var clicked8 = 0
var clicked9 = 0


function buttonclick1(btnid){
    document.getElementById("btn1").style.backgroundImage = "url('x.png')";
    clicked1 = 1
    turn = 2
}
function buttonclick2(btnid){
    document.getElementById("btn2").style.backgroundImage = "url('x.png')";
    clicked2 = 1
    turn = 2
}

function buttonclick3(btnid){
    document.getElementById("btn3").style.backgroundImage = "url('x.png')";
    clicked3 = 1
    turn = 2
}

function buttonclick4(btnid){
    document.getElementById("btn4").style.backgroundImage = "url('x.png')";
    clicked4 = 1
    turn = 2
}

function buttonclick5(btnid){
    document.getElementById("btn5").style.backgroundImage = "url('x.png')";
    clicked5 = 1
    turn = 2
}

function buttonclick6(btnid){
    document.getElementById("btn6").style.backgroundImage = "url('x.png')";
    clicked6 = 1
    turn = 2
}

function buttonclick7(btnid){
    document.getElementById("btn7").style.backgroundImage = "url('x.png')";
    clicked7 = 1
    turn = 2
}

function buttonclick8(btnid){
    document.getElementById("btn8").style.backgroundImage = "url('x.png')";
    clicked8 = 1
    turn = 2
}

function buttonclick9(btnid){
    document.getElementById("btn9").style.backgroundImage = "url('x.png')";
    clicked9 = 1
    turn = 2
}

var bb = setInterval(random,100);
function random() {
    if(turn == 2) {
        var tall = Math.floor(Math.random() * 9);
        console.log(tall)
        if(tall == 0 && clicked1 == 0) {
            document.getElementById("btn1").style.backgroundImage = "url('o.png')";
            clicked1 = 1
            turn = 1
        }

        else if(tall == 1 && clicked2 == 0) {
            document.getElementById("btn2").style.backgroundImage = "url('o.png')";
            clicked2 = 1
            turn = 1
        }

        else if(tall == 2 && clicked3 == 0) {
            document.getElementById("btn3").style.backgroundImage = "url('o.png')";
            clicked3 = 1
            turn = 1
        }

        else if(tall == 3 && clicked4 == 0) {
            document.getElementById("btn4").style.backgroundImage = "url('o.png')";
            clicked4 = 1
            turn = 1
        }

        else if(tall == 4 && clicked5 == 0) {
            document.getElementById("btn5").style.backgroundImage = "url('o.png')";
            clicked5 = 1
            turn = 1
        }

        else if(tall == 5 && clicked6 == 0) {
            document.getElementById("btn6").style.backgroundImage = "url('o.png')";
            clicked6 = 1
            turn = 1
        }

        else if(tall == 6 && clicked7 == 0) {
            document.getElementById("btn7").style.backgroundImage = "url('o.png')";
            clicked7 = 1
            turn = 1
        }

        else if(tall == 7 && clicked8 == 0) {
            document.getElementById("btn8").style.backgroundImage = "url('o.png')";
            clicked8 = 1
            turn = 1
        }

        else if(tall == 8 && clicked9 == 0) {
            document.getElementById("btn9").style.backgroundImage = "url('o.png')";
            clicked9 = 1
            turn = 1
        }
        else {
            turn = 1
        }
    }
}