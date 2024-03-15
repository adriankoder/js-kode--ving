//link til html
const farge = document.querySelector(".color");
let darkmode = true;

// Eventlistener for knappen
farge.addEventListener("click", function() {
    // Koden her blir utført når knappen blir klikket
    changeColor();
});

function changeColor() {
    darkmode = !darkmode;
    console.log(darkmode);
    if (darkmode) {
        farge.classList.add('black');
    } else {
        farge.classList.remove('color');
    }
}
