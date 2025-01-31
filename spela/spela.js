const cups = ['✘', '✘', '✘', '✘'];
const Xs = cups.map(() => '✓');
console.log(Xs); 
document.getElementById("demoMap").innerHTML = `(` + Xs + `)`;

const items = ['✘', '✘', '✓', '✘'];
const onlyX = items.filter(item => item === '✘');
console.log(onlyX); 
document.getElementById("demoFilter").innerHTML = `(` + onlyX + `)`;

const items1 = ['✘', '✘', '✓', '✘'];
const firstX = items1.find(item => item === '✘');
console.log(firstX); 
document.getElementById("demoFind").innerHTML = `(` + firstX + `)`;

const items2 = ['✓', '✓', '✓', '✘'];
let Bock = items2.filter(item => item === '✓').length;
document.getElementById("demoFindIndexOf").innerHTML = `(` + Bock + `)`;

const itemS2 = ['✓', '✓', '✓', '✘'];
const xIndex1 = itemS2.findIndex(item => item === '✘');
console.log(xIndex1); // 
document.getElementById("demoFindIndexOfX").innerHTML = `(` + xIndex1 + `)`;

const items3 = ['✘', '✘', '✘', '✘'];
items3.fill('✓', 1, 4);
console.log(items3); 
document.getElementById("demoFill").innerHTML = `(` + items3 + `)`;

const items4 = ['✓', '✘', '✘', '✓'];
const hasBock = items4.some(item => item === '✓');
console.log(hasBock); // true
document.getElementById("demoSome").innerHTML = `(` + hasBock + `)`;

const items5 = ['✘', '✘', '✘', '✓'];
const allXs = items5.every(item => item === '✘');
console.log(allXs); // false
document.getElementById("demoEvery").innerHTML = `(` + allXs + `)`;
