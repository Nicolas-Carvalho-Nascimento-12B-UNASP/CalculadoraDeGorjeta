let bill = 0;
let tipPercentage = 0;
let numberOfPeople = 0;
let buttonSelected = null;

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

function reciveTipPercentageValue(value) {
    tipPercentage = value / 100;

    removeClassButtonSelected()

    buttonSelected = document.querySelector(`#button-${value}`);
    buttonSelected.classList.add("button-selected");
}

function removeClassButtonSelected() {
    if (buttonSelected !== null) {
        buttonSelected.classList.remove("button-selected");
        buttonSelected = null;
    }
}

function calculate() {
    if (bill !== 0 && tipPercentage !== 0 && numberOfPeople !== 0) {
        console.log("É possivel calcular")
    } else {
        console.log("Não é possivel calcular. Preencha todos os campos.")
    }
}