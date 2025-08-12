const display = document.getElementById("display");

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    if(display.value == "69"){
        window.alert("U R SUS");
    }
    if(display.value == "infinity69"){
        window.alert("U TRULY R VERY SUS")
    }
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "ERROR"
    }
}
