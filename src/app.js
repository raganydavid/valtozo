const num1 = 37;
// num1 = 25; //hibas
console.log(num1);

if(num1 == 37) {
    var a = 35;  
    let d = 47;
    console.log(d);
}
// a let az lokalis a var globalis valtozo
var b = 37;

const num1Elem = document.querySelector('#num1');
const getButton = document.querySelector('#getButton');

getButton.addEventListener('click', () => {
    let szam = num1Elem.value;
    num1Elem.value = ''
    kiir(szam);
    vizsgalat(szam);
});

//regex
function vizsgalat(input) {
    let egyezik = input.match(/^ab[0-9]+$/);
    if(egyezik) {
        console.log('egyezik');
    } else {
        console.log('NOPE');
    }
}

function kiir(szam) {
    if (szam == 1) {
        console.log('egy');
    }else if (szam == 2) {
        console.log("kettő")
    }else if (szam == 3) {
        console.log("három")
    }else {
        console.log('ismeretlen érték')
    }
}

console.log(window.screen.width);
console.log(window.screen.height);

console.error('uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu');

const doboz1Elem = document.querySelector('#doboz1');
const startButtonElem = document.querySelector('#startButton');

startButtonElem.addEventListener('click', () => {
    doboz1Elem.style.backgroundColor = 'magenta';
    doboz1Elem.style.animation = 'valami1 5s';

});

//tömbök bejárásaS
var szamokTomb = [35, 42, 27, 55, 72, 421];
szamokTomb.forEach((szam) => {
    console.log(szam);
});