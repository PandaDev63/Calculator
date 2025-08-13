const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    if(display.value == "Infinity69"){
        window.alert("'SUS, U R.' Yoda said mysteriously...");
    }
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR"
    }
    if(display.value == "69"){
        window.alert("U R SUS");
        display.value = "U R SUS";
    }
    if(display.value == "58008"){
        let nice = window.prompt("Enter Text:");
        display.value = nice;
    }
    if(display.value == "jjk"){
        window.alert("Kaisen Jujutsu Is Better!!!!!!!!!!!!!!");
        display.value = "KJJ";
    }
}