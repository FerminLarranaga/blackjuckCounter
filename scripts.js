let currentVal = 0;
let cardsLeft = 6*52;
let realVal = 0;
let currentValP = document.getElementById('currentVal');
let realValP = document.getElementById('realVal');
currentValP.innerText = 'currentVal';

function addOne () {
    console.log('hi')
    currentVal++;
    cardsLeft--;
    realVal = currentVal/Math.ceil(cardsLeft/52);
    currentValP.innerText = currentVal;
    realValP.innerText = realVal;
}
function addZero(){
    cardsLeft--;
    realVal = currentVal/Math.ceil(cardsLeft/52);
    currentValP.innerText = currentVal;
    realValP.innerText = realVal;
}
function substractOne(){
    currentVal--;
    cardsLeft--;
    realVal = currentVal/Math.ceil(cardsLeft/52);
    currentValP.innerText = currentVal;
    realValP.innerText = realVal;
}