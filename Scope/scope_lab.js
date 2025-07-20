//#region Global Scope
var globalVar = "I am a global variable";
let globalLet = "I am also global, but scope with let";
const globalConst = "I am a global constant";

console.log(globalVar);
console.log(globalLet);
console.log(globalConst);
//#endregion

//#region Block Scope
{
var blockVar ="I am a block-scoped variable";
let blockLet = "I am also a block-scoped variable, but scope with let"
const blockConst = " I am a block-scoped constant"
}
//console.log(blockVar);
//console.log(blockLet);
//console.log(blockConst);
//#endregion

//#region Function Scoped
function show() {
    var functionVar = "I am a blocked-scoped var";
    var functionLet = "I am a function block-scoped let";
    const functionConst = "I am a function block-scoped const";
}
show();
console.log(functionVar);
console.log(functionLet);
console.log(functionConst);
//#endregion