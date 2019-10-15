var randomSiffra = setSiffraRandom();
var antTry=0;
var maxAntalTry=10;


function setSiffraRandom(){
    let random = Math.floor(Math.random() * 100) + 1;
    return random;
}

function kollaSvar(){ // Huvudfunktion
     var svar1 = document.getElementById("svaret");
     var svar2 = document.getElementById("antGgr");

     var svarNr = parseInt(document.getElementById("nummer").value);

     if(svarNr < 1 || svarNr > 100){
         svar1.innerHTML = "1 är lägsta och 100 är högsta talet du kan välja";
        return false;
    }

    antTry++;

    svar2.innerHTML = "Du har försökt " + antTry + " gånger";

    if(isOkey(svarNr)){
        svar1.innerHTML = "Rätt svar. Du är KUNG!!";
    }else if(isHigher(svarNr)){
        svar1.innerHTML = "Du svarade för högt!";
    }else if(isLower(svarNr)){
        svar1.innerHTML = "Du svarade för lågt!";
    }
    if(maxGuess(antTry)){
        svar1.innerHTML = "Du har svarat max antal gånger";
    }


}

function isOkey(a){
    if(a == randomSiffra){
        return true;
    }else{
        return false;
    }
}
function isLower(a){
    if(a < randomSiffra){
        return true;
    }else{
        return false;
    }
}
function isHigher(a){
    if(a > randomSiffra){
        return true;
    }else{
        return false;
    }

}

function maxGuess(b){ // Kolla om man gissat max antal gånger
    if(b >= maxAntalTry){
        nollStall(); // Nollställer allt
        return true;
    }else{
        return false;
    }
}

function nollStall(){
    randomSiffra = setSiffraRandom(); // Hämtar ny slumpsiffra
    antTry = 0;
}

