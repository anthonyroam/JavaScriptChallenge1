const numbers = document.getElementsByClassName("card__number");
const numbersArray = Array.from(numbers);

let savedNumber = numbersArray.forEach(function(number) {
    number.addEventListener("click", function getValue (e) {
        let value = number.innerText;
        console.log(value);
        return value;
    })
}) 


