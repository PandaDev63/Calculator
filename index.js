const display = document.getElementById("display");
const sound = document.getElementById("inu-sound")

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    if(display.value == "Infinity69"){
        window.alert("'SUS, U R,' Yoda said mysteriously...");
    }
    if(display.value == "9/11"){
        window.alert("BAD DOG!");
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
    if(display.value == "inumaki"){
        window.alert("YOUR JORDANS ARE FAKE!!!");
        display.value = "INUMAKI";
        sound.play()
    }
    if(display.value == "virus"){
        for (let i = 0; i < 14; i++){
            window.open("https://pandadev63.github.io/Calculator/")
        }
    }
}