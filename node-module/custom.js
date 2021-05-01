// console.log('here is custom module');
// const name = "Nivanna"

// module.exports = name;

// const add = function(a, b){
//     return a + b;
// }

// module.exports = add;

const add = function(a, b){
    return a+b;
}
const sub = function(a,b){
    return a-b;
}

module.exports = {add, sub}