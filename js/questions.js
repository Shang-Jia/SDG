var current_response = undefined;
var random = undefined;
var rightstring = 'Yes you are right!';
var wrongstring = "Sorry, that is actually not true";
var nextButton = '<button type="button" id="next" class="btn btn-primary btn-lg btn-block" onclick="ask()">Next</button>'


// function init(){
//     random = Math.floor((Math.random() * st.length));
//     document.getElementById("question").innerHTML = st[random]['q'];
// }


function ask(){
    console.log('asked')
    var rr = document.getElementById("right-wrong");
    var next = document.getElementById("next")
    var details  = document.getElementById("details") 
    rr.innerHTML = ''
    next.outerHTML = '<div id="next"></div>'
    details.innerHTML = ''
    random = Math.floor((Math.random() * st.length));
    document.getElementById("question").innerHTML = st[random]['q'];
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
    if (current_response == st[random]['correct']) {
        document.getElementById("right-wrong").innerHTML = rightstring;
    } else { 
        document.getElementById("right-wrong").innerHTML = wrongstring;
    }
    document.getElementById("details").innerHTML = st[random]['a'];
}

function showNext(){
    var next = document.getElementById("next");
    next.outerHTML = nextButton;
}
ask();