const numbers = document.getElementsByClassName("card__number");
const numbersArray = Array.from(numbers);

let savedNumber = numbersArray.forEach(function(number) {
    number.addEventListener("click", function getValue (e) {
        let value = number.innerText;
        writeNumber(value);
    })
}) 

function writeNumber(value) {
    const stars = document.getElementById("card__selection");
    stars.innerText = `You selected ${value} out of 5`;
}

//Con esto alterno la clase que aporta el display:none para lograr que se alternen.
function changeDiv () {
    const div1 = document.getElementById("div1");
    const div2 = document.getElementById("div2");
    if (div1.className == "main-container") {
        div1.className = "main-container off";
        div2.className = "main-container";

    }

    else {
        div2.className = "main-container off";
        div1.className = "main-container";
    }
}
