let a = 20
let b = 30

let add = a + b;
console.log({add});

let substract = a - b;
console.log({substract});

let division = a / b;
console.log ({division});

let multiplication = a * b;
console.log({multiplication});

let c = '20';
let looselyEgualTo = a == c;
console.log ({looselyEgualTo}); 

let strictlyEgualTo = a === c;
console.log({strictlyEgualTo});

let notEqualTo = a != c;
console.log({notEqualTo});

let strictlyNotEgualTo = a !==c;
console.log({strictlyNotEgualTo});

// Increment
a++;
console.log({a});

// Decrement
b--;
console.log({b});

a+=5;
console.log({a});

// implicit coercion
let d = 1 * c;
console.log({d});

let e = +c;
console.log({e});

// explicit coercion
let f = Number(c);
console.log({f});


