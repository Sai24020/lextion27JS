const cups = ['Kaffe', 'Kaffe', 'Kaffe', 'Kaffe'];
const bottles = cups.map(() => 'Nappflaska');
console.log(bottles); 
document.getElementById("demoMap").innerHTML = `(` + bottles + `)`;

const items = ['Kaffe', 'Kaffe', 'Nappflaska', 'Kaffe'];
const onlyCups = items.filter(item => item === 'Kaffe');
console.log(onlyCups); 
document.getElementById("demoFilter").innerHTML = `(` + onlyCups + `)`;

const items1 = ['Kaffe', 'Kaffe', 'Nappflaska', 'Kaffe'];
const firstCup = items1.find(item => item === 'Kaffe');
console.log(firstCup); 
document.getElementById("demoFind").innerHTML = `(` + firstCup + `)`;

const items2 = ['Nappflaska', 'Nappflaska', 'Nappflaska', 'Kaffe'];
let nappFlaska = items2.filter(item => item === 'Nappflaska').length;
document.getElementById("demoFindIndexOf").innerHTML = `(` + nappFlaska + `)`;

const itemS2 = ['Nappflaska', 'Nappflaska', 'Nappflaska', 'Kaffe'];
const cupIndex1 = itemS2.findIndex(item => item === 'Kaffe');
console.log(cupIndex1); // 
document.getElementById("demoFindIndexOfKaffe").innerHTML = `(` + cupIndex1 + `)`;

const items3 = ['Kaffe', 'Kaffe', 'Kaffe', 'Kaffe'];
items3.fill('Nappflaska', 1, 4);
console.log(items3); 
document.getElementById("demoFill").innerHTML = `(` + items3 + `)`;

const items4 = ['Nappflaska', 'Kaffe', 'Kaffe', 'Nappflaska'];
const hasBottle = items4.some(item => item === 'Nappflaska');
console.log(hasBottle); // true
document.getElementById("demoSome").innerHTML = `(` + hasBottle + `)`;

const items5 = ['Kaffe', 'Kaffe', 'Kaffe', 'Nappflaska'];
const allCups = items5.every(item => item === 'Kaffe');
console.log(allCups); // false
document.getElementById("demoEvery").innerHTML = `(` + allCups + `)`;
