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
farge.addEventListener("click", function() {
    // Koden her blir utført når knappen blir klikket
    console.log("Knappen ble klikket");
    farge.style.backgroundColor = "blue";
});changeColor
function changeColor() {
    farge.style.backgroundColor = "blue";  
}
