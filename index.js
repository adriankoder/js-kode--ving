//let hungry = true;
//const ishungry = "personen er sulten" + hungry;

//console.log(ishungry)
//const tekst1 = 5
//const tekst2 = 10
//console.log(tekst1 + tekst2)




// const tekst1 = 5
// const tekst2 = 10
// function addnums() {

// const sum =tekst1 + tekst2;
// console.log(sum)}
// addnums ();
// function changeColor() {
//     // let colorBox = document.getElementById("colorBox");
// }

// let knapp = document.getElementById("minKnapp");

// Legg til en lytter for museklikk på knappen

const farge = document.querySelector("#color");
let darkMode = true;
function changeColor() {
    console.log(darkMode)
    farge.style.backgroundColor = "blue";  
    darkMode =!darkMode;
console.log(darkMode);}
