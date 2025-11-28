const display = document.getElementById("display");
const calculator = document.getElementById("calculator");
const goood = document.getElementById("goood");
const inu_sound = document.getElementById("inu-sound");
const sans_sound = document.getElementById("sans-sound");
const the_sound = document.getElementById("the-sound");
const techno_sound = document.getElementById("techno-sound");
const event_header = document.getElementById("event-header");
const techno = document.getElementById("techno");

let divided_by_zero_count = 0;
let secret_event = Math.random();
let random_event_id = Math.random();
let event_seconds = 60;
let current_event = `calc`;
let calc_random = Math.random();

techno_sound.loop = true;
sans_sound.loop = true;

setInterval(updateEventTimer, 1000);

function updateEventTimer(){
    event_header.innerHTML = `Random Event In ${event_seconds} Seconds`
    event_seconds--;
    if(event_seconds < 0){
        event_seconds = 60
        if(random_event_id < 0.6){
            mogus();
            random_event_id = Math.random();
        }
        if(random_event_id > 0.6 && random_event_id < 0.9){
            sans();
            random_event_id = Math.random();
        }
        if(random_event_id > 0.9 && random_event_id < 0.969){
            calc();
            window.alert(`sans`);
            random_event_id = Math.random();
        }
        if(random_event_id > 0.969){
            technoblade();
            random_event_id = Math.random();
        }
    }
}

function technoblade(){
    current_event = `techno`;
    document.title = "Technoblade Is Invading";
    sans_sound.pause();
    techno_sound.play();
    document.getElementById("sans").hidden = true;
    document.getElementById("sans1").hidden = true;
    document.getElementById("sans2").hidden = true;
    document.getElementById("sussy").hidden = true;
    goood.hidden = false;
    goood.innerHTML = `GET GOOD`
    calculator.hidden = true;
    techno.hidden = false;
    document.getElementById("techno1").hidden = false;
    document.getElementById("techno2").hidden = false;
    document.getElementById("techno3").hidden = false;
    document.getElementById("techno4").hidden = false;
}
function calc(){
    current_event = `calc`;
    document.title = "Calculator";
    sans_sound.pause();
    techno_sound.pause();
    document.getElementById("sans").hidden = true;
    document.getElementById("sans1").hidden = true;
    document.getElementById("sans2").hidden = true;
    document.getElementById("sussy").hidden = true;
    goood.hidden = true;
    techno.hidden = true;
    document.getElementById("techno1").hidden = true;
    document.getElementById("techno2").hidden = true;
    document.getElementById("techno3").hidden = true;
    document.getElementById("techno4").hidden = true;
    calculator.hidden = false;
}
function sans(){
    current_event = `sans`;
    document.getElementById("sussy").hidden = true;
    document.title = "Sans Is Invading.";
    sans_sound.play();
    techno_sound.pause();
    document.getElementById("sans").hidden = false;
    document.getElementById("sans1").hidden = false;
    document.getElementById("sans2").hidden = false;
    goood.hidden = false;
    techno.hidden = true;
    document.getElementById("techno1").hidden = true;
    document.getElementById("techno2").hidden = true;
    document.getElementById("techno3").hidden = true;
    document.getElementById("techno4").hidden = true;
    goood.innerHTML = `SKILL ISSUE`
    calculator.hidden = true;
}
function mogus(){
    current_event = `mogus`;
    document.title = "The Among Us Are Invading.";
    sans_sound.pause();
    techno_sound.pause();
    document.getElementById("sans").hidden = true;
    document.getElementById("sans1").hidden = true;
    document.getElementById("sans2").hidden = true;
    document.getElementById("sussy").hidden = false;
    goood.hidden = true;
    document.getElementById("techno1").hidden = true;
    document.getElementById("techno2").hidden = true;
    document.getElementById("techno3").hidden = true;
    document.getElementById("techno4").hidden = true;
    techno.hidden = true;
    calculator.hidden = true;
}

if(secret_event > 0.9 && secret_event < 0.98){
    window.alert(`Ligma...`);
}
if(secret_event > 0.98){
    window.alert(`Hello`);
    window.alert(`You Are Very Lucky`);
    window.alert(`This Is A Rare Event`);
    window.alert(`I Just Wanna Say`);
    window.alert(`If You Find Any Bugs...`);
    window.alert(`You Can Yap About It To The Dev`);
    window.alert(`Not Me Though`);
    window.alert(`sans Is The Dev Now`);
    window.alert(`This Site Will Explode In...`);
    window.alert(`3`);
    window.alert(`2`);
    window.alert(`1`);
    window.location.replace("https://www.google.com/");
}

function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    if(calc_random > 0.9){
        the_sound.play();
    }
    calc_random = Math.random();
    if(display.value == "Infinity69"){
        window.alert("'SUS, U R,' Yoda said mysteriously...");
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
        inu_sound.play();
    }
    if(display.value == "virus"){
        for (let i = 0; i < 14; i++){
            window.open("https://pandadev63.github.io/Calculator/");
        }
    }
    if(display.value == "among us"){
        while (true){
            let start = window.prompt("Do you wish to start the invasion? (y/n)");
            if (start == "y"){
                window.alert("The invasion has started.");
                mogus()
                break;
            }
            if (start == "n"){
                window.alert("Too bad...");
                window.alert("The invasion has started.");
                mogus()
                break;
            }
        }
    }
        if(display.value == "sans"){
        while (true){
            let start = window.prompt("Do you wish to start the invasion? (y/n)");
            if (start == "y"){
                window.alert("The invasion has started.");
                sans()
                break;
            }
            if (start == "n"){
                window.alert("Too bad...");
                window.alert("The invasion has started.");
                sans()
                break;
            }
        }
    }
}
