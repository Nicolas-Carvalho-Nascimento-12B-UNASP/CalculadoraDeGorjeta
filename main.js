let bill = 0;
let tipPercentage = 0;
let numberOfPeople = 0;

let billInput = document.querySelector('#bill');
billInput.addEventListener("input", reciveBillValue)

let numberOfPeopleInput = document.querySelector('#people');
numberOfPeopleInput.addEventListener("input", reciveNumberOfPeopleValue)

function reciveBillValue() {
    bill = billInput.valueAsNumber;

    calculate();
}

function reciveNumberOfPeopleValue() {
    numberOfPeople = numberOfPeopleInput.valueAsNumber;

    calculate();
}

function calculate() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        console.log("É possivel calcular")
    } else {
        console.log("Não é possivel calcular. Preencha todos os campos.")
    }
}








