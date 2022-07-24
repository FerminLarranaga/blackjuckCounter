let currentVal = 0;
let cardsLeft = 2*52;
let realVal = 0;
let realValP = document.getElementById('realVal');
let cardsLeftP = document.getElementById("cardsLeft");
let altasP = document.getElementById("altas");
let mediasP = document.getElementById("medias");
let bajasP = document.getElementById("bajas");
const cards = {
    altas: cardsLeft/52*20,
    medias: cardsLeft/52*12,
    bajas: cardsLeft/52*20,
}
updateVals();

function addOne () {
    currentVal++;
    cardsLeft--;
    cards['bajas'] = cards.bajas-1;
    updateVals();
}

function addZero () {
    cardsLeft--;
    cards['medias'] = cards.medias-1;
    updateVals();
}

function substractOne(){
    currentVal--;
    cardsLeft--;
    cards['altas'] = cards.altas-1;
    updateVals();
}

function updateVals(){
    realVal = (currentVal/(cardsLeft/52).toFixed(3)).toFixed(1);
    realValP.innerText = realVal;
    cardsLeftP.innerText = cardsLeft;
    altasP.innerText = cards.altas;
    mediasP.innerText = cards.medias;
    bajasP.innerText = cards.bajas;
}