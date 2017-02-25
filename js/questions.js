var current_response = undefined;
var rightstring = 'Yes you are right!';
var wrongstring = "Sorry, that is actually not true";
// stereotypes stored in stereotypes.js
var stereotypes = [ screen];
var random = undefined;
  

function ask(){
    random = Math.floor((Math.random() * stereotypes.length));
    document.getElementById("question").innerHTML = stereotypes[random]['q'];
}

// on clicking true
function ontrue(){
    current_response = 1
    checkAnswer()
}
// onclicking false
function onfalse(){
    current_response = 0
    checkAnswer()
}
// checks answers after clicking
function checkAnswer(){
    if (current_response == stereotypes[random]['correct']) {
        document.getElementById("right-wrong").innerHTML = rightstring;
    } else { 
        document.getElementById("right-wrong").innerHTML = wrongstring;
    }
    document.getElementById("details").innerHTML = stereotypes[random]['a'];
}

ask();