let currentVal = 0;
let cardsLeft = 2*52;
let realVal = 0;
let currentValP = document.getElementById('currentVal');
let realValP = document.getElementById('realVal');
let cardsLeftP = document.getElementById("cardsLeft");

function addOne () {
    console.log('hi')
    currentVal++;
    cardsLeft--;
    updateVals();
}
function addZero(){
    cardsLeft--;
    updateVals();
}
function substractOne(){
    currentVal--;
    cardsLeft--;
    updateVals();
}

function updateVals(){
    realVal = (currentVal/Math.round(cardsLeft/52)).toFixed(3);
    currentValP.innerText = "currentVal: " + currentVal;
    realValP.innerText = "realVal: " + realVal;
    cardsLeftP.innerText = "Cards Left: " + cardsLeft;
}
