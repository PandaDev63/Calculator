const display = document.getElementById("display");
const goood = document.getElementById("goood")
const sound = document.getElementById("inu-sound")
const sound1 = document.getElementById("sans-sound")

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
        display.value = "ERROR";
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
        sound.play();
    }
    if(display.value == "virus"){
        for (let i = 0; i < 14; i++){
            window.open("https://pandadev63.github.io/Calculator/");
        }
    }
    if(display.value == "among us"){
        while (true){
            let start = window.prompt("Do you wish to start the ivasion? (y/n)");
            if (start == "y"){
                window.alert("The invasion has started.");
                document.title = "The Among Us Are Ivading.";
                document.getElementById("sussy").hidden = false;
                document.getElementById("calculator").hidden = true;
                break;
            }
            if (start == "n"){
                window.alert("Too bad...");
                window.alert("The invasion has started.");
                document.title = "The Among Us Are Ivading.";
                document.getElementById("sussy").hidden = false;
                document.getElementById("calculator").hidden = true;
                break;
            }
        }
    }
        if(display.value == "sans"){
        while (true){
            let start = window.prompt("Do you wish to start the ivasion? (y/n)");
            if (start == "y"){
                window.alert("The invasion has started.");
                document.title = "Sans Is Ivading.";
                document.getElementById("calculator").hidden = true;
                sound1.play();
                sound1.loop = true;
                document.getElementById("sans").hidden = false;
                document.getElementById("sans1").hidden = false;
                document.getElementById("sans2").hidden = false;
                goood.hidden = false;
                break;
            }
            if (start == "n"){
                window.alert("Too bad...");
                window.alert("The invasion has started.");
                document.title = "Sans Is Ivading.";
                document.getElementById("calculator").hidden = true;
                sound1.play();
                sound1.loop = true;
                document.getElementById("sans").hidden = false;
                document.getElementById("sans1").hidden = false;
                document.getElementById("sans2").hidden = false;
                goood.hidden = false;
                break;
            }
        }
    }
}