import { somma, sottr } from "./math.js"

let elN1 = document.querySelector('#n1');
let elN2 = document.querySelector('#n2');
let btnSomma = document.querySelector('#btnSomma');
let btnSottrai = document.querySelector('#btnSottr');
let elResult = document.querySelector('span');

const styleResult = ( res) => {
    elResult.style.color = res < 0 ? 'RED' : 'BLACK';
}

btnSomma.addEventListener('click', (e) => {
    /*
    commento multiriga
    ok
    */
    e.preventDefault();
    let res = somma(elN1.value,elN2.value);
    elResult.innerHTML = res;
    styleResult(res);
});
btnSottrai.addEventListener('click', (e) => {
    //commento
    e.preventDefault();
    let res = sottr(elN1.value,elN2.value); 
    elResult.innerHTML = res;
    styleResult(res);
});

