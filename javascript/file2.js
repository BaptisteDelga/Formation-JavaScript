function maFonction() {
    console.log("Hello World");
}
maFonction();

var x = 1;
var y = 3;
var z = '8';
var t = "2";
var u = "bonjour";
var v = "3bonjour";
var m;
var n = 2.5;
console.log(x + y); // 4
console.log(x + z); // 18
console.log(x + parseInt(z)); // 9
console.log(x + t); // 12
console.log(x + y + z); // 48
console.log(z + y + x); // 831
console.log(x + u); // 1bonjour
console.log(x + parseInt(u)); // NaN
console.log(x + v); // 13bonjour
console.log(x + parseInt(v)); // 4
console.log(u + v); // bonjour3bonjour
console.log(x + m); // NaN
console.log(x + n); // 3.5

var a = "bon";
var b = 'jour';
var resultat = a * b;
console.log(resultat);
// affiche NaN
console.log(b + parseInt(a));
// affiche jourNaN

var x = 3;
if (x > 0)
{
console.log(x + " est strictement positif");
} else {
    console.log(x + " est strictement négatif");
}

var x = 4;
if (x % 2 == 0)
{
    console.log(x + " est pair");
} else {
    console.log(x + " est inpair");
}

function fct(){
    for(i=0 ; i<=10 ;i++){
        i%2==0 ? console.log(i) : {};
    }
}
fct()