var turn = 1
var allturns = 0 

var clicked1 = false
var clicked2 = false
var clicked3 = false
var clicked4 = false
var clicked5 = false
var clicked6 = false
var clicked7 = false
var clicked8 = false
var clicked9 = false


function buttonclick1(btnid){
    document.getElementById("btn1").style.backgroundImage = "url('x.png')";
    clicked1 = true
    turn = 2
    allturns +=1
}
function buttonclick2(btnid){
    document.getElementById("btn2").style.backgroundImage = "url('x.png')";
    clicked2 = true
    turn = 2
    allturns +=1
}

function buttonclick3(btnid){
    document.getElementById("btn3").style.backgroundImage = "url('x.png')";
    clicked3 = true
    turn = 2
    allturns +=1
}

function buttonclick4(btnid){
    document.getElementById("btn4").style.backgroundImage = "url('x.png')";
    clicked4 = true
    turn = 2
    allturns +=1
}

function buttonclick5(btnid){
    document.getElementById("btn5").style.backgroundImage = "url('x.png')";
    clicked5 = true
    turn = 2
    allturns +=1
}

function buttonclick6(btnid){
    document.getElementById("btn6").style.backgroundImage = "url('x.png')";
    clicked6 = true
    turn = 2
    allturns +=1
}

function buttonclick7(btnid){
    document.getElementById("btn7").style.backgroundImage = "url('x.png')";
    clicked7 = true
    turn = 2
    allturns +=1
}

function buttonclick8(btnid){
    document.getElementById("btn8").style.backgroundImage = "url('x.png')";
    clicked8 = true
    turn = 2
    allturns +=1
}

function buttonclick9(btnid){
    document.getElementById("btn9").style.backgroundImage = "url('x.png')";
    clicked9 = true
    turn = 2
    allturns +=1
}

var bb = setInterval(random,100);
function random() {
    while(turn == 2) {
        var tall = Math.floor(Math.random() * 9);
        console.log(tall)
        if(tall == 0 && clicked1 == false) {
            document.getElementById("btn1").style.backgroundImage = "url('o.png')";
            clicked1 = true
            turn = 1
            allturns +=1
        }

        else if(tall == 1 && clicked2 == false) {
            document.getElementById("btn2").style.backgroundImage = "url('o.png')";
            clicked2 = true
            turn = 1
            allturns +=1
        }

        else if(tall == 2 && clicked3 == false) {
            document.getElementById("btn3").style.backgroundImage = "url('o.png')";
            clicked3 = true
            turn = 1
            allturns +=1
        }

        else if(tall == 3 && clicked4 == false) {
            document.getElementById("btn4").style.backgroundImage = "url('o.png')";
            clicked4 = true
            turn = 1
            allturns +=1
        }

        else if(tall == 4 && clicked5 == false) {
            document.getElementById("btn5").style.backgroundImage = "url('o.png')";
            clicked5 = true
            turn = 1
            allturns +=1
        }

        else if(tall == 5 && clicked6 == false) {
            document.getElementById("btn6").style.backgroundImage = "url('o.png')";
            clicked6 = true
            turn = 1
            allturns +=1
        }

        else if(tall == 6 && clicked7 == false) {
            document.getElementById("btn7").style.backgroundImage = "url('o.png')";
            clicked7 = true
            turn = 1
            allturns +=1
        }

        else if(tall == 7 && clicked8 == false) {
            document.getElementById("btn8").style.backgroundImage = "url('o.png')";
            clicked8 = true
            turn = 1
            allturns +=1
        }

        else if(tall == 8 && clicked9 == false) {
            document.getElementById("btn9").style.backgroundImage = "url('o.png')";
            clicked9 = true
            turn = 1
            allturns +=1
        }

        else if (allturns >= 9) {
            break
        }
        
        else {
            var tall = Math.floor(Math.random() * 9);
            console.log(tall)
        }
    }
}
