

var lengteInCm = parseInt(prompt("hoe lang is u pakket in cm?"));
console.log(lengteInCm);

var breedteInCm = parseInt(prompt("hoe breedt is u pakket in cm?"));
console.log(breedteInCm);

var hoogteInCm= parseInt(prompt("hoe hoog is u pakket in cm?"));
console.log(hoogteInCm);

var gewichtInKg = parseInt(prompt("hoe zwaar is u pakket in kg"));
console.log(gewichtInKg);

var afstandInKm = parseInt(prompt("wat is de afstand in km?"));


var tijdsduur = parseInt(prompt("wat is de tijdsduur in minuten?"));
comnsole.log(tijdsduurInMinuten);

var laadvermogen = parseInt(prompt("wat is de laadvermogen in kg?"));
comsole.log(laadvermogenInKg);

var afmetingenlaadruimte = parseInt(prompt("wat is da afmeting van de laadruimte in cm?"));
console.log(afmetinglaadruimteInCm);

var actieradiusvervoersmiddelInKm = parseInt(prompt("wat is de actieradius van de vervoermiddel in km?"));
console.log(actieradiusvervoersmiddelInKm);


comsole.log(PakketB, pakketH, pakketL);

console.log(laadruimteh, laadruimteb, laadruimteb);


if (pakketLengte<LaadvermogenLengteInCm){
    console.log ("pakket is te groot")
    document.getElementById("pastL").innerHTML="pakket is te groot";
    resultaat = false;
}
else{  document.getElementById("pastL").innerHTML="het pakket past";
}

if (pakketBreedte<=LaadvermogenBreedteInCm){
    console.log ("pakket is te breedt")
}
else{ console.log ("het pakket past");}
 
if (pakketHoogte<=LaadvermogenHoogteInCm){
    console.log ("pakket is te lang")
}
else{ console.log ("het pakket past");}
 
if (pakketGewicht<=LaadvermogenInKg){
    console.log ("pakket is te zwaar")
}
else{ console.log ("het pakket past");
}