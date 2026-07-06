let birthyear = document.getElementById("birthyearInput");
let button = document.getElementById("calculatorbtn");
let result = document.getElementById("result");
button.addEventListener("click",function(){
    birthyear = birthyear.value;
    if(birthyear === ""){
        result.textContent = "Please enter your birth year to know your age."
        return;
    }
    let age = 2026 - birthyear;
    result.textContent = "Your age is " + age + "." ;
})