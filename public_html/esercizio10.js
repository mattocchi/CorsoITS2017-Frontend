/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";
var globale = 1;
function funzioneX() {
    var locale = 10;
    globale++;
    locale = locale + globale;
}
funzioneX();
console.log(globale);
funzioneX();
console.log(globale);
// console.log(locale); // non è definita

// test block scope ES6
console.log("test block scope");
for (let i = 0; i < 10; i++) {
    console.log(i);
}
// i non è accessibile da questo punto
console.log(i);
