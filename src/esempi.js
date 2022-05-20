import {somma} from "./math.js";
import {Point} from "./point.js";

console.log("script start");
console.log(new Date());

let msg = 'ciao xx';

const pi = 3.14;

if(msg === 'ciao'){
    console.log("il messaggio contiene ciao")
}else{
    console.log("il messaggio non contiene ciao")
}

for(let i=0;i<10;i++){
    console.log(i);
}

let i=0;
while(i<10){
    console.log('--' + i);
    i+=1;
}


console.log('somma: ' + somma(15,10));

let p = new Point(10,10);
console.log(p.tostring());
p.move(5,15);
console.log(p.tostring());