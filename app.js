

var answer = document.querySelector(".answer-box");
var button = document.querySelector(".check-answer");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");


button.onclick=function() {


    if(answer.value == "") {
        console.log("must type a response")
        correct.style.display = "none";
        incorrect.style.display = "none";
        throw console.error("empty field");
        
    } 
    else if(answer.value === "4") {
    console.log("correct");
    correct.style.display = "block";
    incorrect.style.display = "none";

} else {
    console.log("wrong");
    incorrect.style.display = "block";
    correct.style.display = "none";
}

}

