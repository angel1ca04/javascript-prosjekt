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

var box1 = ""
var box2 = ""
var box3 = ""
var box4 = ""
var box5 = ""
var box6 = ""
var box7 = ""
var box8 = ""
var box9 = ""


function three_in_row_check(c) {

    // first row
    if (box1 == c && box2 == c && box3 == c) {
        if(c == "X"){
            window.alert("You won")
        }
        else if(c == "O"){
            window.alert("You lose")
        }
        else {
            window.alert("Draw")
        }
        location.reload();
    }
    // second row
    if (box4 == c && box5 == c && box6 == c) {
        if(c == "X"){
            window.alert("You won")
        }
        else if(c == "O"){
            window.alert("You lose")
        }
        else {
            window.alert("Draw")
        }
        location.reload();
    }
    // third row
    if (box7 == c && box8 == c && box9 == c) {
        if(c == "X"){
            window.alert("You won")
        }
        else if(c == "O"){
            window.alert("You lose")
        }
        else {
            window.alert("Draw")
        }
        location.reload();
    }
    // first horizonta
    if (box1 == c && box4 == c && box7 == c) {
        if(c == "X"){
            window.alert("You won")
        }
        else if(c == "O"){
            window.alert("You lose")
        }
        else {
            window.alert("Draw")
        }
        location.reload();
    }
    // second horizontal line
    if (box2 == c && box5 == c && box8 == c) {
        if(c == "X"){
            window.alert("You won")
        }
        else if(c == "O"){
            window.alert("You lose")
        }
        else {
            window.alert("Draw")
        }
        location.reload();
    }
    // third horizontal line
    if (box3 == c && box6 == c && box9 == c) {
        if(c == "X"){
            window.alert("You won")
        }
        else if(c == "O"){
            window.alert("You lose")
        }
        else {
            window.alert("Draw")
        }
        location.reload();
    }
    //  line down to the right
    if (box1 == c && box5 == c && box9 == c) {
        if(c == "X"){
            window.alert("You won")
        }
        else if(c == "O"){
            window.alert("You lose")
        }
        else {
            window.alert("Draw")
        }
        location.reload();
    }
    // line down to the left
    if (box3 == c && box5 == c && box7 == c) {
        if(c == "X"){
            window.alert("You won!")
        }
        else if(c == "O"){
            window.alert("You lose...")
        }
        else {
            window.alert("Draw")
        }
        location.reload();
    }
    
}


var aa = setInterval(testwin,100);
function testwin() { 
    
    
    three_in_row_check("X")
    three_in_row_check("O")

}


function buttonclick1(btnid){
    if(clicked1 ==false) {
        document.getElementById("btn1").style.backgroundImage = "url('x.png')";
        clicked1 = true
        turn = 2
        allturns +=1
        box1 = "X"
    } else {
        window.alert("alrdy clicked")
    }

}
function buttonclick2(btnid){
    if(clicked2 == false) {
        document.getElementById("btn2").style.backgroundImage = "url('x.png')";
        clicked2 = true
        turn = 2
        allturns +=1
        box2 = "X"
    } else {

    }
}

function buttonclick3(btnid){
    if(clicked3 == false) {
        document.getElementById("btn3").style.backgroundImage = "url('x.png')";
        clicked3 = true
        turn = 2
        allturns +=1
        box3 = "X"
    } else {
        window.alert("alrdy clicked")
    }
}

function buttonclick4(btnid){
    if(clicked4 == false) {
        document.getElementById("btn4").style.backgroundImage = "url('x.png')";
        clicked4 = true
        turn = 2
        allturns +=1
        box4 = "X"
    } else {
        window.alert("alrdy clicked")
    }
}

function buttonclick5(btnid){
    if(clicked5 == false) {
        document.getElementById("btn5").style.backgroundImage = "url('x.png')";
        clicked5 = true
        turn = 2
        allturns +=1
        box5 = "X"
    } else {
        window.alert("alrdy clicked")
    }
}

function buttonclick6(btnid){
    if(clicked6 == false) {
        document.getElementById("btn6").style.backgroundImage = "url('x.png')";
        clicked6 = true
        turn = 2
        allturns +=1
        box6 = "X"
    } else {
        window.alert("alrdy clicked")
    }
}

function buttonclick7(btnid){
    if(clicked7 == false) {
        document.getElementById("btn7").style.backgroundImage = "url('x.png')";
        clicked7 = true
        turn = 2
        allturns +=1
        box7 = "X"
    } else {
        window.alert("alrdy clicked")
    }
}

function buttonclick8(btnid){
    if(clicked8 == false) {
        document.getElementById("btn8").style.backgroundImage = "url('x.png')";
        clicked8 = true
        turn = 2
        allturns +=1
        box8 = "X"
    } else {
        window.alert("alrdy clicked")
    }
}

function buttonclick9(btnid){
    if(clicked9 == false) {
        document.getElementById("btn9").style.backgroundImage = "url('x.png')";
        clicked9 = true
        turn = 2
        allturns +=1
        box9 = "X"
    } else {
        window.alert("alrdy clicked")
    }
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
            box1 = "O"
        }

        else if(tall == 1 && clicked2 == false) {
            document.getElementById("btn2").style.backgroundImage = "url('o.png')";
            clicked2 = true
            turn = 1
            allturns +=1
            box2 = "O"
        }

        else if(tall == 2 && clicked3 == false) {
            document.getElementById("btn3").style.backgroundImage = "url('o.png')";
            clicked3 = true
            turn = 1
            allturns +=1
            box3 = "O"
        }

        else if(tall == 3 && clicked4 == false) {
            document.getElementById("btn4").style.backgroundImage = "url('o.png')";
            clicked4 = true
            turn = 1
            allturns +=1
            box4 = "O"
        }

        else if(tall == 4 && clicked5 == false) {
            document.getElementById("btn5").style.backgroundImage = "url('o.png')";
            clicked5 = true
            turn = 1
            allturns +=1
            box5 = "O"
        }

        else if(tall == 5 && clicked6 == false) {
            document.getElementById("btn6").style.backgroundImage = "url('o.png')";
            clicked6 = true
            turn = 1
            allturns +=1
            box6 = "O"
        }

        else if(tall == 6 && clicked7 == false) {
            document.getElementById("btn7").style.backgroundImage = "url('o.png')";
            clicked7 = true
            turn = 1
            allturns +=1
            box7 = "O"
        }

        else if(tall == 7 && clicked8 == false) {
            document.getElementById("btn8").style.backgroundImage = "url('o.png')";
            clicked8 = true
            turn = 1
            allturns +=1
            box8 = "O"
        }

        else if(tall == 8 && clicked9 == false) {
            document.getElementById("btn9").style.backgroundImage = "url('o.png')";
            clicked9 = true
            turn = 1
            allturns +=1
            box9 = "O"
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
