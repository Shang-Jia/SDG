var current_response = undefined;
var random = undefined;
var rightstring = 'Yes you are right!';
var wrongstring = "Sorry, that is actually not true";
var nextButton = '<button type="button" id="next" class="btn btn-primary btn-lg btn-block" onclick="ask()">Next</button>'
var current_question = 0

function init(){
    document.getElementById("question").innerHTML = st[current_question]['q'];
}


function ask(){
    current_question = current_question + 1
    var rr = document.getElementById("right-wrong");
    var next = document.getElementById("next");
    var details  = document.getElementById("details") ;
    rr.innerHTML = '';
    next.outerHTML = '<div id="next"></div>';
    details.innerHTML = '';
    //random = Math.floor((Math.random() * st.length));
    if (current_question >= st.length){
        current_question = 0
    }
    console.log(current_question) // logs curretn quesion number
    document.getElementById("question").innerHTML = st[current_question]['q'];
    
}

// on clicking true
function ontrue(){
    current_response = 1
    checkAnswer()
    showNext()
}
// onclicking false
function onfalse(){
    current_response = 0
    checkAnswer()
    showNext()
}
// checks answers after clicking
function checkAnswer(){
    if (current_response == st[current_question]['correct']) {
        document.getElementById("right-wrong").innerHTML = rightstring;
    } else { 
        document.getElementById("right-wrong").innerHTML = wrongstring;
    }
    document.getElementById("details").innerHTML = st[current_question]['a'];
}

function showNext(){
    var next = document.getElementById("next");
    next.outerHTML = nextButton; // makes button for next in html
}

init();