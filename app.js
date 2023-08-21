// console.log('Hello');

let a = 10;
const b = 20;
console.log(typeof a, a);

// a = a + '';
a = a + 10;
console.log(typeof a, a);

// let c = 1; 

// if(--c){
//     console.log("YES")
// }
// else{
//     console.log("NO")
// }

let c = 1; 

// && ||

if(c-- && c){
    console.log("YES")
}
else{
    console.log("NO")
}

// let result;
// let digit = 5;

// if (10>digit){
//     result = 'YES';
// }else {
//      result = 'NO';
// }
// console.log(result);

10 > digit && (result = 'YES') || (result = 'NO');
console.log(result);