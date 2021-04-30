// definision des balises contenant le clic du bouton principal de l'exo
let baliseBtnExo1 = document.getElementById("btn-exo-1");
let baliseBtnExo2 = document.getElementById("btn-exo-2");
let baliseBtnExo3 = document.getElementById("btn-exo-3");
let baliseBtnExo4 = document.getElementById("btn-exo-4");
let baliseBtnExo5 = document.getElementById("btn-exo-5");
let baliseBtnExo6 = document.getElementById("btn-exo-6");
let baliseBtnExo7 = document.getElementById("btn-exo-7");
let baliseBtnExo8 = document.getElementById("btn-exo-8");

// definision des balises contenant une entrer text
const baliseInpExo2 = document.getElementById("inp-exo-2");
const baliseInpExo3 = document.getElementById("inp-exo-3");
const baliseInpExo4a = document.getElementById("inp-exo-4-1");
const baliseInpExo4b = document.getElementById("inp-exo-4-2");
const baliseInpExo4c = document.getElementById("inp-exo-4-3");
const baliseInpExo5 = document.getElementById("inp-exo-5");
const baliseInpExo6 = document.getElementById("inp-exo-6");

const baliseParExo1 = document.getElementById("par-exo-1");
const baliseParExo2 = document.getElementById("par-exo-2");

let temp1 = 0 ;

baliseBtnExo1.addEventListener("click", function(){
    if(temp1 == 0){
        console.log("initiation du compteur");
    }
    temp1 = temp1 + 1;
    console.log(temp1 - 1 + "+" + 1 + " = " + temp1);
    baliseBtnExo1.innerHTML = "compteur";
    baliseParExo1.innerHTML = temp1;
});

baliseBtnExo2.addEventListener("click", function(){
    vInp = parseInt(baliseInpExo2.value);
    console.log("valeur " + vInp + " entrer");
    if(vInp < 0){
        baliseParExo2.innerHTML = "solide";
    }
    else if(vInp == 0){
        baliseParExo2.innerHTML = "entre l'état solide et liquide";
    }
    else if(vInp > 0 && vInp < 100){
        baliseParExo2.innerHTML = "liquide";
    }
    else if(vInp == 100){
        baliseParExo2.innerHTML = "entre l'état gazeux et liquide";
    }
    else if(vInp > 100){
        baliseParExo2.innerHTML = "gazeux";
    }
    else{
        baliseParExo2.innerHTML = "rentre une valeur comme -12, 27 ou 140";
    }
});

baliseBtnExo3.addEventListener("click", function(){
    console.log("action sur btn-exo3");
});

baliseBtnExo4.addEventListener("click", function(){
    vJour = parseInt(baliseInpExo4a.value);
    vMois = parseInt(baliseInpExo4b.value);
    vAnnee = parseInt(baliseInpExo4c.value);
    console.log("le " + vJour + " " + vMois + " " + vAnnee )
    let boolMois31 = false ;
    let boolJourV = false ;
    if (vMois == "01" ||
    vMois == "03" ||
    vMois == "05" ||
    vMois == "07" ||
    vMois == "08" ||
    vMois == "10" ||
    vMois == "12"){
        boolMois31 = true;
    }
    else{
        boolMois31 = false;
    }
    if(boolMois31 == true){
        let vJour31
        if(vJour31 >= 1 && vJour31 <= 31){
            boolJourV = true;
        }
        else{
            boolJourV = false;
        }
    }

    let boolMois30;
    if(vMois == "04" ||
    vMois == "06" ||
    vMois == "09" ||
    vMois == "11"){
        boolMois30 = true;
    }
    else{
        boolJourV = false;
    }
});

baliseBtnExo5.addEventListener("click", function(){
    console.log("action sur btn-exo5");
});

baliseBtnExo6.addEventListener("click", function(){
    console.log("action sur btn-exo6");
});

baliseBtnExo7.addEventListener("click", function(){
    console.log("action sur btn-exo7");
});

baliseBtnExo8.addEventListener("click", function(){
    console.log("action sur btn-exo8");
});