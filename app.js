

var answer = document.querySelector(".answer-box");
var button = document.querySelector(".check-answer");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var error = document.querySelector(".error");


button.onclick=function() {


    if(answer.value == "") {
        console.log("must type a response")
        error.style.display = "block";
        correct.style.display = "none";
        incorrect.style.display = "none";
        throw console.error("empty field");
        
    } 
    else if(answer.value === "4") {
    console.log("correct");
    error.style.display = "none";
    correct.style.display = "block";
    incorrect.style.display = "none";

} else {
    console.log("wrong");
    error.style.display = "none";
    incorrect.style.display = "block";
    correct.style.display = "none";
}

}

